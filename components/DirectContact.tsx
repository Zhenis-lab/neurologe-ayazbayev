const PHONE_DISPLAY = "+49 1590 1381634";
const PHONE_LINK = "+4915901381634";

const whatsappRu = `https://wa.me/${PHONE_LINK}?text=${encodeURIComponent(
  "Здравствуйте! Я хотел(а) бы записаться на онлайн-консультацию невролога."
)}`;

const whatsappDe = `https://wa.me/${PHONE_LINK}?text=${encodeURIComponent(
  "Guten Tag! Ich möchte gerne einen Termin für eine neurologische Online-Beratung anfragen."
)}`;

type DirectContactProps = {
  className?: string;
};

export function DirectContact({ className = "" }: DirectContactProps) {
  return (
    <section className={`v2-direct-contact ${className}`.trim()} aria-labelledby="direct-contact-title">
      <span className="v2-kicker ru-only">Прямая связь</span>
      <span className="v2-kicker de-only">Direkter Kontakt</span>

      <h3 id="direct-contact-title" className="ru-only">Сложно записаться через календарь?</h3>
      <h3 className="de-only">Ist die Online-Buchung zu schwierig?</h3>

      <p className="ru-only">
        Позвоните или напишите врачу в WhatsApp. Если врач не ответил, оставьте сообщение — он свяжется с вами позже.
      </p>
      <p className="de-only">
        Rufen Sie an oder schreiben Sie dem Arzt über WhatsApp. Falls der Arzt nicht antwortet, hinterlassen Sie bitte eine Nachricht — er meldet sich später bei Ihnen.
      </p>

      <a className="v2-direct-phone" href={`tel:${PHONE_LINK}`} aria-label={`Позвонить по номеру ${PHONE_DISPLAY}`}>
        {PHONE_DISPLAY}
      </a>

      <div className="v2-direct-actions">
        <a className="v2-button v2-button-secondary" href={`tel:${PHONE_LINK}`}>
          <span className="ru-only">Позвонить</span>
          <span className="de-only">Anrufen</span>
        </a>
        <a className="v2-button v2-button-whatsapp ru-only" href={whatsappRu} target="_blank" rel="noreferrer">
          Написать в WhatsApp
        </a>
        <a className="v2-button v2-button-whatsapp de-only" href={whatsappDe} target="_blank" rel="noreferrer">
          Über WhatsApp schreiben
        </a>
      </div>

      <small className="v2-direct-note ru-only">Не отправляйте медицинские документы до согласования безопасного способа передачи.</small>
      <small className="v2-direct-note de-only">Bitte senden Sie medizinische Unterlagen erst nach Abstimmung eines sicheren Übermittlungswegs.</small>
    </section>
  );
}
