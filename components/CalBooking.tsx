"use client";

import { useEffect } from "react";

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
        cal.ns[namespace] = namespacedApi;
        addToQueue(namespacedApi, args);
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
  useEffect(() => {
    const container = document.getElementById("cal-inline-online-konsultaciya");
    if (!container || container.dataset.initialized === "true") return;
    container.dataset.initialized = "true";

    const Cal = getCalApi();
    Cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });

    const calendar = Cal.ns[CAL_NAMESPACE];
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
  }, []);

  return (
    <div className="calendar-booking">
      <div className="calendar-heading">
        <p className="kicker ru-only">Свободные даты</p>
        <p className="kicker de-only">Freie Termine</p>
        <h2 className="ru-only">Выберите предварительное время</h2>
        <h2 className="de-only">Wählen Sie einen vorläufigen Termin</h2>
        <p className="ru-only">
          Календарь показывает свободные слоты по берлинскому времени. После заполнения формы заявка поступит врачу на подтверждение.
        </p>
        <p className="de-only">
          Der Kalender zeigt freie Zeitfenster in Berliner Zeit. Nach dem Ausfüllen wird Ihre Anfrage dem Arzt zur Bestätigung gesendet.
        </p>
      </div>

      <div
        id="cal-inline-online-konsultaciya"
        className="cal-inline"
        aria-label="Календарь записи на онлайн-консультацию"
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
