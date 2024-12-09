import classes from "./Activities.module.css";
import mainClasses from "../App.module.css";
import aboutClasses from "../About/About.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "../About/handleDropDown";
import { useEffect } from "react";

export default function Mentoring() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.mentoring}>
      <div className={classes.mentoringContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link to="/activities" className={mainClasses.navigationLink}>
            Деятельность
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/activities/mentoring"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Наставничество
          </Link>
        </div>
        <h2 className={classes.mentoringTitle}>Наставничество</h2>
        <div
          className={`${aboutClasses.aboutDocsColumns} ${aboutClasses.aboutItemColumns}`}
        >
          <div
            className={`${aboutClasses.aboutDocsRow} ${aboutClasses.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${aboutClasses.aboutDocsSubtitle} ${aboutClasses.aboutItemSubtitle}`}
            >
              <p>Документы</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${aboutClasses.aboutDocsDropDownIcon} ${aboutClasses.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${aboutClasses.aboutDocsDescription} ${aboutClasses.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/46.pdf">
                  Распоряжение Комитета по образованию СПб Об утверждении
                  Положения о системе наставничества
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/47.pdf">
                  Положение о системе (целевой модели) наствавничества в ГБУ ДО
                  ЗДДТ Курортного района Санкт-Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/48.pdf">
                  Дорожная карта по реализации положения о системе (целевой
                  модели) наставничества в ГБУ ДО ЗДДТ Курортного района
                  Санкт-Петербкрга
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
