import classes from "./Courses.module.css";
import mainClasses from "../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { summerCoursesCardsData } from "./summerCoursesCardsData";
import handleActive from "./handleActive";
import handleResize from "./handleResize";
import { useEffect } from "react";

export default function CoursesShowMore() {
  const params = useParams();
  useEffect(() => {
    document.documentElement.addEventListener("click", handleActive);
    return () =>
      document.documentElement.removeEventListener("click", handleActive);
  }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.coursesShowMore}>
      <div className={classes.coursesShowMoreContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link to="/summer-courses" className={mainClasses.navigationLink}>
            Летние краткосрочные программы
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            {
              summerCoursesCardsData[
                summerCoursesCardsData.indexOf(
                  summerCoursesCardsData.find(
                    (data) => data.title == params.coursTitle
                  )
                )
              ].title
            }
          </Link>
        </div>
        <div className={classes.coursesShowMoreCards}>
          {summerCoursesCardsData[
            summerCoursesCardsData.indexOf(
              summerCoursesCardsData.find(
                (data) => data.title == params.coursTitle
              )
            )
          ].programms.map((programm, index) => (
            <div key={index} className={classes.coursesShowMoreCard}>
              <div className={classes.coursesShowMoreCardBody}>
                <h3 className={classes.coursesShowMoreCardTitle}>
                  {programm.programmName}
                </h3>
                <div className={classes.coursesShowMoreCardTeacherIcons}>
                  {programm.teacher.teacherPic.map((pic, index) => (
                    <div
                      key={index}
                      className={classes.coursesShowMoreCardTeacherIcon}
                    >
                      <img loading="lazy" src={pic} alt="" />
                    </div>
                  ))}
                </div>
                <p className={classes.coursesShowMoreCardTeacherName}>
                  <span>
                    Преподавател
                    {programm.teacher.teacherName.length > 1 ? "и" : "ь"}:
                  </span>{" "}
                  {programm.teacher.teacherName.join(", ")}
                </p>
                <p className={classes.coursesShowMoreCardProgrammCategory}>
                  <span>Направленность программы:</span> {programm.category}
                </p>
                <p className={classes.coursesShowMoreCardProgrammDuration}>
                  <span>Объем программы:</span> {programm.duration}
                </p>
                <p className={classes.coursesShowMoreCardProgrammPrice}>
                  <span>Стоимость обучения:</span> {programm.price}
                </p>
                <div className={classes.coursesShowMoreCardProgrammDescription}>
                  {programm.description.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                  <div className={classes.coursesShowMoreCardProgrammSchedule}>
                    <div
                      className={
                        classes.coursesShowMoreCardProgrammScheduleColumns
                      }
                    >
                      {programm.groups.map((group) => (
                        <div
                          key={group.id}
                          data-group={group.id}
                          className={
                            classes.coursesShowMoreCardProgrammScheduleColumn
                          }
                        >
                          <FontAwesomeIcon
                            data-group={group.id}
                            className={
                              classes.coursesShowMoreCardProgrammScheduleColumnIcon
                            }
                            icon={faCaretDown}
                          />
                          {group.groupName}
                        </div>
                      ))}
                    </div>
                    <div
                      className={
                        classes.coursesShowMoreCardProgrammScheduleRows
                      }
                    >
                      {programm.groups.map((group) => (
                        <div
                          key={group.id}
                          className={
                            classes.coursesShowMoreCardProgrammScheduleRowsWrapper
                          }
                        >
                          <div
                            className={
                              classes.coursesShowMoreCardProgrammScheduleRow
                            }
                            data-group={group.id}
                          >
                            {group.startDate && (
                              <p
                                className={
                                  classes.coursesShowMoreCardProgrammScheduleYear
                                }
                              >
                                <span>Старт занятий</span>: {group?.startDate}
                              </p>
                            )}
                            <p
                              className={
                                classes.coursesShowMoreCardProgrammScheduleYear
                              }
                            >
                              <span>Год обучения</span>: {group.year}
                            </p>
                            <p
                              className={
                                classes.coursesShowMoreCardProgrammScheduleAge
                              }
                            >
                              <span>Возраст участников</span>: {group.age}
                            </p>
                            <div
                              className={
                                classes.coursesShowMoreCardProgrammScheduleTable
                              }
                            >
                              <div
                                className={
                                  classes.coursesShowMoreCardProgrammScheduleTableDays
                                }
                              >
                                <div
                                  className={
                                    classes.coursesShowMoreCardProgrammScheduleTableDay
                                  }
                                >
                                  Понедельник
                                  <p
                                    className={
                                      classes.coursesShowMoreCardProgrammScheduleTableTime
                                    }
                                  >
                                    {group.schedule.monday}
                                  </p>
                                </div>
                                <div
                                  className={
                                    classes.coursesShowMoreCardProgrammScheduleTableDay
                                  }
                                >
                                  Вторник
                                  <p
                                    className={
                                      classes.coursesShowMoreCardProgrammScheduleTableTime
                                    }
                                  >
                                    {group.schedule.tuesday}
                                  </p>
                                </div>
                                <div
                                  className={
                                    classes.coursesShowMoreCardProgrammScheduleTableDay
                                  }
                                >
                                  Среда
                                  <p
                                    className={
                                      classes.coursesShowMoreCardProgrammScheduleTableTime
                                    }
                                  >
                                    {group.schedule.wednesday}
                                  </p>
                                </div>
                                <div
                                  className={
                                    classes.coursesShowMoreCardProgrammScheduleTableDay
                                  }
                                >
                                  Четверг
                                  <p
                                    className={
                                      classes.coursesShowMoreCardProgrammScheduleTableTime
                                    }
                                  >
                                    {group.schedule.thursday}
                                  </p>
                                </div>
                                <div
                                  className={
                                    classes.coursesShowMoreCardProgrammScheduleTableDay
                                  }
                                >
                                  Пятница
                                  <p
                                    className={
                                      classes.coursesShowMoreCardProgrammScheduleTableTime
                                    }
                                  >
                                    {group.schedule.friday}
                                  </p>
                                </div>
                                <div
                                  className={
                                    classes.coursesShowMoreCardProgrammScheduleTableDay
                                  }
                                >
                                  Суббота
                                  <p
                                    className={
                                      classes.coursesShowMoreCardProgrammScheduleTableTime
                                    }
                                  >
                                    {group.schedule.saturday}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <a
                              href={`${programm.signInButton}`}
                              target="_blank"
                              className={
                                classes.coursesShowMoreCardProgrammScheduleSignInButton
                              }
                            >
                              ЗАПИСАТЬСЯ
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}