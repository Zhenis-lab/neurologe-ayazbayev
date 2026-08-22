"use client";

import { useEffect, useRef, useState } from "react";

const CAL_NAMESPACE = "online-konsultaciya";
const CAL_LINK = "женис-аязбаев-38d0fd/online-konsultaciya";
const CAL_URL = `https://cal.com/${CAL_LINK}`;

type CalApi = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

type CalGlobal = CalApi & {
  loaded?: boolean;
  ns: Record<string, CalApi>;
  q: unknown[][];
};

declare global {
  interface Window {
    Cal?: CalGlobal;
  }
}

function addToQueue(api: CalApi, args: unknown[]) {
  api.q = api.q || [];
  api.q.push(args);
}

function getCalApi() {
  if (window.Cal) return window.Cal;

  const cal = ((...args: unknown[]) => {
    if (!cal.loaded) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }

    if (args[0] === "init") {
      const namespace = args[1];
      const namespacedApi = ((...queuedArgs: unknown[]) => {
        addToQueue(namespacedApi, queuedArgs);
      }) as CalApi;
      namespacedApi.q = [];

      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || namespacedApi;
        addToQueue(cal.ns[namespace], args);
        addToQueue(cal, ["initNamespace", namespace]);
      } else {
        addToQueue(cal, args);
      }
      return;
    }

    addToQueue(cal, args);
  }) as CalGlobal;

  cal.loaded = false;
  cal.ns = {};
  cal.q = [];
  window.Cal = cal;
  return cal;
}

export function CalBooking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "delayed">("loading");

  useEffect(() => {
    const container = containerRef.current;
    if (!container || startedRef.current) return;
    startedRef.current = true;

    const markReady = () => setStatus("ready");
    const markDelayed = () => setStatus((current) => current === "ready" ? current : "delayed");

    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe") || container.childElementCount > 0) markReady();
    });
    observer.observe(container, { childList: true, subtree: true });

    const Cal = getCalApi();
    Cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });

    const calendar = Cal.ns[CAL_NAMESPACE];
    calendar("on", { action: "bookerReady", callback: markReady });
    calendar("on", { action: "linkReady", callback: markReady });
    calendar("on", { action: "linkFailed", callback: markDelayed });
    calendar("inline", {
      elementOrSelector: "#cal-inline-online-konsultaciya",
      config: { layout: "month_view" },
      calLink: CAL_LINK
    });
    calendar("ui", {
      theme: "light",
      styles: { branding: { brandColor: "#167861" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });

    const delayedTimer = window.setTimeout(markDelayed, 9000);

    return () => {
      observer.disconnect();
      window.clearTimeout(delayedTimer);
    };
  }, []);

  return (
    <div className="calendar-booking">
      <div className="calendar-heading">
        <p className="kicker ru-only">Свободные даты</p>
        <p className="kicker de-only">Freie Termine</p>
        <h2 className="ru-only">Выберите удобное время</h2>
        <h2 className="de-only">Wählen Sie einen passenden Termin</h2>
        <p className="ru-only">
          Календарь показывает свободные слоты по берлинскому времени. После заполнения формы заявка поступит врачу на подтверждение.
        </p>
        <p className="de-only">
          Der Kalender zeigt freie Zeitfenster in Berliner Zeit. Nach dem Ausfüllen wird Ihre Anfrage dem Arzt zur Bestätigung gesendet.
        </p>
      </div>

      <div className={`calendar-status calendar-status-${status}`} aria-live="polite">
        {status === "loading" ? (
          <>
            <span className="calendar-spinner" aria-hidden="true" />
            <span className="ru-only">Загружаем свободные даты…</span>
            <span className="de-only">Freie Termine werden geladen…</span>
          </>
        ) : null}
        {status === "delayed" ? (
          <>
            <span className="ru-only">Календарь загружается дольше обычного. Его можно открыть в отдельном окне.</span>
            <span className="de-only">Der Kalender lädt länger als gewöhnlich. Sie können ihn in einem eigenen Fenster öffnen.</span>
            <a className="text-link" href={CAL_URL} target="_blank" rel="noreferrer">
              <span className="ru-only">Открыть календарь ↗</span>
              <span className="de-only">Kalender öffnen ↗</span>
            </a>
          </>
        ) : null}
      </div>

      <div
        id="cal-inline-online-konsultaciya"
        className="cal-inline"
        aria-label="Календарь записи на онлайн-консультацию"
        ref={containerRef}
      />

      <div className="calendar-help">
        <div>
          <strong className="ru-only">Запись подтверждает врач.</strong>
          <strong className="de-only">Der Termin wird vom Arzt bestätigt.</strong>
          <span className="ru-only">Вы получите отдельное подтверждение и ссылку для видеосвязи. Не указывайте в форме диагноз и не отправляйте медицинские документы.</span>
          <span className="de-only">Sie erhalten eine separate Bestätigung und den Link zum Videogespräch. Bitte tragen Sie keine Diagnose ein und senden Sie hier keine medizinischen Unterlagen.</span>
        </div>
        <a className="text-link" href={CAL_URL} target="_blank" rel="noreferrer">
          <span className="ru-only">Открыть календарь отдельно ↗</span>
          <span className="de-only">Kalender separat öffnen ↗</span>
        </a>
      </div>
    </div>
  );
}
