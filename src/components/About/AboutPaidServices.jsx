import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutPaidServices() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutPaidServices}>
      <div
        className={`${classes.aboutPaidServicesContainer} ${classes.aboutItemContainer}`}
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
            to="/about/paid-services"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Платные образовательные услуги
          </Link>
        </div>
        <h2
          className={`${classes.aboutPaidServicesTitle} ${classes.aboutItemTitle}`}
        >
          Платные образовательные услуги
        </h2>
        <div
          className={`${classes.aboutPaidServicesColumns} ${classes.aboutItemColumns}`}
        >
          <div
            className={`${classes.aboutPaidServicesRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${classes.aboutPaidServicesSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Документы по платным услугам</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutPaidServicesDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutPaidServicesDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/34.pdf">
                  Приказ об утверждении документов по платным услугам
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/35.pdf">
                  Положение об оказании и организации платных образовательных
                  услуг в ГБУ ДО ЗДДТ Курортного района Санкт-Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/36.pdf">
                  Калькуляция затрат на оказание платных образовательных услуг
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/37.pdf">
                  Смета доходов и расходов поступлений от оказания платных услуг
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/38.pdf">
                  Производственный план на 2023/2024 учебный год по платным
                  образовательным услугам
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/39.pdf">
                  Положение о расходовании внебюджетных средств на 2023/2024
                  учебный год
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/40.pdf">
                  Штатное расписание по платным образовательным услугам
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/41.pdf">
                  Список преподавателей, административно-хозяйственного,
                  учебно-вспомогательного и обслуживающего персонала, занятых в
                  предоставлении платных образовательных услуг
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/42.pdf">
                  Расписание занятий в объединениях, оказывающих платные
                  образовательные услуги
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/43.pdf">
                  Образец договора на оказание платных образовательных услуг
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
