import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { aboutCardsData } from "./aboutCardsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function About() {
  const [setOpenModal, setModalWindowContent] = useOutletContext();

  return (
    <div className={classes.about}>
      <div className={classes.aboutContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/about"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Сведения об организации
          </Link>
        </div>
        <h2 className={classes.aboutItemTitle}>Сведения об организации</h2>
        <div className={classes.aboutCards}>
          {aboutCardsData.map((card, index) =>
            card.modalContent ? (
              <div
                onClick={() => {
                  setOpenModal(true);
                  setModalWindowContent(card.modalContent);
                }}
                key={index}
                className={classes.aboutCard}
              >
                <div className={classes.aboutCardBody}>
                  <FontAwesomeIcon
                    icon={card.icon}
                    className={classes.aboutCardIcon}
                  />
                  <h2 className={classes.aboutCardTitle}>{card.title}</h2>
                </div>
              </div>
            ) : (
              <Link to={card.url} key={index} className={classes.aboutCard}>
                <div className={classes.aboutCardBody}>
                  <FontAwesomeIcon
                    icon={card.icon}
                    className={classes.aboutCardIcon}
                  />
                  <h2 className={classes.aboutCardTitle}>{card.title}</h2>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
