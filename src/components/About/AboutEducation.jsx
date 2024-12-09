import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutEducation() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutEducation}>
      <div
        className={`${classes.aboutEducationContainer} ${classes.aboutItemContainer}`}
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
            to="/about/education"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Образование
          </Link>
        </div>
        <h2
          className={`${classes.aboutEducationTitle} ${classes.aboutItemTitle}`}
        >
          Образование
        </h2>
        <div
          className={`${classes.aboutEducationColumns} ${classes.aboutItemColumns}`}
        >
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Реализуемый уровень образования</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Дополнительное образование</p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="2"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Языки, на которых осуществляется обучение</p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Государственный язык Российской Федерации - русский</p>
              <p>
                <a target="_blank" href="../../docs/49.pdf">
                  Положение о языках образования
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="3"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Форма обучения</p>
              <FontAwesomeIcon
                data-icon="3"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="3"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Очная/очно-дистанционная/дистанционная</p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="4"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Образовательная программа</p>
              <FontAwesomeIcon
                data-icon="4"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="4"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/29.pdf">
                  Образовательная программа ГБУ ДО ЗДДТ Курортного района
                  Санкт-Петербурга с изменениями от 30.08.2021
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="5"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Использование электронного обучения и дистанционных
                образовательных технологий
              </p>
              <FontAwesomeIcon
                data-icon="5"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="5"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                Электронное обучение и дистанционные образовательные технологии
                применяются в следующих случаях:
              </p>
              <ul>
                <li>карантинные меры, в том числе в условиях эпидемии;</li>
                <li>обучение на дому;</li>
                <li>подготовка к конкурсам;</li>
                <li>пропуски занятий обучающимися по уважительным причинам</li>
              </ul>
              <p>
                Примеры инструментов электронного и дистанционного обучения:
              </p>
              <ul>
                <li>видео-конференции (Яндекс-телемост);</li>
                <li>электронная почта;</li>
                <li>облачные технологии Яндекс;</li>
                <li>VK-мессенджер</li>
              </ul>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="6"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Учебные предметы, курсы, дисциплины (модули), предусмотренные
                соответствующей образовательной программой
              </p>
              <FontAwesomeIcon
                data-icon="6"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="6"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <Link target="_blank" to="/courses">
                  Образовательные программы
                </Link>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="7"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Методические и иные документы, разработанные ОО для обеспечения
                образовательного процесса
              </p>
              <FontAwesomeIcon
                data-icon="7"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="7"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/18.pdf">
                  Положение о порядке разработки и утверждения дополнительных
                  общеобразовательных общеразвивающих программ ГБУ ДО ЗДДТ
                  Курортного района Санкт-Петербурга
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="8"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Численность обучающихся по дополнительным общеразвивающим
                программам
              </p>
              <FontAwesomeIcon
                data-icon="8"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="8"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>Общая численность обучающихся: 1169 человек</p>
              <p>Из них:</p>
              <ul>
                <li>
                  численность обучающихся за счет бюджетных ассигнований
                  бюджетов субъектов Российской Федерации: 1169 человек
                  (иностранных граждан - 0 человек);
                </li>
                <li>
                  численность обучающихся по договорам об образовании,
                  заключаемых при приеме на обучение за счет средств физического
                  и (или) юридического лица: 0 человек (иностранных граждан - 0
                  человек)
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="9"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Программа развития</p>
              <FontAwesomeIcon
                data-icon="9"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="9"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/57.pdf">
                  Программа развития ГБУ ДО ЗДДТ Курортного района
                  Санкт-Петербурга на 2021-2025 годы «Творчества = Успех»
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/58.pdf">
                  Отчет о результатах выполнения программы развития
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="10"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Учебный план</p>
              <FontAwesomeIcon
                data-icon="10"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="10"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/30.pdf">
                  Учебный план ГБУ ДО ЗДДТ Курортного района Санкт-Петербурга на
                  2022-2023 учебный год
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="11"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>План работы</p>
              <FontAwesomeIcon
                data-icon="11"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="11"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/31.pdf">
                  План работы ГБУ ДО ЗДДТ Курортного района Санкт-Петербурга на
                  2022-2023 учебный год
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="12"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Календарный учебный график</p>
              <FontAwesomeIcon
                data-icon="12"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="12"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/32.pdf">
                  Годовой календарный учебный график ГБУ ДО ЗДДТ Курортного
                  района Санкт-Петербурга на 2022-2023 учебный год
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="13"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Учебно-производственный план</p>
              <FontAwesomeIcon
                data-icon="13"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="13"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/33.pdf">
                  Учебно-производственный план ГБУ ДО ЗДДТ Курортного района
                  Санкт-Петербурга на 2024-2025 учебный год
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="14"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Свидетельство о государственной аккредитации</p>
              <FontAwesomeIcon
                data-icon="14"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="14"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                Не предусмотрено законодательными актами Российской Федерации
              </p>
            </div>
          </div>
          <div
            className={`${classes.aboutEducationRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="15"
              className={`${classes.aboutEducationSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Лицензия</p>
              <FontAwesomeIcon
                data-icon="15"
                className={`${classes.aboutEducationDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="15"
              className={`${classes.aboutEducationDescription} ${classes.aboutItemDescription}`}
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
        </div>
      </div>
    </div>
  );
}
