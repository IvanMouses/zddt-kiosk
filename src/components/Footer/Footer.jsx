import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerContacts}>
          <div className={classes.mainContacts}>
            <p>
              <FontAwesomeIcon
                className={classes.footerContactsIcon}
                icon={faLocationDot}
              />
              197720, СПб, г. Зеленогорск, ул. Разъезжая 4, стр. 1
            </p>
            <p>
              <FontAwesomeIcon
                className={classes.footerContactsIcon}
                icon={faPhone}
              />
              8 (812) 246-64-96
            </p>
            <p>
              <FontAwesomeIcon
                className={classes.footerContactsIcon}
                icon={faEnvelope}
              />
              panteleeva.zddt@obr.gov.spb.ru
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
