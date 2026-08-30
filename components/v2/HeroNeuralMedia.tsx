"use client";

import { useEffect, useState } from "react";

const desktopMotionQuery =
  "(min-width: 721px) and (prefers-reduced-motion: no-preference)";

export function HeroNeuralMedia() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(desktopMotionQuery);
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;

    const syncPlayback = () => {
      setPlayVideo(media.matches && !connection?.saveData);
    };

    syncPlayback();
    media.addEventListener("change", syncPlayback);

    return () => media.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <div className="v2-hero-neural-layer" aria-hidden="true">
      <img
        className="v2-hero-neural-poster"
        src="/hero-neural-poster.webp"
        alt=""
        width="768"
        height="428"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      {playVideo ? (
        <video
          className="v2-hero-neural-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero-neural-poster.webp"
          tabIndex={-1}
        >
          <source src="/hero-neural.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
