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
    <section className={`direct-contact ${className}`.trim()} aria-labelledby="direct-contact-title">
      <span className="contact-label ru-only">Прямая связь</span>
      <span className="contact-label de-only">Direkter Kontakt</span>

      <h3 id="direct-contact-title" className="ru-only">Сложно записаться через календарь?</h3>
      <h3 className="de-only">Ist die Online-Buchung zu schwierig?</h3>

      <p className="ru-only">
        Позвоните или напишите врачу в WhatsApp. Если врач не ответил, оставьте сообщение — он свяжется с вами позже.
      </p>
      <p className="de-only">
        Rufen Sie an oder schreiben Sie dem Arzt über WhatsApp. Falls der Arzt nicht antwortet, hinterlassen Sie bitte eine Nachricht — er meldet sich später bei Ihnen.
      </p>

      <a className="direct-phone-number" href={`tel:${PHONE_LINK}`} aria-label={`Позвонить по номеру ${PHONE_DISPLAY}`}>
        {PHONE_DISPLAY}
      </a>

      <div className="direct-contact-actions">
        <a className="button direct-call" href={`tel:${PHONE_LINK}`}>
          <span className="ru-only">Позвонить</span>
          <span className="de-only">Anrufen</span>
        </a>
        <a className="button direct-whatsapp ru-only" href={whatsappRu} target="_blank" rel="noreferrer">
          Написать в WhatsApp
        </a>
        <a className="button direct-whatsapp de-only" href={whatsappDe} target="_blank" rel="noreferrer">
          Über WhatsApp schreiben
        </a>
      </div>

      <small className="direct-contact-note ru-only">Не отправляйте медицинские документы до согласования безопасного способа передачи.</small>
      <small className="direct-contact-note de-only">Bitte senden Sie medizinische Unterlagen erst nach Abstimmung eines sicheren Übermittlungswegs.</small>
    </section>
  );
}
