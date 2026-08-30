import type { Metadata } from "next";
import { CheckIcon } from "../../components/Icons";
import { ButtonLink } from "../../components/v2/ButtonLink";
import { Container } from "../../components/v2/Container";
import { Section } from "../../components/v2/Section";

export const metadata: Metadata = { title: "Услуги · Leistungen" };

const services = [
  {
    n: "01",
    ru: "Первичная онлайн-консультация",
    de: "Neurologische Online-Erstberatung",
    ruText: "Разбор жалоб и анамнеза, оценка имеющихся заключений, объяснение возможных причин и дальнейшей тактики.",
    deText: "Besprechung von Beschwerden und Vorgeschichte, Einordnung vorhandener Befunde und Planung des weiteren Vorgehens.",
    tags: ["45–60 min", "RU / DE"]
  },
  {
    n: "02",
    ru: "Неврологическое второе мнение",
    de: "Neurologische Zweitmeinung",
    ruText: "Независимая оценка поставленного диагноза, обследований и предложенного лечения. Список вопросов для вашего лечащего врача.",
    deText: "Unabhängige Einordnung von Diagnose, Untersuchungen und Therapieempfehlung — inklusive Fragen für das behandelnde Team.",
    tags: ["Befund-Check", "RU / DE"]
  },
  {
    n: "03",
    ru: "Разбор медицинских документов",
    de: "Befundbesprechung",
    ruText: "Понятное объяснение заключений МРТ, КТ, ЭЭГ, ЭНМГ и выписок в клиническом контексте.",
    deText: "Verständliche Besprechung von MRT-, CT-, EEG-, ENMG-Befunden und Arztbriefen im klinischen Zusammenhang.",
    tags: ["Dokumente", "Online"]
  },
  {
    n: "04",
    ru: "Контрольная консультация",
    de: "Verlaufskontrolle",
    ruText: "Повторная встреча после новых обследований или изменения терапии — чтобы сверить результат и следующий шаг.",
    deText: "Folgetermin nach neuen Untersuchungen oder Therapieänderungen, um Ergebnisse und nächste Schritte einzuordnen.",
    tags: ["Follow-up", "30 min"]
  }
];

export default function ServicesPage() {
  return (
    <div className="v2-page">
      <section className="v2-page-hero">
        <Container>
          <div className="v2-reveal">
            <p className="v2-kicker ru-only">Форматы консультаций</p>
            <p className="v2-kicker de-only">Beratungsformate</p>
            <h1 className="ru-only">Услуги, которые помогают принять обоснованное решение</h1>
            <h1 className="de-only">Leistungen für eine fundierte Entscheidung</h1>
            <p className="v2-hero-lead ru-only">Вы получаете не набор медицинских терминов, а структурированное объяснение и понятный план действий.</p>
            <p className="v2-hero-lead de-only">Sie erhalten keine bloße Sammlung von Fachbegriffen, sondern eine strukturierte Einordnung und einen verständlichen Plan.</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="v2-service-list">
          {services.map((service) => (
            <article className="v2-service-row v2-reveal" key={service.n}>
              <span className="v2-service-number">{service.n}</span>
              <div>
                <h2 className="ru-only">{service.ru}</h2>
                <h2 className="de-only">{service.de}</h2>
                <p className="ru-only">{service.ruText}</p>
                <p className="de-only">{service.deText}</p>
              </div>
              <div className="v2-service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="v2-audience-grid">
          <div className="v2-audience-card v2-reveal">
            <p className="v2-kicker ru-only">Для пациентов в Германии</p>
            <p className="v2-kicker de-only">Für Patienten in Deutschland</p>
            <h2 className="ru-only">Объяснение на родном языке</h2>
            <h2 className="de-only">Beratung ohne Sprachbarriere</h2>
            <ul className="v2-audience-list">
              <li><CheckIcon /><span className="ru-only">Русский или немецкий язык</span><span className="de-only">Deutsch oder Russisch</span></li>
              <li><CheckIcon /><span className="ru-only">Ориентация в немецкой системе</span><span className="de-only">Orientierung im deutschen Versorgungssystem</span></li>
              <li><CheckIcon /><span className="ru-only">Подготовка к очному приёму</span><span className="de-only">Vorbereitung auf den Arzttermin vor Ort</span></li>
            </ul>
          </div>
          <div className="v2-audience-card v2-audience-card-accent v2-reveal v2-reveal-delay">
            <p className="v2-kicker ru-only">Для пациентов за пределами Германии</p>
            <p className="v2-kicker de-only">Für Patienten außerhalb Deutschlands</p>
            <h2 className="ru-only">Независимое мнение из Германии</h2>
            <h2 className="de-only">Unabhängige Einordnung aus Deutschland</h2>
            <ul className="v2-audience-list">
              <li><CheckIcon /><span className="ru-only">Разбор уже выполненных обследований</span><span className="de-only">Einordnung vorhandener Untersuchungen</span></li>
              <li><CheckIcon /><span className="ru-only">Письменная структура рекомендаций</span><span className="de-only">Strukturierte Zusammenfassung</span></li>
              <li><CheckIcon /><span className="ru-only">Без назначения экстренного лечения</span><span className="de-only">Keine Behandlung akuter Notfälle</span></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="v2-final-section">
        <div className="v2-centered-cta v2-reveal">
          <p className="v2-kicker ru-only">Не уверены, какой формат подходит?</p>
          <p className="v2-kicker de-only">Sie sind unsicher, welches Format passt?</p>
          <h2 className="ru-only">Опишите ситуацию — формат уточним до записи</h2>
          <h2 className="de-only">Schildern Sie Ihr Anliegen — das passende Format klären wir vorab</h2>
          <ButtonLink href="/zapis" arrow>
            <span className="ru-only">Оставить заявку</span>
            <span className="de-only">Anfrage senden</span>
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
