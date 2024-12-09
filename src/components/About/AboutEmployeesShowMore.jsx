import { employeesData } from "./employeesData";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

export default function AboutEmployeesShowMore() {
  const params = useParams();

  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutEmployeesShowMore}>
      <div
        className={`${classes.aboutEmployeesShowMoreContainer} ${classes.aboutItemContainer}`}
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
          <Link to="/about/employees" className={mainClasses.navigationLink}>
            Руководство и педагогический состав
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            {
              employeesData[
                employeesData.indexOf(
                  employeesData.find((data) => data.name == params.employeeName)
                )
              ].name
            }
          </Link>
        </div>
        <h2 className={classes.aboutItemTitle}>
          Подробная информация о сотруднике{" "}
          <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
            {
              employeesData[
                employeesData.indexOf(
                  employeesData.find((data) => data.name == params.employeeName)
                )
              ].name
            }
          </span>
        </h2>
        <LightGallery>
          <img
            className={classes.aboutItemImage}
            src={
              employeesData[
                employeesData.indexOf(
                  employeesData.find((data) => data.name == params.employeeName)
                )
              ].image
            }
          />
        </LightGallery>
        <div className={classes.aboutItemColumns}>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="1" className={classes.aboutItemSubtitle}>
              <p>ФИО</p>
              <FontAwesomeIcon
                data-icon="1"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="1" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].name
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="2" className={classes.aboutItemSubtitle}>
              <p>Должность</p>
              <FontAwesomeIcon
                data-icon="2"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="2" className={classes.aboutItemDescription}>
              <p>
                {employeesData[
                  employeesData.indexOf(
                    employeesData.find(
                      (data) => data.name == params.employeeName
                    )
                  )
                ].job.join(", ")}
              </p>
            </div>
          </div>
          {employeesData[
            employeesData.indexOf(
              employeesData.find((data) => data.name == params.employeeName)
            )
          ].courses && (
            <div className={classes.aboutItemRow}>
              <div data-subtitle="3" className={classes.aboutItemSubtitle}>
                <p>Объединение</p>
                <FontAwesomeIcon
                  data-icon="3"
                  className={classes.aboutItemDropDownIcon}
                  icon={faArrowDown}
                />
              </div>
              <div
                data-description="3"
                className={classes.aboutItemDescription}
              >
                <p
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  {employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].courses.map((course) => (
                    <a key={course} target="_blank" href={`/courses/${course}`}>
                      {course}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          )}
          <div className={classes.aboutItemRow}>
            <div data-subtitle="4" className={classes.aboutItemSubtitle}>
              <p>Контакты</p>
              <FontAwesomeIcon
                data-icon="4"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="4" className={classes.aboutItemDescription}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <a
                  href={`tel:${
                    employeesData[
                      employeesData.indexOf(
                        employeesData.find(
                          (data) => data.name == params.employeeName
                        )
                      )
                    ].contacts[0]
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {
                    employeesData[
                      employeesData.indexOf(
                        employeesData.find(
                          (data) => data.name == params.employeeName
                        )
                      )
                    ].contacts[0]
                  }
                </a>
                <a
                  href={`mailto:${
                    employeesData[
                      employeesData.indexOf(
                        employeesData.find(
                          (data) => data.name == params.employeeName
                        )
                      )
                    ].contacts[1]
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {
                    employeesData[
                      employeesData.indexOf(
                        employeesData.find(
                          (data) => data.name == params.employeeName
                        )
                      )
                    ].contacts[1]
                  }
                </a>
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="5" className={classes.aboutItemSubtitle}>
              <p>Образование</p>
              <FontAwesomeIcon
                data-icon="5"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="5" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].educationLevel
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="6" className={classes.aboutItemSubtitle}>
              <p>Квалификация</p>
              <FontAwesomeIcon
                data-icon="6"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="6" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].qualification
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="7" className={classes.aboutItemSubtitle}>
              <p>Ученая степень</p>
              <FontAwesomeIcon
                data-icon="7"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="7" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].degree
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="8" className={classes.aboutItemSubtitle}>
              <p>Ученое звание</p>
              <FontAwesomeIcon
                data-icon="8"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="8" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].rank
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="9" className={classes.aboutItemSubtitle}>
              <p>Квалификационная категория</p>
              <FontAwesomeIcon
                data-icon="9"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="9" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].qualificationCategory
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="10" className={classes.aboutItemSubtitle}>
              <p>Общий стаж работы</p>
              <FontAwesomeIcon
                data-icon="10"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="10" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].totalWorkExperience
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="11" className={classes.aboutItemSubtitle}>
              <p>Стаж по должности</p>
              <FontAwesomeIcon
                data-icon="11"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="11" className={classes.aboutItemDescription}>
              <p>
                {
                  employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].currentPostWorkExperience
                }
              </p>
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="12" className={classes.aboutItemSubtitle}>
              <p>Курсы повышения квалификации</p>
              <FontAwesomeIcon
                data-icon="12"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="12" className={classes.aboutItemDescription}>
              {employeesData[
                employeesData.indexOf(
                  employeesData.find((data) => data.name == params.employeeName)
                )
              ].qualificationCourses.length
                ? employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].qualificationCourses.map((course) => (
                    <div
                      key={course.title}
                      className={classes.aboutItemDescriptionCourses}
                    >
                      <p>{course.title}</p>
                      <ul>
                        <li>{course.institution}</li>
                        <li>{course.courseDuration}</li>
                        <li>{course.courseEndDate}</li>
                      </ul>
                    </div>
                  ))
                : "Нет данных"}
            </div>
          </div>
          <div className={classes.aboutItemRow}>
            <div data-subtitle="13" className={classes.aboutItemSubtitle}>
              <p> Профессиональная переподготовка</p>
              <FontAwesomeIcon
                data-icon="13"
                className={classes.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div data-description="13" className={classes.aboutItemDescription}>
              {employeesData[
                employeesData.indexOf(
                  employeesData.find((data) => data.name == params.employeeName)
                )
              ].retrainingCourses.length
                ? employeesData[
                    employeesData.indexOf(
                      employeesData.find(
                        (data) => data.name == params.employeeName
                      )
                    )
                  ].retrainingCourses.map((course) => (
                    <div
                      key={course.title}
                      className={classes.aboutItemDescriptionCourses}
                    >
                      <p>{course.title}</p>
                      <ul>
                        <li>{course.institution}</li>
                        <li>{course.specialization}</li>
                        <li>{course.qualification}</li>
                        <li>{course.courseEndDate}</li>
                      </ul>
                    </div>
                  ))
                : "Нет данных"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
