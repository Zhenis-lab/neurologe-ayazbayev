import Link from "next/link";
import { CheckIcon, DocumentIcon } from "../components/Icons";
import { ButtonLink } from "../components/v2/ButtonLink";
import { Container } from "../components/v2/Container";
import { NeuralVisual } from "../components/v2/NeuralVisual";
import { Section } from "../components/v2/Section";

const problems = [
  ["Головная боль", "Kopfschmerzen"],
  ["Головокружение", "Schwindel"],
  ["Полинейропатия", "Polyneuropathie"],
  ["Болезнь Паркинсона и двигательные нарушения", "Parkinson und Bewegungsstörungen"],
  ["Последствия инсульта", "Folgen eines Schlaganfalls"],
  ["Нарушения памяти", "Gedächtnisstörungen"],
  ["Неврологическое второе мнение", "Neurologische Zweitmeinung"],
  ["Разбор результатов обследований", "Einordnung von Untersuchungsergebnissen"]
];

const secondOpinionFlow = [
  ["Диагноз", "Diagnose"],
  ["МРТ / КТ и заключения", "MRT / CT und Befunde"],
  ["Назначенная терапия", "Bisherige Therapie"],
  ["Второе мнение", "Zweitmeinung"],
  ["Следующие шаги", "Nächste Schritte"]
];

const consultationSteps = [
  ["Документы", "Unterlagen", "Выписки, список лекарств и имеющиеся заключения.", "Arztbriefe, Medikamentenliste und vorhandene Befunde."],
  ["Онлайн-консультация", "Gespräch", "Подробно обсуждаем жалобы, историю и ваши вопросы.", "Wir besprechen Beschwerden, Verlauf und Ihre Fragen ausführlich."],
  ["Медицинская оценка", "Einordnung", "Понятно разбираем данные и клинический контекст.", "Befunde und klinischer Kontext werden verständlich eingeordnet."],
  ["Следующие шаги", "Nächste Schritte", "Формируем ориентиры для дальнейшего обследования или лечения.", "Sie erhalten Orientierung für weitere Diagnostik oder Behandlung."]
];

const credentials = [
  {
    ru: "Немецкая Approbation",
    de: "Deutsche Approbation",
    ruMeta: "Право на врачебную практику в Германии · 2020",
    deMeta: "Ärztliche Berufserlaubnis in Deutschland · 2020",
    href: "/documents/approbation.jpg"
  },
  {
    ru: "Магистр медицинских наук",
    de: "Master of Medical Sciences",
    ruMeta: "Академическая степень по медицине · 2014",
    deMeta: "Akademischer Abschluss in Medizin · 2014",
    href: "/documents/master-diploma.jpg"
  },
  {
    ru: "Диплом врача",
    de: "Arztdiplom",
    ruMeta: "Высшее медицинское образование · 2001",
    deMeta: "Hochschulabschluss Humanmedizin · 2001",
    href: "/documents/doctor-diploma.jpg"
  }
];

const faqPreview = [
  [
    "Может ли онлайн-консультация заменить очный приём?",
    "Kann eine Online-Beratung einen Termin vor Ort ersetzen?",
    "Не всегда. Во время разговора мы определим, что можно оценить онлайн и когда необходим очный неврологический осмотр.",
    "Nicht immer. Im Gespräch klären wir, was online eingeordnet werden kann und wann eine neurologische Untersuchung vor Ort nötig ist."
  ],
  [
    "Какие документы подготовить?",
    "Welche Unterlagen sollte ich vorbereiten?",
    "Полезны выписки, список лекарств, заключения МРТ или КТ, ЭЭГ и ЭНМГ — если они у вас уже есть.",
    "Hilfreich sind vorhandene Arztbriefe, die Medikamentenliste sowie MRT-/CT-, EEG- oder ENMG-Befunde."
  ],
  [
    "На каких языках проходит консультация?",
    "In welchen Sprachen findet die Beratung statt?",
    "На русском или немецком языке. Предпочтительный язык можно указать при записи.",
    "Die Beratung findet auf Deutsch oder Russisch statt. Ihre bevorzugte Sprache geben Sie bei der Anfrage an."
  ],
  [
    "Что делать при резком ухудшении?",
    "Was ist bei einer akuten Verschlechterung zu tun?",
    "При острых симптомах не ждите онлайн-консультации: обратитесь в местную экстренную службу. В Германии — 112.",
    "Warten Sie bei akuten Symptomen nicht auf einen Online-Termin, sondern rufen Sie den örtlichen Notdienst. In Deutschland: 112."
  ]
];

