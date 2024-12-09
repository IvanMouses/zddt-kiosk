import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutFinancialActivities() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutFinancialActivities}>
      <div
        className={`${classes.aboutFinancialActivitiesContainer} ${classes.aboutItemContainer}`}
      >
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link to="/about" className={mainClasses.navigationLink}>
            Сведения об организации
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/about/mto"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Материально-техническое обеспечение
          </Link>
        </div>
        <h2
          className={`${classes.aboutFinancialActivitiesTitle} ${classes.aboutItemTitle}`}
        >
          Материально-техническое обеспечение
        </h2>
        <div
          className={`${classes.aboutFinancialActivitiesColumns} ${classes.aboutItemColumns}`}
        >
          <div
            className={`${classes.aboutFinancialActivitiesRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${classes.aboutFinancialActivitiesSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Материально техническое обеспечение и оснащенность
                образовательного процесса
              </p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutFinancialActivitiesDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutFinancialActivitiesDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/53.pdf">
                  Справка МТО
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
