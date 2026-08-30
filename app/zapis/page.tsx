import type { Metadata } from "next";
import { CalBooking } from "../../components/CalBooking";
import { DirectContact } from "../../components/DirectContact";
import { Container } from "../../components/v2/Container";

export const metadata: Metadata = { title: "Запись · Terminanfrage" };

export default function BookingPage() {
  return (
    <div className="v2-page">
      <section className="v2-booking-layout">
        <Container className="v2-booking-grid">
          <aside className="v2-booking-aside v2-reveal">
            <p className="v2-kicker ru-only">Запись на консультацию</p>
            <p className="v2-kicker de-only">Terminanfrage</p>
            <h1 className="ru-only">Оставьте заявку</h1>
            <h1 className="de-only">Termin anfragen</h1>
            <p className="v2-hero-lead ru-only">Свободный слот — это предварительный запрос. Окончательное время консультации назначает и подтверждает врач.</p>
            <p className="v2-hero-lead de-only">Ein freies Zeitfenster ist zunächst eine Anfrage. Der verbindliche Termin wird vom Arzt festgelegt und bestätigt.</p>
            <ol className="v2-steps">
              <li>
                <span>1</span>
                <p><b className="ru-only">Дата и время</b><b className="de-only">Datum und Uhrzeit</b><small className="ru-only">Выберите один из свободных слотов</small><small className="de-only">Wählen Sie ein freies Zeitfenster</small></p>
              </li>
              <li>
                <span>2</span>
                <p><b className="ru-only">Контактные данные</b><b className="de-only">Kontaktdaten</b><small className="ru-only">Телефон и предпочитаемый способ связи</small><small className="de-only">Telefon und bevorzugter Kontaktweg</small></p>
              </li>
              <li>
                <span>3</span>
                <p><b className="ru-only">Подтверждение врачом</b><b className="de-only">Ärztliche Bestätigung</b><small className="ru-only">Подробности и ссылка придут отдельно</small><small className="de-only">Details und Videolink folgen separat</small></p>
              </li>
            </ol>
          </aside>
          <div className="v2-booking-panel v2-reveal v2-reveal-delay">
            <CalBooking />
          </div>
          <DirectContact className="v2-booking-direct-contact" />
        </Container>
      </section>
    </div>
  );
}
