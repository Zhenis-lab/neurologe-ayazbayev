import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Контакты · Kontakt" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero shell compact">
        <p className="kicker ru-only">Контакты</p><p className="kicker de-only">Kontakt</p>
        <h1 className="ru-only">Связь без лишних кругов.</h1><h1 className="de-only">Kontakt ohne Umwege.</h1>
        <p className="lead narrow ru-only">Для первой связи используйте форму заявки. Так мы сразу поймём подходящий формат консультации.</p>
        <p className="lead narrow de-only">Nutzen Sie für den Erstkontakt die Anfrage. So lässt sich das passende Beratungsformat direkt klären.</p>
      </section>
      <section className="contact-grid shell">
        <div className="contact-card primary-contact">
          <span className="contact-label ru-only">Специалист</span><span className="contact-label de-only">Ansprechpartner</span>
          <h2 className="ru-only">Женис Аязбаев</h2><h2 className="de-only">Zhenis Ayazbayev</h2>
          <p>Facharzt für Neurologie</p>
          <dl>
            <div><dt className="ru-only">Языки</dt><dt className="de-only">Sprachen</dt><dd>Русский · Deutsch</dd></div>
            <div><dt className="ru-only">Формат</dt><dt className="de-only">Format</dt><dd>Online · Video</dd></div>
            <div><dt className="ru-only">Местонахождение</dt><dt className="de-only">Standort</dt><dd>Deutschland</dd></div>
          </dl>
          <Link href="/zapis" className="button"><span className="ru-only">Оставить заявку</span><span className="de-only">Termin anfragen</span></Link>
        </div>
        <div className="contact-stack">
          <div className="contact-card">
            <span className="contact-label ru-only">Прямые контакты</span><span className="contact-label de-only">Direkter Kontakt</span>
            <h3 className="ru-only">Добавляются перед открытым запуском</h3><h3 className="de-only">Wird vor dem öffentlichen Start ergänzt</h3>
            <p className="ru-only">E-mail и Signal будут опубликованы после подтверждения. В приватной версии личные данные не показываются.</p>
            <p className="de-only">E-Mail und Signal werden nach Bestätigung ergänzt. In der privaten Version werden keine persönlichen Kontaktdaten veröffentlicht.</p>
          </div>
          <div className="contact-card emergency-card">
            <span className="contact-label ru-only">Экстренная ситуация</span><span className="contact-label de-only">Notfall</span>
            <h3 className="ru-only">Не используйте онлайн-запись.</h3><h3 className="de-only">Keine Online-Anfrage senden.</h3>
            <p className="ru-only">Обратитесь в местную службу экстренной помощи. В Германии: 112.</p>
            <p className="de-only">Wenden Sie sich an den örtlichen Rettungsdienst. In Deutschland: 112.</p>
          </div>
        </div>
      </section>
    </>
  );
}
