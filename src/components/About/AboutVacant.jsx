import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutVacant() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutVacant}>
      <div
        className={`${classes.aboutVacantContainer} ${classes.aboutItemContainer}`}
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
            to="/about/vacant"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Вакантные места для приема
          </Link>
        </div>
        <h2 className={`${classes.aboutVacantTitle} ${classes.aboutItemTitle}`}>
          Вакантные места для приема
        </h2>
        <div
          className={`${classes.aboutVacantColumns} ${classes.aboutItemColumns}`}
        >
          <div className={`${classes.aboutVacantRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="1"
              className={`${classes.aboutVacantSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Информация по наличию вакантных мест в организации</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutVacantDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutVacantDescription} ${classes.aboutItemDescription}`}
            >
              <p>Всего мест в учреждении: 2250</p>
              <p>На данный момент открыто: 1169</p>
              <p>Бюджетные</p>
              <ul>
                <li>всего: 1169</li>
                <li>cвободно: 276</li>
                <li>занято: 893</li>
              </ul>
              {/* <p>Платные</p>
              <ul>
                <li>всего: 75</li>
                <li>cвободно: 14</li>
                <li>занято: 61</li>
              </ul> */}
            </div>
          </div>
          <div className={`${classes.aboutVacantRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="2"
              className={`${classes.aboutVacantSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Наличие свободных мест по направленностям</p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutVacantDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
              className={`${classes.aboutVacantDescription} ${classes.aboutItemDescription}`}
            >
              <p>Естественнонаучная</p>
              <ul>
                <li>всего: 75</li>
                <li>cвободно: 41</li>
              </ul>
              <p>Техническая</p>
              <ul>
                <li>всего: 105</li>
                <li>cвободно: 24</li>
              </ul>
              <p>Социально-гуманитарная</p>
              <ul>
                <li>всего: 164</li>
                <li>cвободно: 20</li>
              </ul>
              <p>Художественная</p>
              <ul>
                <li>всего: 675</li>
                <li>cвободно: 176</li>
              </ul>
              <p>Физкультурно-спортивная</p>
              <ul>
                <li>всего: 180</li>
                <li>cвободно: 15</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
