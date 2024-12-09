import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutDocs() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutDocs}>
      <div
        className={`${classes.aboutDocsContainer} ${classes.aboutItemContainer}`}
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
            to="/about/docs"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Документы
          </Link>
        </div>
        <h2 className={`${classes.aboutDocsTitle} ${classes.aboutItemTitle}`}>
          Документы
        </h2>
        <div
          className={`${classes.aboutDocsColumns} ${classes.aboutItemColumns}`}
        >
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="1"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Устав</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/2.pdf">
                  Устав государственного бюджетного учреждения дополнительного
                  образования Зеленогорского дома детского творчества Курортного
                  района Санкт‑Петербурга (новая редакция)
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="2"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Лицензия</p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
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
              data-subtitle="3"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Свидетельство о государственной аккредитации</p>
              <FontAwesomeIcon
                data-icon="3"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="3"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                Не предусмотрено законодательными актами Российской Федерации
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="4"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>План финансово-хозяйственной деятельности</p>
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
                <a target="_blank" href="../../docs/7.pdf">
                  План финансово-хозяйственной деятельности
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="5"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Государственное задание на оказание государственных услуг</p>
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
                <a target="_blank" href="../../docs/8.pdf">
                  Государственное задание
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="6"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Локальные нормативные акты</p>
              <FontAwesomeIcon
                data-icon="6"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="6"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/9.pdf">
                  Приказ об утверждении локальных нормативных актов
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/49.pdf">
                  Положение о языках образования
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/51.pdf">
                  Положение о пропускном режиме
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/55.pdf">
                  Положение об использовании информационно коммуникационной
                  образовательной платформы «Сферум» и учебного профиля
                  VK-мессенджер при реализации образовательных программ
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/28.pdf">
                  Алгоритмы действий персонала ГБУ ДО ЗДДТ Курортного района
                  Санкт-Петербурга, работников охранных организаций, обучающихся
                  при совершении (угрозе совершения) преступления в формах
                  вооруженного нападения, размещения взрывного устройства,
                  захвата заложников, срабатывания на территории образовательной
                  организации взрывного устройства, в том числе доставленного
                  беспилотным летательным аппаратом, нападения с использованием
                  горючих жидкостей, а также информационного взаимодействия
                  образовательных организаций с территориальными органами МВД
                  России, Росгвардии и ФСБ России
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/10.pdf">
                  Приказ о порядке организации образовательного процесса в
                  условиях перехода на реализацию дополнительных
                  общеобразовательных программ с использованием дистанционных
                  технологий, электронного обучения
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/11.pdf">
                  Положение о правилах приема на обучение по дополнительным
                  общеобразовательным программам
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/12.pdf">
                  Стандарт безопасности деятельности ГБУ ДО ЗДДТ Курортного
                  района Санкт‑Петербурга в условиях COVID-19
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/13.pdf">
                  Положение о ведении и проверке электронных журналов учета
                  работы педагога дополнительного образования в объединениях ГБУ
                  ДО ЗДДТ Курортного района Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/14.pdf">
                  Положение о фомрировании штата ГБУ ДО ЗДДТ Курортного района
                  Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/44.pdf">
                  Положение о педагогическом совете ГБУ ДО ЗДДТ Курортного
                  района Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/15.pdf">
                  Положение о порядке и основаниях перевода, отчисления и
                  восстановления учащихся в ГБУ ДО ЗДДТ Курортного района
                  Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/16.pdf">
                  Положение о формах, периодичности, порядке текущего контроля
                  успеваемости и промежуточной аттестации учащихся ГБУ ДО ЗДДТ
                  Курортного района Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/17.pdf">
                  Положение о режиме занятий учащихся ГБУ ДО ЗДДТ Курортного
                  района Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/18.pdf">
                  Положение о порядке разработки и утверждения дополнительных
                  общеобразовательных общеразвивающих программ ГБУ ДО ЗДДТ
                  Курортного района Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/19.pdf">
                  Положение о порядке оформления возникновения, приостановления
                  и прекращения отношений между ГБУ ДО ЗДДТ Курортного района
                  Санкт‑Петербурга и учащимися и (или) их родителями
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/20.pdf">
                  Положение об официальном сайте ГБУ ДО ЗДДТ Курортного района
                  Санкт‑Петербурга
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/21.pdf">
                  Положение об ограничении доступа обучающихся к видам
                  информации, распространяемой посредством сети "Интернет",
                  причиняющей вред здоровью и (или) развитию детей, а также не
                  соответствующей задачам образования
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/52.pdf">
                  Правила внутреннего распорядка для обучающихся
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/22.pdf">
                  Приказ об утверждении изменений в правилах внутреннего
                  трудового распорядка
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/23.pdf">
                  Правила внутреннего трудового распорядка
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/24.pdf">
                  Положение о защите персональных данных
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/25.pdf">
                  Форма согласия работника на обработку персональных данных
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="7"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Отчет о результатах самообследования</p>
              <FontAwesomeIcon
                data-icon="7"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="7"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/26.pdf">
                  Отчет о результатах самообследования за 2022-2023 учебный год
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="8"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Платные образовательные услуги</p>
              <FontAwesomeIcon
                data-icon="8"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="8"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
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
          <div className={`${classes.aboutDocsRow} ${classes.aboutItemRow}`}>
            <div
              data-subtitle="9"
              className={`${classes.aboutDocsSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>
                Предписания органов, осуществляющих контроль (надзор) в сфере
                образования, отчеты об исполнении таких предписаний
              </p>
              <FontAwesomeIcon
                data-icon="9"
                className={`${classes.aboutDocsDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="9"
              className={`${classes.aboutDocsDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a target="_blank" href="../../docs/27.pdf">
                  Акт проверки № 23/01-05-02/2020
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/50.pdf">
                  Акт проверки № 43/14.05.2024 на предмет соблюдения требований
                  законодательства о противодействии терроризму
                </a>
              </p>
              <p>
                <a target="_blank" href="../../docs/56.pdf">
                  Акт обследования выполнения мероприятий по
                  антитеррористической защищенности объектов образования и их
                  достаточности от 12.11.2024
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
