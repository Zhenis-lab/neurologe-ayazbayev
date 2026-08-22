import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../../components/Icons";

export const metadata: Metadata = {
  title: "Обо мне · Über mich",
  description: "Образование и квалификация Жениса Аязбаева: диплом врача, подготовка по психиатрии, магистратура, немецкая Approbation и профессиональный путь в неврологии."
};

const path = [
  {
    n: "01",
    ruTitle: "Медицинское образование",
    deTitle: "Medizinische Ausbildung",
    ruText: "Окончил Западно-Казахстанскую медицинскую академию в Актобе. Позднее завершил магистратуру; исследовательская работа была посвящена эффективности обучения врачей общей практики краткосрочным вмешательствам при табачной зависимости.",
    deText: "Studium an der Westkasachischen Medizinischen Akademie in Aqtöbe. Anschließend Masterstudium mit einer Forschungsarbeit zur Wirksamkeit der Schulung von Hausärzten in Kurzinterventionen bei Tabakabhängigkeit."
  },
  {
    n: "02",
    ruTitle: "Психиатрия и преподавание",
    deTitle: "Psychiatrie und Lehre",
    ruText: "Многолетняя клиническая работа в психиатрии, наркологии и психотерапии. Преподавал и работал ассистентом кафедры в Алматинском государственном институте усовершенствования врачей, сочетая обучение врачей с практической работой в отделении.",
    deText: "Langjährige klinische Tätigkeit in Psychiatrie, Suchtmedizin und Psychotherapie. Lehr- und klinische Tätigkeit als Assistent an einem Lehrstuhl des Staatlichen Instituts für ärztliche Fortbildung in Almaty."
  },
  {
    n: "03",
    ruTitle: "Медицинское образование и управление",
    deTitle: "Ärztliche Fortbildung und Leitung",
    ruText: "Руководил учебно-методическим отделом, координировавшим и контролировавшим программы последипломного медицинского образования. Позднее возглавлял Центр доказательной медицины и участвовал в организации повышения квалификации врачей по всему Казахстану.",
    deText: "Leitung einer Lehr- und Methodenabteilung zur Koordination und Qualitätssicherung postgradualer medizinischer Bildungsprogramme. Später Leitung eines Zentrums für evidenzbasierte Medizin und Organisation ärztlicher Fortbildungen in Kasachstan."
  },
  {
    n: "04",
    ruTitle: "Профессиональный путь в Германии",
    deTitle: "Beruflicher Weg in Deutschland",
    ruText: "После переезда в Германию выучил немецкий язык, успешно сдал Kenntnisprüfung и получил немецкую Approbation. Более трёх лет работал в немецкой психиатрии — в общей и острой психиатрии, наркологии и геронтопсихиатрии.",
    deText: "Nach dem Umzug nach Deutschland: Spracherwerb, erfolgreich bestandene Kenntnisprüfung und deutsche Approbation. Mehr als drei Jahre klinische Tätigkeit in Allgemein- und Akutpsychiatrie, Suchtmedizin und Gerontopsychiatrie."
  },
  {
    n: "05",
    ruTitle: "Специализация по неврологии",
    deTitle: "Facharztweiterbildung Neurologie",
    ruText: "Прошёл Weiterbildung по неврологии в Германии и успешно сдал Facharztprüfung. Опыт включает острую и амбулаторную неврологию: инсульт, болезнь Паркинсона, рассеянный склероз, эпилепсию, головную боль, головокружение и нервно-мышечные заболевания.",
    deText: "Neurologische Weiterbildung in Deutschland und erfolgreich bestandene Facharztprüfung. Erfahrung in Akut- und ambulanter Neurologie, darunter Schlaganfall, Parkinson, Multiple Sklerose, Epilepsie, Kopfschmerz, Schwindel und neuromuskuläre Erkrankungen."
  }
];

