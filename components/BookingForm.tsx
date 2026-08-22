"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  messenger: string;
  country: string;
  language: string;
  format: string;
  time: string;
  consent: boolean;
};

const initial: FormState = {
  name: "",
  email: "",
  messenger: "",
  country: "",
  language: "Русский",
  format: "Первичная консультация",
  time: "",
  consent: false
};

export function BookingForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const summary = useMemo(() => [
    `Имя / Name: ${form.name}`,
    `E-mail: ${form.email}`,
    `Телефон / Messenger: ${form.messenger || "—"}`,
    `Страна / Land: ${form.country}`,
    `Язык / Sprache: ${form.language}`,
    `Формат / Format: ${form.format}`,
    `Удобное время / Wunschzeit: ${form.time || "—"}`
  ].join("\n"), [form]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
    setTimeout(() => document.getElementById("request-result")?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  if (submitted) {
    return (
      <div className="form-success" id="request-result" role="status">
        <div className="success-icon">✓</div>
        <p className="kicker ru-only">Заявка подготовлена</p><p className="kicker de-only">Anfrage vorbereitet</p>
        <h2 className="ru-only">Теперь её можно скопировать и отправить врачу.</h2>
        <h2 className="de-only">Sie können die Anfrage jetzt kopieren und an den Arzt senden.</h2>
        <p className="ru-only">На приватной демо-версии данные никуда не передаются и не сохраняются.</p>
        <p className="de-only">In dieser privaten Demoversion werden keine Daten übertragen oder gespeichert.</p>
        <pre>{summary}</pre>
        <div className="form-actions">
          <button className="button" onClick={copySummary}>{copied ? "Скопировано ✓" : "Скопировать заявку"}</button>
          <button className="text-button" onClick={() => setSubmitted(false)}>Изменить данные</button>
        </div>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span><span className="ru-only">Имя и фамилия</span><span className="de-only">Vor- und Nachname</span></span>
          <input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ваше имя / Ihr Name" />
        </label>
        <label>
          <span>E-mail</span>
          <input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@example.com" />
        </label>
        <label>
          <span><span className="ru-only">Телефон или мессенджер</span><span className="de-only">Telefon oder Messenger</span></span>
          <input autoComplete="tel" value={form.messenger} onChange={(e) => setForm({ ...form, messenger: e.target.value })} placeholder="Signal / WhatsApp / Telegram" />
        </label>
        <label>
          <span><span className="ru-only">Страна проживания</span><span className="de-only">Wohnsitzland</span></span>
          <input required autoComplete="country-name" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Deutschland / Казахстан" />
        </label>
        <label>
          <span><span className="ru-only">Язык консультации</span><span className="de-only">Beratungssprache</span></span>
          <select value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })}>
            <option>Русский</option><option>Deutsch</option>
          </select>
        </label>
        <label>
          <span><span className="ru-only">Формат</span><span className="de-only">Format</span></span>
          <select value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })}>
            <option>Первичная консультация</option>
            <option>Второе мнение</option>
            <option>Разбор документов</option>
            <option>Контрольная консультация</option>
          </select>
        </label>
        <label className="wide">
          <span><span className="ru-only">Когда вам удобно?</span><span className="de-only">Wann passt es Ihnen?</span></span>
          <input value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} placeholder="Например: будни после 18:00 / werktags ab 18 Uhr" />
        </label>
      </div>
      <div className="privacy-note">
        <strong className="ru-only">Пожалуйста, не указывайте здесь диагноз и не прикрепляйте документы.</strong>
        <strong className="de-only">Bitte geben Sie hier keine Diagnose an und laden Sie keine Befunde hoch.</strong>
        <span className="ru-only">Безопасный способ передачи медицинских данных будет согласован отдельно.</span>
        <span className="de-only">Ein sicherer Übermittlungsweg für medizinische Daten wird separat vereinbart.</span>
      </div>
      <label className="consent">
        <input type="checkbox" required checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
        <span className="ru-only">Я согласен(на), что мои контактные данные используются только для ответа на эту заявку.</span>
        <span className="de-only">Ich bin damit einverstanden, dass meine Kontaktdaten ausschließlich zur Beantwortung dieser Anfrage verwendet werden.</span>
      </label>
      <button className="button submit-button" type="submit">
        <span className="ru-only">Подготовить заявку</span><span className="de-only">Anfrage vorbereiten</span>
      </button>
    </form>
  );
}
