import Link from "next/link";
import { ArrowIcon, CheckIcon, CompassIcon, DocumentIcon, VideoIcon } from "../components/Icons";

const features = [
  {
    icon: <VideoIcon />,
    ru: "Онлайн-консультация",
    de: "Online-Sprechstunde",
    ruText: "Спокойно разберём жалобы, историю болезни и уже выполненные обследования.",
    deText: "Wir besprechen Beschwerden, Krankheitsverlauf und bereits vorliegende Untersuchungen."
  },
  {
    icon: <DocumentIcon />,
    ru: "Второе мнение",
    de: "Zweitmeinung",
    ruText: "Оценка диагноза, заключений МРТ/КТ и назначенной терапии понятным языком.",
    deText: "Einordnung von Diagnose, MRT-/CT-Befunden und Therapieempfehlungen in verständlicher Sprache."
  },
  {
    icon: <CompassIcon />,
    ru: "Следующий шаг",
    de: "Der nächste Schritt",
    ruText: "Чёткий план: что важно сейчас, что можно уточнить и к кому обратиться очно.",
    deText: "Ein klarer Plan: Was jetzt wichtig ist, was geklärt werden kann und wann eine Untersuchung vor Ort nötig ist."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow ru-only"><span /> Facharzt für Neurologie · Германия</div>
            <div className="eyebrow de-only"><span /> Facharzt für Neurologie · Deutschland</div>
            <h1 className="ru-only">Онлайн-консультация невролога из Германии</h1>
            <h1 className="de-only">Neurologische Online-Beratung aus Deutschland</h1>
            <p className="lead ru-only">На русском и немецком языках — для пациентов в Германии и за её пределами. Второе мнение, разбор диагноза, обследований и дальнейших шагов.</p>
            <p className="lead de-only">Auf Deutsch und Russisch – für Patientinnen und Patienten in Deutschland und im Ausland. Zweitmeinung und verständliche Einordnung von Diagnose, Befunden und nächsten Schritten.</p>
            <div className="hero-actions">
              <Link href="/zapis" className="button">
                <span className="ru-only">Оставить заявку</span><span className="de-only">Termin anfragen</span><ArrowIcon />
              </Link>
              <Link href="/uslugi" className="text-link">
                <span className="ru-only">Как проходит консультация</span><span className="de-only">So läuft die Beratung ab</span>
              </Link>
            </div>
            <div className="trust-row">
              <span><CheckIcon /><span className="ru-only">Facharzt в Германии</span><span className="de-only">Facharzt in Deutschland</span></span>
              <span><CheckIcon /><span className="ru-only">Русский и немецкий</span><span className="de-only">Deutsch und Russisch</span></span>
              <span><CheckIcon /><span className="ru-only">Онлайн и конфиденциально</span><span className="de-only">Online und vertraulich</span></span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Профиль специалиста">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-card">
              <img
                src="/zhenis-ayazbayev.jpg"
                alt="Женис Аязбаев — Zhenis Ayazbayev, Facharzt für Neurologie"
                className="portrait-photo"
                width="1055"
                height="1536"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <small className="ru-only">Ваш консультант</small><small className="de-only">Ihr Ansprechpartner</small>
                <strong className="ru-only">Женис Аязбаев</strong><strong className="de-only">Zhenis Ayazbayev</strong>
                <span>Facharzt für Neurologie</span>
              </div>
            </div>
            <div className="floating-note note-one"><span className="pulse-dot" /><span className="ru-only">Онлайн</span><span className="de-only">Online</span></div>
            <div className="floating-note note-two">RU · DE</div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker ru-only">Чем могу помочь</p><p className="kicker de-only">Wobei ich helfen kann</p>
            <h2 className="ru-only">Меньше неопределённости.<br />Больше ясности.</h2>
            <h2 className="de-only">Weniger Unsicherheit.<br />Mehr Klarheit.</h2>
          </div>
          <p className="section-intro ru-only">Консультация строится вокруг вашей конкретной ситуации — без обещаний «диагноза за пять минут».</p>
          <p className="section-intro de-only">Die Beratung richtet sich nach Ihrer konkreten Situation — ohne vorschnelle Versprechen.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.ru}>
              <div className="feature-top"><span className="feature-icon">{feature.icon}</span><span className="feature-number">0{index + 1}</span></div>
              <h3 className="ru-only">{feature.ru}</h3><h3 className="de-only">{feature.de}</h3>
              <p className="ru-only">{feature.ruText}</p><p className="de-only">{feature.deText}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="cta-panel">
          <div>
            <p className="kicker light ru-only">Первый шаг</p><p className="kicker light de-only">Der erste Schritt</p>
            <h2 className="ru-only">Выберите свободное время для консультации.</h2>
            <h2 className="de-only">Wählen Sie eine freie Zeit für Ihre Beratung.</h2>
            <p className="ru-only">Заявка поступит врачу, а окончательное время будет подтверждено отдельно.</p>
            <p className="de-only">Ihre Anfrage geht direkt an den Arzt; der verbindliche Termin wird separat bestätigt.</p>
          </div>
          <Link href="/zapis" className="button button-light"><span className="ru-only">Перейти к записи</span><span className="de-only">Anfrage starten</span><ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
