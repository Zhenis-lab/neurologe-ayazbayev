import type { Metadata } from "next";
import Link from "next/link";
import { DirectContact } from "../../components/DirectContact";

export const metadata: Metadata = { title: "Контакты · Kontakt" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero shell compact">
        <p className="kicker ru-only">Контакты</p><p className="kicker de-only">Kontakt</p>
        <h1 className="ru-only">Связь без лишних кругов.</h1><h1 className="de-only">Kontakt ohne Umwege.</h1>
        <p className="lead narrow ru-only">Запишитесь через календарь или свяжитесь с врачом напрямую по телефону или WhatsApp.</p>
        <p className="lead narrow de-only">Buchen Sie über den Kalender oder kontaktieren Sie den Arzt direkt per Telefon oder WhatsApp.</p>
      </section>
      <section className="contact-grid shell">
        <div className="contact-card primary-contact">
          <span className="contact-label ru-only">Специалист</span><span className="contact-label de-only">Ansprechpartner</span>
          <h2 className="ru-only">Женя Саязбаев</h2><h2 className="de-only">Zhenis Ayazbayev</h2>
          <p>Facharzt für Neurologie</p>
          <dl>
            <div><dt className="ru-only">Языки</dt><dt className="de-only">Sprachen</dt><dd>Русский · Deutsch</dd></div>
            <div><dt className="ru-only">Формат</dt><dt className="de-only">Format</dt><dd>Online · Video</dd></div>
            <div><dt className="ru-only">Местонахождение</dt><dt className="de-only">Standort</dt><dd>Deutschland</dd></div>
          </dl>
          <Link href="/zapis" className="button"><span className="ru-only">Оставить заявку</span><span className="de-only">Termin anfragen</span></Link>
        </div>
        <div className="contact-stack">
          <DirectContact className="contact-card" />
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
