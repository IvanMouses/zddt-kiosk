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
            to="/about/financial-activities"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Финансово-хозяйственная деятельность
          </Link>
        </div>
        <h2
          className={`${classes.aboutFinancialActivitiesTitle} ${classes.aboutItemTitle}`}
        >
          Финансово-хозяйственная деятельность
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
              <p>План финансово-хозяйственной деятельности</p>
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
                <a target="_blank" href="../../docs/7.pdf">
                  План финансово-хозяйственной деятельности
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutFinancialActivitiesRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="2"
              className={`${classes.aboutFinancialActivitiesSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Государственное задание на оказание государственных услуг</p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutFinancialActivitiesDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
              className={`${classes.aboutFinancialActivitiesDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/8.pdf">
                  Государственное задание
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
