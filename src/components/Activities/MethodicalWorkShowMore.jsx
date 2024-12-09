import { employeesData } from "../About/employeesData";
import classes from "./Activities.module.css";
import mainClasses from "../App.module.css";
import aboutClasses from "../About/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "../About/handleDropDown";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MethodicalWorkShowMore() {
  const params = useParams();

  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.methodicalWorkShowMore}>
      <div className={classes.methodicalWorkShowMoreContainer}>
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
            to="/activities/methodical-work"
            className={mainClasses.navigationLink}
          >
            Методическая работа
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
        <h2 className={aboutClasses.aboutItemTitle}>
          Методические разработки сотрудника{" "}
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
        <div className={aboutClasses.aboutItemColumns}>
          <div className={aboutClasses.aboutItemRow}>
            <div data-subtitle="1" className={aboutClasses.aboutItemSubtitle}>
              <p>Методические разработки</p>
              <FontAwesomeIcon
                data-icon="1"
                className={aboutClasses.aboutItemDropDownIcon}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={aboutClasses.aboutItemDescription}
            >
              {employeesData[
                employeesData.indexOf(
                  employeesData.find((data) => data.name == params.employeeName)
                )
              ].methods.map((method, index) => (
                <p key={index}>
                  <a target="_blank" href={method.link}>
                    {method.title}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
