"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const saved = localStorage.getItem("site-language");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const detected = timeZone === "Europe/Berlin" ? "de" : "ru";
    const initial = saved === "de" || saved === "ru" ? saved : detected;
    setLang(initial);
    document.documentElement.dataset.lang = initial;
    document.documentElement.lang = initial;
  }, []);

  function switchLanguage(next: "ru" | "de") {
    setLang(next);
    localStorage.setItem("site-language", next);
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
  }

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Женис Аязбаев — Zhenis Ayazbayev">
          <span className="brand-mark"><span className="ru-only">ЖА</span><span className="de-only">ZA</span></span>
          <span className="brand-copy">
            <b><span className="ru-only">Женис Аязбаев</span><span className="de-only">Zhenis Ayazbayev</span></b>
            <small>Facharzt für Neurologie</small>
          </span>
        </Link>
        <nav className={open ? "nav open" : "nav"} aria-label="Основная навигация">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {lang === "ru" ? item.ru : item.de}
            </Link>
          ))}
          <Link href="/zapis" className="button button-small" onClick={() => setOpen(false)}>
            {lang === "ru" ? "Записаться" : "Termin anfragen"}
          </Link>
        </nav>
        <div className="header-controls">
          <div className="lang-switch" aria-label={lang === "ru" ? "Выбор языка" : "Sprache wählen"}>
            <button type="button" aria-pressed={lang === "ru"} className={lang === "ru" ? "selected" : ""} onClick={() => switchLanguage("ru")}>RU</button>
            <button type="button" aria-pressed={lang === "de"} className={lang === "de" ? "selected" : ""} onClick={() => switchLanguage("de")}>DE</button>
          </div>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={lang === "ru" ? "Открыть меню" : "Menü öffnen"}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
