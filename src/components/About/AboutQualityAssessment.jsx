import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutQualityAssessment() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutQualityAssessment}>
      <div
        className={`${classes.aboutQualityAssessmentContainer} ${classes.aboutItemContainer}`}
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
            to="/about/quality-assessment"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Независимая оценка качества
          </Link>
        </div>
        <h2
          className={`${classes.aboutQualityAssessmentTitle} ${classes.aboutItemTitle}`}
        >
          Независимая оценка качества
        </h2>
        <div
          className={`${classes.aboutQualityAssessmentColumns} ${classes.aboutItemColumns}`}
        >
          <div
            className={`${classes.aboutQualityAssessmentRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${classes.aboutQualityAssessmentSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Анкета для опроса получателей услуг о качестве условий оказания
                услуг организациями социальной сферы
              </p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutQualityAssessmentDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutQualityAssessmentDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a
                  target="_blank"
                  href="https://resurs-online.ru/Report-Org.aspx?Guid=8fec8a42-e5d4-428b-a12b-77e98da532e9"
                >
                  Результаты анкетирования
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutQualityAssessmentRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="2"
              className={`${classes.aboutQualityAssessmentSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Независимая оценка качества условий осуществления
                образовательной деятельности
              </p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutQualityAssessmentDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
              className={`${classes.aboutQualityAssessmentDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="https://bus.gov.ru/info-card/453971">
                  Результаты независимой оценки
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