const credentials = [
  {
    n: "01",
    className: "credential-wide",
    preview: "/documents/doctor-diploma.webp",
    original: "/documents/doctor-diploma.jpg",
    width: 1200,
    height: 918,
    ruTitle: "Диплом врача",
    deTitle: "Arztdiplom",
    ruNote: "Западно-Казахстанская медицинская академия, специальность «Лечебное дело», квалификация врача · 2001",
    deNote: "Westkasachische Medizinische Akademie, Studiengang Humanmedizin, ärztliche Qualifikation · 2001",
    alt: "Диплом врача Жениса Аязбаева"
  },
  {
    n: "02",
    className: "credential-portrait",
    preview: "/documents/bekhterev-primary-specialization.webp",
    original: "/documents/bekhterev-primary-specialization.jpg",
    width: 887,
    height: 1200,
    ruTitle: "Первичная специализация по психиатрии",
    deTitle: "Primäre Spezialisierung Psychiatrie",
    ruNote: "Институт имени В. М. Бехтерева, Санкт-Петербург · 2004",
    deNote: "W. M. Bechterew-Institut, Sankt Petersburg · 2004",
    alt: "Свидетельство о первичной специализации по психиатрии в Институте имени Бехтерева"
  },
  {
    n: "03",
    className: "credential-portrait",
    preview: "/documents/bekhterev-specialist-certificate.webp",
    original: "/documents/bekhterev-specialist-certificate.jpg",
    width: 853,
    height: 1200,
    ruTitle: "Сертификат врача психиатра-нарколога",
    deTitle: "Fachzertifikat Psychiatrie und Suchtmedizin",
    ruNote: "Квалификационный экзамен и присвоение специальности в Институте имени В. М. Бехтерева · 2004",
    deNote: "Qualifikationsprüfung und Anerkennung am W. M. Bechterew-Institut · 2004",
    alt: "Сертификат специалиста психиатра-нарколога Института имени Бехтерева"
  },
  {
    n: "04",
    className: "credential-wide",
    preview: "/documents/bekhterev-hours-supplement.webp",
    original: "/documents/bekhterev-hours-supplement.jpg",
    width: 1200,
    height: 880,
    ruTitle: "Приложение · 504 часа специализации",
    deTitle: "Anlage · 504 Stunden Spezialisierung",
    ruNote: "Очное обучение: 380 часов теоретической и 124 часа практической подготовки",
    deNote: "Präsenzweiterbildung: 380 Stunden Theorie und 124 Stunden praktische Ausbildung",
    alt: "Приложение к первичной специализации по психиатрии-наркологии с указанием 504 часов"
  },
  {
    n: "05",
    className: "credential-master",
    preview: "/documents/master-diploma.webp",
    original: "/documents/master-diploma.jpg",
    width: 1200,
    height: 911,
    ruTitle: "Диплом магистра медицинских наук",
    deTitle: "Master of Medical Sciences",
    ruNote: "Алматинский государственный институт усовершенствования врачей, специальность «Медицина» · 2014",
    deNote: "Staatliches Institut für ärztliche Fortbildung Almaty, Studiengang Medizin · 2014",
    alt: "Диплом магистра медицинских наук Жениса Аязбаева"
  },
  {
    n: "06",
    className: "credential-portrait",
    preview: "/documents/approbation.webp",
    original: "/documents/approbation.jpg",
    width: 1086,
    height: 1536,
    ruTitle: "Approbation — право на врачебную практику в Германии",
    deTitle: "Approbation als Arzt",
    ruNote: "Выдана Тюрингским земельным административным ведомством 17 марта 2020 года",
    deNote: "Erteilt durch das Thüringer Landesverwaltungsamt am 17. März 2020",
    verifyUrl: "https://www.kammerservice.de/dispatcher/",
    alt: "Approbationsurkunde Жениса Аязбаева, выданная Тюрингским земельным административным ведомством"
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero shell">
        <div className="about-copy">
          <p className="kicker ru-only">Обо мне</p><p className="kicker de-only">Über mich</p>
          <h1 className="ru-only">Два клинических взгляда.<br />Один понятный план.</h1>
          <h1 className="de-only">Zwei klinische Perspektiven.<br />Ein klarer Plan.</h1>
          <p className="lead ru-only">Мой профессиональный путь соединяет неврологию, психиатрию, преподавание и доказательную медицину — опыт, который помогает видеть не только отдельный симптом, но и человека в целом.</p>
          <p className="lead de-only">Mein beruflicher Weg verbindet Neurologie, Psychiatrie, Lehre und evidenzbasierte Medizin — eine Erfahrung, die nicht nur das einzelne Symptom, sondern den Menschen als Ganzes in den Blick nimmt.</p>
          <div className="about-facts">
            <span><b className="ru-only">Германия</b><b className="de-only">Deutschland</b><small className="ru-only">Approbation и Facharzt</small><small className="de-only">Approbation & Facharzt</small></span>
            <span><b>RU · DE</b><small className="ru-only">языки консультации</small><small className="de-only">Beratungssprachen</small></span>
            <span><b className="ru-only">Неврология + психиатрия</b><b className="de-only">Neurologie + Psychiatrie</b><small className="ru-only">широкий клинический опыт</small><small className="de-only">breite klinische Erfahrung</small></span>
          </div>
        </div>
        <div className="about-photo-wrap">
          <img src="/zhenis-ayazbayev.jpg" alt="Женис Аязбаев — Facharzt für Neurologie" width="1055" height="1536" />
          <div className="about-photo-label"><strong className="ru-only">Женис Аязбаев</strong><strong className="de-only">Zhenis Ayazbayev</strong><span>Facharzt für Neurologie</span></div>
        </div>
      </section>

      <section className="section shell career-section">
        <div className="section-heading">
          <div><p className="kicker ru-only">Профессиональный путь</p><p className="kicker de-only">Beruflicher Weg</p><h2 className="ru-only">От медицинского образования<br />к немецкой неврологии.</h2><h2 className="de-only">Von der medizinischen Lehre<br />zur Neurologie in Deutschland.</h2></div>
          <p className="section-intro ru-only">Здесь оставлены этапы, которые действительно важны пациенту: клиническая широта, опыт обучения врачей и официальное признание квалификации в Германии.</p>
          <p className="section-intro de-only">Im Mittelpunkt stehen die für Patienten relevanten Stationen: klinische Breite, Erfahrung in der ärztlichen Lehre und die anerkannte Qualifikation in Deutschland.</p>
        </div>
        <div className="career-list">
          {path.map((item) => (
            <article className="career-row" key={item.n}>
              <span className="career-number">{item.n}</span>
              <h3 className="ru-only">{item.ruTitle}</h3><h3 className="de-only">{item.deTitle}</h3>
              <p className="ru-only">{item.ruText}</p><p className="de-only">{item.deText}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell verification-section">
        <div className="verification-panel credential-panel">
          <div className="credential-heading">
            <div className="verification-copy">
              <p className="kicker light ru-only">Образование и квалификация</p><p className="kicker light de-only">Ausbildung & Qualifikation</p>
              <h2 className="ru-only">Документы о медицинском образовании и специализации</h2><h2 className="de-only">Nachweise der medizinischen Ausbildung und Spezialisierung</h2>
            </div>
            <p className="credential-intro ru-only">Здесь опубликованы диплом врача, документы о подготовке по психиатрии в Институте имени В. М. Бехтерева, степень магистра медицинских наук и немецкая Approbation. Каждый скан можно открыть полностью.</p>
            <p className="credential-intro de-only">Veröffentlicht sind das Arztdiplom, Nachweise der psychiatrischen Qualifikation am W. M. Bechterew-Institut, der Masterabschluss in Medizin und die deutsche Approbation. Jeder Scan lässt sich vollständig öffnen.</p>
          </div>

          <div className="credential-grid">
            {credentials.map((credential) => (
              <article
                className={`credential-card ${credential.className}`}
                key={credential.n}
              >
                <a className="credential-image" href={credential.original} target="_blank" rel="noreferrer">
                  <img
                    src={credential.preview}
                    alt={credential.alt}
                    width={credential.width}
                    height={credential.height}
                    loading="lazy"
                  />
                  <span className="credential-open" aria-hidden="true">↗</span>
                </a>
                <span className="credential-meta">
                  <span className="credential-number">{credential.n}</span>
                  <span>
                    <strong className="ru-only">{credential.ruTitle}</strong>
                    <strong className="de-only">{credential.deTitle}</strong>
                    <small className="ru-only">{credential.ruNote}</small>
                    <small className="de-only">{credential.deNote}</small>
                  </span>
                </span>
                <span className="credential-actions">
                  <a href={credential.original} target="_blank" rel="noreferrer">
                    <span className="ru-only">Открыть скан</span><span className="de-only">Scan öffnen</span><span aria-hidden="true">↗</span>
                  </a>
                  {credential.verifyUrl ? (
                    <a className="credential-verify" href={credential.verifyUrl} target="_blank" rel="noreferrer">
                      <span className="ru-only">Проверить Approbation</span><span className="de-only">Approbation prüfen</span><span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </span>
              </article>
            ))}
          </div>
          <div className="credential-verification-note">
            <span className="credential-seal" aria-hidden="true">✓</span>
            <div>
              <strong className="ru-only">Официальная проверка немецкой Approbation</strong><strong className="de-only">Offizielle Prüfung der deutschen Approbation</strong>
              <p className="ru-only">В нижней части Approbationsurkunde расположен 2D‑код DataMatrix и 64‑значный DocID. Код можно отсканировать либо ввести вручную в сервисе Bundesärztekammer.</p>
              <p className="de-only">Am unteren Rand der Approbationsurkunde befinden sich ein 2D‑DataMatrix-Code und eine 64-stellige DocID. Der Code kann gescannt oder beim Dienst der Bundesärztekammer manuell eingegeben werden.</p>
            </div>
            <a href="https://www.kammerservice.de/dispatcher/" target="_blank" rel="noreferrer" className="button button-light">
              <span className="ru-only">Перейти к проверке</span><span className="de-only">Zur Prüfung</span><ArrowIcon />
            </a>
          </div>
        </div>
        <div className="about-bottom-cta">
          <div><p className="ru-only">Хотите обсудить вашу ситуацию?</p><p className="de-only">Möchten Sie Ihre Situation besprechen?</p><h2 className="ru-only">Начнём с короткой заявки.</h2><h2 className="de-only">Beginnen wir mit einer kurzen Anfrage.</h2></div>
          <Link href="/zapis" className="button"><span className="ru-only">Записаться</span><span className="de-only">Termin anfragen</span><ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
