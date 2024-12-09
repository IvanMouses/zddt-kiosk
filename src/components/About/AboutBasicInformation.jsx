import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutBasicInformation() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutBasicInformation}>
      <div
        className={`${classes.aboutBasicInformationContainer} ${classes.aboutItemContainer}`}
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
            to="/about/basic-information"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Основные сведения об образовательной организации
          </Link>
        </div>
        <h2
          className={`${classes.aboutBasicInformationTitle} ${classes.aboutItemTitle}`}
        >
          Основные сведения об образовательной организации
        </h2>
        <div
          className={`${classes.aboutBasicInformationColumns} ${classes.aboutItemColumns}`}
        >
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Полное наименование организации</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                Государственное бюджетное учреждение дополнительного образования
                Зеленогорский дом детского творчества Курортного района
                Санкт-Петербурга
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="2"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Краткое наименование организации</p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>ГБУ ДО ЗДДТ Курортного района Санкт-Петербурга</p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="3"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Дата создания огранизации</p>
              <FontAwesomeIcon
                data-icon="3"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="3"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                27.02.1996 (
                <a target="_blank" href="../../docs/1.pdf">
                  свидетельство ЕГРЮЛ № 004382571 от 19.12.2002
                </a>
                )
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="4"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Лицензия</p>
              <FontAwesomeIcon
                data-icon="4"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="4"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/3.pdf">
                  Лицензия на осуществление образовательной деятельности
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/4.pdf">
                  Приложение №1 к лицензии
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/5.pdf">
                  Приложение №2 к лицензии
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/6.pdf">
                  Выписка из реестра лицензий
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="5"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Свидетельство о государственной аккредитации</p>
              <FontAwesomeIcon
                data-icon="5"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="5"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                Не предусмотрено законодательными актами Российской Федерации
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="6"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Учредители</p>
              <FontAwesomeIcon
                data-icon="6"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="6"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Комитет по образованию Администрации Санкт-Петербурга</p>
              <p>Администрация Курортного района Санкт-Петербурга</p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="7"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Адрес</p>
              <FontAwesomeIcon
                data-icon="7"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="7"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                197720 Разъезжая улица 4, строение 1, г. Санкт-Петербург,
                г.Зеленогорск
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="8"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Образовательная деятельность осуществляется по адресам</p>
              <FontAwesomeIcon
                data-icon="8"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="8"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                197720 Разъезжая улица 4, строение 1, г. Санкт-Петербург,
                г.Зеленогорск
              </p>
              <p>
                197720, Санкт-Петербург, Зеленогорск, Кавалерийская улица 32-А
                (4-Н (ч.п.8,10,13-15, 26-27))
              </p>
              <p>
                197729, Санкт-Петербург, пос. Молодежное, улица Правды 6-А (1-Н
                (ч.п.10)), (2-Н (ч.п. 17))
              </p>
              <p>
                197720, Санкт-Петербург, Зеленогорск, Красноармейская улица 15-А
                (3-Н (ч.п.65)), (4-Н (ч.п.34))
              </p>
              <p>
                197720, Санкт-Петербург, Зеленогорск, проспект Ленина 2-А (1-Н
                (ч.п.18))
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="9"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Режим и график работы объединений</p>
              <FontAwesomeIcon
                data-icon="9"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="9"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Понедельник-пятница - с 12:20 до 20:50</p>
              <p>Суббота - с 10:00 до 19:50</p>
              <p>
                В соответствии с{" "}
                <a href="/docs/schedule.pdf" target="_blank">
                  расписанием занятий
                </a>{" "}
                и годовым календарным учебным графиком
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutBasicInformationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="10"
              className={`${classes.aboutBasicInformationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Контакты</p>
              <FontAwesomeIcon
                data-icon="10"
                className={`${classes.aboutBasicInformationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="10"
              className={`${classes.aboutBasicInformationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Электронная почта: panteleeva.zddt@obr.gov.spb.ru</p>
              <p>Котактные телефоны:</p>
              <p>8 (812) 246-64-94 - охрана</p>
              <p>8 (812) 246-64-95 - директор</p>
              <p>8 (812) 246-64-96 - секретарь</p>
              <p>
                8 (812) 246-64-97 - заместитель директора по
                учебно-воспитательной работе
              </p>
              <p>8 (812) 246-64-98 - методический отдел</p>
              <p>
                8 (812) 246-64-99 - заместитель директора по
                административно-хозяйственной работе
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
