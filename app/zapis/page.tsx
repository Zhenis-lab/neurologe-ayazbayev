import type { Metadata } from "next";
import { CalBooking } from "../../components/CalBooking";

export const metadata: Metadata = { title: "Запись · Terminanfrage" };

export default function BookingPage() {
  return (
    <section className="booking-page shell">
      <div className="booking-aside">
        <p className="kicker ru-only">Запись на консультацию</p><p className="kicker de-only">Terminanfrage</p>
        <h1 className="ru-only">Выберите удобное время.</h1>
        <h1 className="de-only">Wählen Sie eine passende Zeit.</h1>
        <p className="lead ru-only">Свободный слот — это предварительный запрос. Окончательное время консультации назначает и подтверждает врач.</p>
        <p className="lead de-only">Ein freies Zeitfenster ist zunächst eine Anfrage. Der verbindliche Termin wird vom Arzt festgelegt und bestätigt.</p>
        <div className="steps">
          <div><span>1</span><p><b className="ru-only">Дата и время</b><b className="de-only">Datum und Uhrzeit</b><small className="ru-only">Выберите один из свободных слотов</small><small className="de-only">Wählen Sie ein freies Zeitfenster</small></p></div>
          <div><span>2</span><p><b className="ru-only">Контактные данные</b><b className="de-only">Kontaktdaten</b><small className="ru-only">Телефон и предпочитаемый способ связи</small><small className="de-only">Telefon und bevorzugter Kontaktweg</small></p></div>
          <div><span>3</span><p><b className="ru-only">Подтверждение врачом</b><b className="de-only">Ärztliche Bestätigung</b><small className="ru-only">Подробности и ссылка придут отдельно</small><small className="de-only">Details und Videolink folgen separat</small></p></div>
        </div>
      </div>
      <div className="form-card calendar-card"><CalBooking /></div>
    </section>
  );
}
