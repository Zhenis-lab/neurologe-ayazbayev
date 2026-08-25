"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const items = [
  { href: "/about", ru: "Обо мне", de: "Über mich" },
  { href: "/uslugi", ru: "Услуги", de: "Leistungen" },
  { href: "/faq", ru: "Вопросы", de: "FAQ" },
  { href: "/kontakt", ru: "Контакты", de: "Kontakt" }
];

export function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"ru" | "de">("ru");
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem("site-language");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const detected = timeZone === "Europe/Berlin" ? "de" : "ru";
    const initial = saved === "de" || saved === "ru" ? saved : detected;
    setLang(initial);
    document.documentElement.dataset.lang = initial;
    document.documentElement.lang = initial;
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        menuButtonRef.current?.focus();
        wasOpenRef.current = false;
      }
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
    window.requestAnimationFrame(() => firstLink?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !headerRef.current) return;

      const focusable = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        )
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function switchLanguage(next: "ru" | "de") {
    setLang(next);
    localStorage.setItem("site-language", next);
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
  }

  return (
    <header className="v2-site-header" ref={headerRef}>
      <div className="v2-container v2-header-inner">
        <Link href="/" className="v2-brand" onClick={() => setOpen(false)} aria-label="Женис Аязбаев — Zhenis Ayazbayev">
          <span className="v2-brand-mark" aria-hidden="true">N</span>
          <span className="v2-brand-copy">
            <b><span className="ru-only">Женис Аязбаев</span><span className="de-only">Zhenis Ayazbayev</span></b>
            <small><span className="ru-only">врач-невролог</span><span className="de-only">Facharzt für Neurologie</span></small>
          </span>
        </Link>
        <button
          className={open ? "v2-menu-backdrop is-open" : "v2-menu-backdrop"}
          type="button"
          onClick={() => setOpen(false)}
          aria-label={lang === "ru" ? "Закрыть меню" : "Menü schließen"}
          tabIndex={open ? 0 : -1}
        />
        <nav
          id="v2-primary-navigation"
          ref={menuRef}
          className={open ? "v2-nav is-open" : "v2-nav"}
          aria-label={lang === "ru" ? "Основная навигация" : "Hauptnavigation"}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              <span className="ru-only">{item.ru}</span>
              <span className="de-only">{item.de}</span>
            </Link>
          ))}
          <Link href="/zapis" className="v2-header-cta" onClick={() => setOpen(false)}>
            <span className="ru-only">Записаться</span>
            <span className="de-only">Termin anfragen</span>
          </Link>
        </nav>
        <div className="v2-header-controls">
          <div className="v2-lang-switch" role="group" aria-label={lang === "ru" ? "Выбор языка" : "Sprache wählen"}>
            <button type="button" aria-pressed={lang === "ru"} className={lang === "ru" ? "selected" : ""} onClick={() => switchLanguage("ru")}>RU</button>
            <button type="button" aria-pressed={lang === "de"} className={lang === "de" ? "selected" : ""} onClick={() => switchLanguage("de")}>DE</button>
          </div>
          <button
            ref={menuButtonRef}
            className={open ? "v2-menu-button is-open" : "v2-menu-button"}
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="v2-primary-navigation"
            aria-label={open
              ? (lang === "ru" ? "Закрыть меню" : "Menü schließen")
              : (lang === "ru" ? "Открыть меню" : "Menü öffnen")}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
