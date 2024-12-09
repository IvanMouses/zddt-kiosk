import classes from "./Activities.module.css";
import mainClasses from "../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { activitiesCardsData } from "./activitiesCardsData";

export default function Activities() {
  return (
    <div className={classes.activities}>
      <div className={classes.activitiesContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/activities"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Деятельность
          </Link>
        </div>
        <h2 className={classes.activitiesTitle}>Деятельность</h2>
        <div className={classes.activitiesCards}>
          {activitiesCardsData.map((card, index) =>
            card.modalContent ? (
              <div
                onClick={() => {
                  setOpenModal(true);
                  setModalWindowContent(card.modalContent);
                }}
                key={index}
                className={classes.activitiesCard}
              >
                <div className={classes.activitiesCardBody}>
                  <FontAwesomeIcon
                    icon={card.icon}
                    className={classes.activitiesCardIcon}
                  />
                  <h2 className={classes.activitiesCardTitle}>{card.title}</h2>
                </div>
              </div>
            ) : (
              <Link
                to={card.url}
                key={index}
                className={classes.activitiesCard}
              >
                <div className={classes.activitiesCardBody}>
                  <FontAwesomeIcon
                    icon={card.icon}
                    className={classes.activitiesCardIcon}
                  />
                  <h2 className={classes.activitiesCardTitle}>{card.title}</h2>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