export default function HomePage() {
  return (
    <div className="v2-home">
      <section className="v2-hero">
        <Container className="v2-hero-grid">
          <div className="v2-hero-copy v2-reveal">
            <p className="v2-eyebrow ru-only">Неврологическая консультация из Германии</p>
            <p className="v2-eyebrow de-only">Neurologische Beratung aus Deutschland</p>
            <div className="v2-identity">
              <p className="v2-doctor-name ru-only">Женис Аязбаев</p>
              <p className="v2-doctor-name de-only">Zhenis Ayazbayev</p>
              <p className="v2-doctor-title ru-only">врач-невролог · магистр медицинских наук</p>
              <p className="v2-doctor-title de-only">Facharzt für Neurologie · Master of Medical Sciences</p>
            </div>
            <h1 className="ru-only">Консультация невролога и второе мнение из Германии</h1>
            <h1 className="de-only">Neurologische Beratung und Zweitmeinung aus Deutschland</h1>
            <p className="v2-hero-lead ru-only">Спокойная профессиональная оценка вашей ситуации, медицинских заключений и возможных дальнейших шагов — онлайн, на понятном языке.</p>
            <p className="v2-hero-lead de-only">Ruhige, fachärztliche Einordnung Ihrer Situation, medizinischen Befunde und möglicher nächster Schritte — online und verständlich.</p>
            <div className="v2-language-line" aria-label="Deutsch, Русский, Online">
              <span>Deutsch</span><i aria-hidden="true" /><span>Русский</span><i aria-hidden="true" /><span>Online</span>
            </div>
            <div className="v2-hero-actions">
              <ButtonLink href="/zapis" arrow>
                <span className="ru-only">Записаться на консультацию</span>
                <span className="de-only">Termin anfragen</span>
              </ButtonLink>
              <ButtonLink href="#consultation" variant="secondary">
                <span className="ru-only">Как проходит консультация</span>
                <span className="de-only">Ablauf ansehen</span>
              </ButtonLink>
            </div>
          </div>

          <div className="v2-hero-media v2-reveal v2-reveal-delay" data-future-visual="neuroscience-layer">
            <NeuralVisual />
            <figure className="v2-portrait-frame">
              <img
                src="/zhenis-ayazbayev.jpg"
                alt="Женис Аязбаев — Zhenis Ayazbayev, Facharzt für Neurologie"
                width="1055"
                height="1536"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption>
                <span className="ru-only">Facharzt в Германии</span>
                <span className="de-only">Facharzt in Deutschland</span>
              </figcaption>
            </figure>
            <div className="v2-hero-seal" aria-hidden="true">
              <span className="v2-seal-desktop">DE</span>
              <small className="v2-seal-desktop">Approbation</small>
              <span className="v2-seal-mobile">✓</span>
              <small className="v2-seal-mobile">Deutsche Approbation</small>
            </div>
          </div>
        </Container>
      </section>

      <Section id="problems" tone="surface">
        <div className="v2-section-heading v2-reveal">
          <div>
            <p className="v2-kicker ru-only">С чем можно обратиться</p>
            <p className="v2-kicker de-only">Mögliche Fragestellungen</p>
            <h2 className="ru-only">Неврологические вопросы, которые требуют ясности</h2>
            <h2 className="de-only">Neurologische Fragen, die Klarheit brauchen</h2>
          </div>
          <div className="v2-heading-copy">
            <p className="ru-only">Онлайн-формат подходит для первичной ориентации, разбора имеющихся данных и второго мнения. Возможности дистанционной оценки зависят от конкретной ситуации.</p>
            <p className="de-only">Das Online-Format eignet sich zur Orientierung, zur Einordnung vorhandener Befunde und für eine Zweitmeinung. Was aus der Ferne möglich ist, hängt von Ihrer Situation ab.</p>
          </div>
        </div>
        <div className="v2-problem-grid">
          {problems.map(([ru, de], index) => (
            <article className="v2-problem-card v2-reveal" key={ru}>
              <span className="v2-card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="ru-only">{ru}</h3>
              <h3 className="de-only">{de}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section id="second-opinion" tone="dark" containerClassName="v2-opinion-layout">
        <div className="v2-opinion-copy v2-reveal">
          <p className="v2-kicker v2-kicker-light ru-only">Второе мнение</p>
          <p className="v2-kicker v2-kicker-light de-only">Zweitmeinung</p>
          <h2 className="ru-only">Не ещё один диагноз, а независимая медицинская оценка</h2>
          <h2 className="de-only">Nicht noch eine Diagnose, sondern eine unabhängige fachärztliche Einordnung</h2>
          <p className="ru-only">Второе мнение помогает сопоставить диагноз, снимки и заключения, назначенную терапию и ваши вопросы — чтобы понять возможные следующие шаги.</p>
          <p className="de-only">Eine Zweitmeinung bringt Diagnose, Bildgebung, Befunde, bisherige Therapie und Ihre Fragen zusammen — als Grundlage für mögliche nächste Schritte.</p>
        </div>
        <ol className="v2-opinion-flow v2-reveal v2-reveal-delay">
          {secondOpinionFlow.map(([ru, de], index) => (
            <li key={ru}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b className="ru-only">{ru}</b>
              <b className="de-only">{de}</b>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="consultation">
        <div className="v2-section-heading v2-reveal">
          <div>
            <p className="v2-kicker ru-only">Как проходит консультация</p>
            <p className="v2-kicker de-only">Ablauf der Beratung</p>
            <h2 className="ru-only">Четыре спокойных и понятных этапа</h2>
            <h2 className="de-only">Vier ruhige und nachvollziehbare Schritte</h2>
          </div>
          <p className="v2-heading-copy ru-only">До консультации мы согласуем безопасный способ передачи медицинских документов. Не отправляйте чувствительные данные через открытые каналы без договорённости.</p>
          <p className="v2-heading-copy de-only">Vor der Beratung vereinbaren wir einen sicheren Weg zur Übermittlung medizinischer Unterlagen. Senden Sie sensible Daten nicht unaufgefordert über offene Kanäle.</p>
        </div>
        <ol className="v2-step-grid">
          {consultationSteps.map(([ru, de, ruText, deText], index) => (
            <li className="v2-step-card v2-reveal" key={ru}>
              <span className="v2-step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="ru-only">{ru}</h3>
              <h3 className="de-only">{de}</h3>
              <p className="ru-only">{ruText}</p>
              <p className="de-only">{deText}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="doctor" tone="surface" containerClassName="v2-doctor-layout">
        <div className="v2-doctor-summary v2-reveal">
          <p className="v2-kicker ru-only">О враче</p>
          <p className="v2-kicker de-only">Über den Arzt</p>
          <h2 className="ru-only">Клинический опыт в неврологии и психиатрии</h2>
          <h2 className="de-only">Klinische Erfahrung in Neurologie und Psychiatrie</h2>
          <p className="ru-only">Женис Аязбаев — врач-невролог в Германии, магистр медицинских наук. Имеет немецкую Approbation, опыт работы в немецкой неврологии и предыдущую клиническую и преподавательскую подготовку в психиатрии.</p>
          <p className="de-only">Zhenis Ayazbayev ist Facharzt für Neurologie und Master of Medical Sciences. Er verfügt über die deutsche Approbation, klinische Erfahrung in der Neurologie in Deutschland sowie eine frühere klinische und akademische Tätigkeit in der Psychiatrie.</p>
          <Link href="/about" className="v2-inline-link">
            <span className="ru-only">Подробнее о профессиональном пути</span>
            <span className="de-only">Mehr zum beruflichen Weg</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ul className="v2-doctor-facts v2-reveal v2-reveal-delay">
          <li><CheckIcon /><span className="ru-only">Facharzt für Neurologie в Германии</span><span className="de-only">Facharzt für Neurologie in Deutschland</span></li>
          <li><CheckIcon /><span className="ru-only">Магистр медицинских наук</span><span className="de-only">Master of Medical Sciences</span></li>
          <li><CheckIcon /><span className="ru-only">Немецкая Approbation</span><span className="de-only">Deutsche Approbation</span></li>
          <li><CheckIcon /><span className="ru-only">Опыт работы в немецкой неврологии</span><span className="de-only">Klinische Erfahrung in der deutschen Neurologie</span></li>
          <li><CheckIcon /><span className="ru-only">Предыдущий опыт в психиатрии и преподавании</span><span className="de-only">Frühere Erfahrung in Psychiatrie und ärztlicher Lehre</span></li>
        </ul>
      </Section>

      <Section id="credentials">
        <div className="v2-section-heading v2-reveal">
          <div>
            <p className="v2-kicker ru-only">Квалификация</p>
            <p className="v2-kicker de-only">Qualifikation</p>
            <h2 className="ru-only">Основные документы и подтверждения</h2>
            <h2 className="de-only">Ausgewählte Nachweise und Qualifikationen</h2>
          </div>
          <p className="v2-heading-copy ru-only">На главной показаны только ключевые документы. Полная подборка и пояснения доступны в разделе о враче.</p>
          <p className="v2-heading-copy de-only">Hier sehen Sie eine kompakte Auswahl. Weitere Nachweise und Erläuterungen finden Sie im Bereich über den Arzt.</p>
        </div>
        <div className="v2-credential-grid">
          {credentials.map((credential, index) => (
            <a
              className="v2-credential-card v2-reveal"
              href={credential.href}
              target="_blank"
              rel="noreferrer"
              key={credential.href}
            >
              <span className="v2-credential-icon"><DocumentIcon /></span>
              <span className="v2-card-index">{String(index + 1).padStart(2, "0")}</span>
              <strong className="ru-only">{credential.ru}</strong>
              <strong className="de-only">{credential.de}</strong>
              <small className="ru-only">{credential.ruMeta}</small>
              <small className="de-only">{credential.deMeta}</small>
              <span className="v2-document-link">
                <span className="ru-only">Открыть документ</span>
                <span className="de-only">Dokument öffnen</span>
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
        <div className="v2-section-link-row">
          <Link href="/about" className="v2-inline-link">
            <span className="ru-only">Все документы и профессиональный путь</span>
            <span className="de-only">Alle Nachweise und beruflicher Weg</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section id="faq-preview" tone="surface">
        <div className="v2-faq-layout">
          <div className="v2-faq-heading v2-reveal">
            <p className="v2-kicker ru-only">Вопросы и ответы</p>
            <p className="v2-kicker de-only">Fragen und Antworten</p>
            <h2 className="ru-only">Главное до консультации</h2>
            <h2 className="de-only">Das Wichtigste vor der Beratung</h2>
            <Link href="/faq" className="v2-inline-link">
              <span className="ru-only">Перейти ко всем вопросам</span>
              <span className="de-only">Alle Fragen ansehen</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="v2-faq-list v2-reveal v2-reveal-delay">
            {faqPreview.map(([ru, de, ruText, deText], index) => (
              <details key={ru} open={index === 0}>
                <summary>
                  <span className="ru-only">{ru}</span>
                  <span className="de-only">{de}</span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p className="ru-only">{ruText}</p>
                <p className="de-only">{deText}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section id="request" className="v2-final-section">
        <div className="v2-final-cta v2-reveal">
          <NeuralVisual />
          <div>
            <p className="v2-kicker v2-kicker-light ru-only">Следующий шаг</p>
            <p className="v2-kicker v2-kicker-light de-only">Der nächste Schritt</p>
            <h2 className="ru-only">Обсудим вашу неврологическую ситуацию спокойно и по существу</h2>
            <h2 className="de-only">Besprechen wir Ihre neurologische Situation ruhig und fachlich</h2>
            <p className="ru-only">Выберите удобное время и отправьте короткую заявку. Окончательное время консультации подтверждается врачом отдельно.</p>
            <p className="de-only">Wählen Sie einen passenden Zeitraum und senden Sie eine kurze Anfrage. Der verbindliche Termin wird separat ärztlich bestätigt.</p>
          </div>
          <ButtonLink href="/zapis" variant="light" arrow>
            <span className="ru-only">Записаться на консультацию</span>
            <span className="de-only">Termin anfragen</span>
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
