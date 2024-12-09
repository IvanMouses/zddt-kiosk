import classes from "./Contacts.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <section className={classes.contacts}>
      <div className={classes.contactsContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/contacts"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Контакты
          </Link>
        </div>
        <h2 className={classes.contactsTitle}>Контакты</h2>
        <div className={classes.contactsAdress}>
          <h3>Адрес</h3>
          <p>197720, СПб, г. Зеленогорск, ул. Разъезжая 4, стр. 1</p>
        </div>
        <div className={classes.contactsPhones}>
          <h3>Телефоны</h3>
          <p>8 (812) 246-64-94 - охрана</p>
          <p>8 (812) 246-64-95 - директор</p>
          <p>8 (812) 246-64-96 - секретарь</p>
          <p>
            8 (812) 246-64-97 - заместитель директора по учебно-воспитательной
            работе
          </p>
          <p>8 (812) 246-64-98 - методический отдел</p>
          <p>
            8 (812) 246-64-99 - заместитель директора по
            административно-хозяйственной работе
          </p>
        </div>
        <div className={classes.contactsEmail}>
          <h3>Электронная почта</h3>
          <p>panteleeva.zddt@obr.gov.spb.ru - для официальных обращений</p>
          <p>zddut2007@yandex.ru - по общим вопросам</p>
        </div>
      </div>
    </section>
  );
}
