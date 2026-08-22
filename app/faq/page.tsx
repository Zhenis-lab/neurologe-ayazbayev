import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Вопросы и ответы · FAQ" };

const faq = [
  [
    "Может ли онлайн-консультация заменить очный приём?",
    "Kann eine Online-Beratung den Arztbesuch vor Ort ersetzen?",
    "Не всегда. Неврологический осмотр часто требует личного присутствия. Во время консультации мы определим, какие вопросы можно решить онлайн и когда необходим очный осмотр.",
    "Nicht immer. Eine neurologische Untersuchung erfordert häufig persönliche Anwesenheit. In der Beratung klären wir, was online möglich ist und wann ein Termin vor Ort notwendig ist."
  ],
  [
    "Какие документы могут понадобиться?",
    "Welche Unterlagen können hilfreich sein?",
    "Обычно полезны выписки, список лекарств, заключения МРТ/КТ, ЭЭГ или ЭНМГ. Безопасный способ передачи документов согласовывается после первичного контакта.",
    "Hilfreich sind meist Arztbriefe, Medikamentenliste sowie MRT-/CT-, EEG- oder ENMG-Befunde. Die sichere Übermittlung wird nach dem Erstkontakt vereinbart."
  ],
  [
    "Можно ли получить рецепт или больничный?",
    "Kann ich ein Rezept oder eine Arbeitsunfähigkeitsbescheinigung erhalten?",
    "Онлайн-второе мнение само по себе не гарантирует выдачу рецепта, направления или больничного. Это зависит от страны, клинической ситуации и правовых условий.",
    "Eine Online-Zweitmeinung garantiert kein Rezept, keine Überweisung und keine Arbeitsunfähigkeitsbescheinigung. Das hängt von Land, Situation und rechtlichen Voraussetzungen ab."
  ],
  [
    "Как проходит оплата?",
    "Wie erfolgt die Bezahlung?",
    "Стоимость и способ оплаты подтверждаются до консультации. Никаких неожиданных доплат после встречи.",
    "Kosten und Zahlungsweg werden vor dem Termin bestätigt. Es gibt keine überraschenden Zusatzkosten nach dem Gespräch."
  ],
  [
    "Что делать при резком ухудшении?",
    "Was ist bei einer akuten Verschlechterung zu tun?",
    "При внезапной слабости, нарушении речи, новом судорожном приступе, потере сознания или необычно сильной головной боли вызывайте местную экстренную помощь. Не ждите онлайн-консультации.",
    "Bei plötzlicher Lähmung, Sprachstörung, neuem Krampfanfall, Bewusstlosigkeit oder ungewöhnlich starkem Kopfschmerz rufen Sie den örtlichen Notdienst. Warten Sie nicht auf einen Online-Termin."
  ],
  [
    "На каких языках проходит консультация?",
    "In welchen Sprachen findet die Beratung statt?",
    "На русском или немецком. Язык можно выбрать при записи.",
    "Auf Deutsch oder Russisch. Die Sprache wählen Sie bei der Anfrage."
  ]
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero shell compact">
        <p className="kicker ru-only">Вопросы и ответы</p><p className="kicker de-only">Fragen & Antworten</p>
        <h1 className="ru-only">Главное — до консультации.</h1><h1 className="de-only">Das Wichtigste vor der Beratung.</h1>
      </section>
      <section className="faq-layout shell">
        <div className="faq-list">
          {faq.map((item, index) => (
            <details key={item[0]} open={index === 0}>
              <summary><span className="ru-only">{item[0]}</span><span className="de-only">{item[1]}</span><i /></summary>
              <p className="ru-only">{item[2]}</p><p className="de-only">{item[3]}</p>
            </details>
          ))}
        </div>
        <aside className="faq-aside">
          <span className="aside-mark">?</span>
          <h2 className="ru-only">Вашего вопроса нет в списке?</h2><h2 className="de-only">Ihre Frage ist nicht dabei?</h2>
          <p className="ru-only">Оставьте короткую заявку — без медицинских подробностей.</p><p className="de-only">Senden Sie eine kurze Anfrage — ohne medizinische Details.</p>
          <Link href="/zapis" className="button button-light"><span className="ru-only">Задать вопрос</span><span className="de-only">Frage stellen</span></Link>
        </aside>
      </section>
    </>
  );
}
