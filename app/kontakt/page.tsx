import type { Metadata } from "next";
import { DirectContact } from "../../components/DirectContact";
import { ButtonLink } from "../../components/v2/ButtonLink";
import { Container } from "../../components/v2/Container";

export const metadata: Metadata = { title: "Контакты · Kontakt" };

export default function ContactPage() {
  return (
    <div className="v2-page">
      <section className="v2-page-hero v2-page-hero-compact">
        <Container>
          <div className="v2-reveal">
            <p className="v2-kicker ru-only">Контакты</p>
            <p className="v2-kicker de-only">Kontakt</p>
            <h1 className="ru-only">Связь без лишних кругов</h1>
            <h1 className="de-only">Kontakt ohne Umwege</h1>
            <p className="v2-hero-lead ru-only">Запишитесь через календарь или свяжитесь с врачом напрямую по телефону или WhatsApp.</p>
            <p className="v2-hero-lead de-only">Buchen Sie über den Kalender oder kontaktieren Sie den Arzt direkt per Telefon oder WhatsApp.</p>
          </div>
        </Container>
      </section>

      <section className="v2-final-section">
        <Container className="v2-contact-grid">
          <div className="v2-contact-card v2-contact-primary v2-reveal">
            <p className="v2-kicker ru-only">Специалист</p>
            <p className="v2-kicker de-only">Ansprechpartner</p>
            <h2 className="ru-only">Женис Аязбаев</h2>
            <h2 className="de-only">Zhenis Ayazbayev</h2>
            <p>Facharzt für Neurologie</p>
            <dl className="v2-contact-facts">
              <div><dt className="ru-only">Языки</dt><dt className="de-only">Sprachen</dt><dd>Русский · Deutsch</dd></div>
              <div><dt className="ru-only">Формат</dt><dt className="de-only">Format</dt><dd>Online · Video</dd></div>
              <div><dt className="ru-only">Местонахождение</dt><dt className="de-only">Standort</dt><dd>Deutschland</dd></div>
            </dl>
            <ButtonLink href="/zapis" arrow>
              <span className="ru-only">Оставить заявку</span>
              <span className="de-only">Termin anfragen</span>
            </ButtonLink>
          </div>
          <div className="v2-contact-stack v2-reveal v2-reveal-delay">
            <DirectContact className="v2-contact-card" />
            <div className="v2-contact-card v2-emergency-card">
              <p className="v2-kicker ru-only">Экстренная ситуация</p>
              <p className="v2-kicker de-only">Notfall</p>
              <h3 className="ru-only">Не используйте онлайн-запись</h3>
              <h3 className="de-only">Keine Online-Anfrage senden</h3>
              <p className="ru-only">Обратитесь в местную службу экстренной помощи. В Германии: 112.</p>
              <p className="de-only">Wenden Sie sich an den örtlichen Rettungsdienst. In Deutschland: 112.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
