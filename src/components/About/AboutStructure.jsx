import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faDigging,
  faPeopleGroup,
  faBuildingColumns,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function AboutStructure() {
  return (
    <div className={classes.aboutStructure}>
      <div
        className={`${classes.aboutStructureContainer} ${classes.aboutItemContainer}`}
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
            to="/about/structure"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Структура и органы управления
          </Link>
        </div>
        <h2
          className={`${classes.aboutStructureTitle} ${classes.aboutItemTitle}`}
        >
          Структура и органы управления
        </h2>
        <h3 className={`${classes.aboutStructureSubtitle}`}>Администрация</h3>
        <div
          className={`${classes.aboutStructureCards} ${classes.aboutStructureCardsAdmins}`}
        >
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardAdmins} ${classes.adminA}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyAdmins}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconAdmins}`}
              >
                <img loading="lazy" src="/img/About/1.png" alt="" />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoAdmins}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameAdmins}`}
                >
                  Пантелеева Альбина Евгеньевна
                </p>
                <p
                  className={`${classes.aboutStructureCardUserInfoJob} ${classes.aboutStructureCardUserInfoJobAdmins}`}
                >
                  ДИРЕКТОР
                </p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserContacts} ${classes.aboutStructureCardUserContactsAdmins}`}
              >
                <p>8 (812) 246-64-95</p>
                <p>panteleeva.zddt@obr.gov.spb.ru</p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserSchedule} ${classes.aboutStructureCardUserScheduleAdmins}`}
              >
                <p>Часы работы: 8:30 - 17:00</p>
                <p>Обед: 12:30 - 13:00</p>
                <p>Приемный день: вторник 10:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardAdmins} ${classes.adminB}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyAdmins}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconAdmins}`}
              >
                <img loading="lazy" src="/img/About/2.png" alt="" />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoAdmins}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameAdmins}`}
                >
                  Никитина Анна Владимировна
                </p>
                <p
                  className={`${classes.aboutStructureCardUserInfoJob} ${classes.aboutStructureCardUserInfoJobAdmins}`}
                >
                  ЗАМЕСТИТЕЛЬ ДИРЕКТОРА ПО УВР
                </p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserContacts} ${classes.aboutStructureCardUserContactsAdmins}`}
              >
                <p>8 (812) 246-64-97</p>
                <p>panteleeva.zddt@obr.gov.spb.ru</p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserSchedule} ${classes.aboutStructureCardUserScheduleAdmins}`}
              >
                <p>Часы работы: 10:30 - 19:00</p>
                <p>Обед: 12:30 - 13:00</p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardAdmins} ${classes.adminC}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyAdmins}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconAdmins}`}
              >
                <img loading="lazy" src="/img/About/3.png" alt="" />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoAdmins}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameAdmins}`}
                >
                  Винокурова Валентина Николаевна
                </p>
                <p
                  className={`${classes.aboutStructureCardUserInfoJob} ${classes.aboutStructureCardUserInfoJobAdmins}`}
                >
                  ЗАМЕСТИТЕЛЬ ДИРЕКТОРА ПО АХР
                </p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserContacts} ${classes.aboutStructureCardUserContactsAdmins}`}
              >
                <p>8 (812) 246-64-99</p>
                <p>panteleeva.zddt@obr.gov.spb.ru</p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserSchedule} ${classes.aboutStructureCardUserScheduleAdmins}`}
              >
                <p>Часы работы: 8:30 - 17:00</p>
                <p>Обед: 12:30 - 13:00</p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardAdmins} ${classes.adminD}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyAdmins}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconAdmins}`}
              >
                <img loading="lazy" src="/img/About/4.png" alt="" />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoAdmins}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameAdmins}`}
                >
                  Мовсесян Иван Гарриевич
                </p>
                <p
                  className={`${classes.aboutStructureCardUserInfoJob} ${classes.aboutStructureCardUserInfoJobAdmins}`}
                >
                  ЗАМЕСТИТЕЛЬ ДИРЕКТОРА ПО ИКТ, МЕТОДИСТ
                </p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserContacts} ${classes.aboutStructureCardUserContactsAdmins}`}
              >
                <p>8 (812) 246-64-96</p>
                <p>panteleeva.zddt@obr.gov.spb.ru</p>
              </div>
              <div
                className={`${classes.aboutStructureCardUserSchedule} ${classes.aboutStructureCardUserScheduleAdmins}`}
              >
                <p>Часы работы: 9:00 - 17:15</p>
                <p>Обед: 13:00 - 14:00</p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardAdmins} ${classes.adminE}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyAdmins}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconAdmins}`}
              >
                <FontAwesomeIcon
                  className={classes.aboutStructureCardOtherIcon}
                  icon={faChalkboardUser}
                />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoAdmins}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameAdmins}`}
                >
                  Педагоги дополнительного образования, методисты
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardAdmins} ${classes.adminF}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyAdmins}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconAdmins}`}
              >
                <FontAwesomeIcon
                  className={classes.aboutStructureCardOtherIcon}
                  icon={faDigging}
                />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoAdmins}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameAdmins}`}
                >
                  Обслуживающий персонал
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3 className={`${classes.aboutStructureSubtitle}`}>
          Коллегиальные органы управления
        </h3>
        <div
          className={`${classes.aboutStructureCards} ${classes.aboutStructureCardsCollegialOrgans}`}
        >
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardCollegialOrgans} ${classes.collegianOrganA}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyCollegialOrgans}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconCollegialOrgans}`}
              >
                <FontAwesomeIcon
                  className={classes.aboutStructureCardOtherIcon}
                  icon={faPeopleGroup}
                />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoCollegialOrgans}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameCollegialOrgans}`}
                >
                  Общее собрание работников <br /> (Устав, стр. 9, пп.
                  3.11-3.13)
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardCollegialOrgans} ${classes.collegianOrganB}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyCollegialOrgans}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconCollegialOrgans}`}
              >
                <FontAwesomeIcon
                  className={classes.aboutStructureCardOtherIcon}
                  icon={faChalkboardUser}
                />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoCollegialOrgans}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameCollegialOrgans}`}
                >
                  Педагогический совет <br /> (Устав, стр. 10-11, пп. 3.14-3.20){" "}
                  <br />{" "}
                  <a target="_blank" href="/docs/44.pdf">
                    Положение о педагогическом совете
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3 className={`${classes.aboutStructureSubtitle}`}>
          Структурные подразределия
        </h3>
        <div
          className={`${classes.aboutStructureCards} ${classes.aboutStructureCardsOtherStructures}`}
        >
          <div
            className={`${classes.aboutStructureCard} ${classes.aboutStructureCardOtherStructures} ${classes.otherStructuresA}`}
          >
            <div
              className={`${classes.aboutStructureCardBody} ${classes.aboutStructureCardBodyOtherStructures}`}
            >
              <div
                className={`${classes.aboutStructureCardUserIcon} ${classes.aboutStructureCardUserIconOtherStructures}`}
              >
                <FontAwesomeIcon
                  className={classes.aboutStructureCardOtherIcon}
                  icon={faBuildingColumns}
                />
              </div>
              <div
                className={`${classes.aboutStructureCardUserInfo} ${classes.aboutStructureCardUserInfoOtherStructures}`}
              >
                <p
                  className={`${classes.aboutStructureCardUserInfoName} ${classes.aboutStructureCardUserInfoNameOtherStructures}`}
                >
                  Музей истории Терийок
                  <br />{" "}
                  <a target="_blank" href="/docs/45.pdf">
                    Положение о музее
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
