"use client";

import { useEffect } from "react";

const HOLD_CLASS = "v2-reveal-hold";
const VISIBLE_CLASS = "is-visible";

/** Content must never stay hidden because of a failed animation. */
const SAFETY_RELEASE_MS = 3000;

/**
 * Turns the load-time `.v2-reveal` animation into a scroll-driven one.
 *
 * Fail-safe by construction:
 *  - only elements that start below the viewport are held back, so anything
 *    already on screen is never hidden;
 *  - a safety timer releases everything if the observer never reports;
 *  - without JavaScript, or with reduced motion, nothing is held at all.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(".v2-reveal"));
    if (targets.length === 0) return;

    const release = (element: HTMLElement) => {
      if (!element.classList.contains(HOLD_CLASS)) return;
      element.classList.add(VISIBLE_CLASS);
    };

    // Hold back only what the visitor cannot see yet.
    const viewportBottom = window.innerHeight;
    const held = targets.filter((element) => element.getBoundingClientRect().top > viewportBottom * 0.9);
    held.forEach((element) => element.classList.add(HOLD_CLASS));

    let safetyTimer = window.setTimeout(() => held.forEach(release), SAFETY_RELEASE_MS);

    if (!("IntersectionObserver" in window)) {
      held.forEach(release);
      return () => window.clearTimeout(safetyTimer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          release(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    held.forEach((element) => observer.observe(element));

    return () => {
      window.clearTimeout(safetyTimer);
      observer.disconnect();
      held.forEach((element) => element.classList.remove(HOLD_CLASS));
    };
  }, []);

  return null;
}
