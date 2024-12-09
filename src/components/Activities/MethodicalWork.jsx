import classes from "./Activities.module.css";
import mainClasses from "../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { employeesData } from "../About/employeesData";

export default function MethodicalWork() {
  return (
    <div className={classes.methodicalWork}>
      <div className={classes.methodicalWorkContainer}>
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
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Методическая работа
          </Link>
        </div>
        <h2 className={classes.methodicalWorkTitle}>Методическая работа</h2>
        <div className={classes.methodicalWorkCards}>
          {employeesData
            .filter((employee) => employee.methods)
            .map((methodist) => (
              <Link
                to={`${methodist.name}`}
                key={methodist.name}
                className={classes.methodicalWorkCard}
              >
                <div className={classes.methodicalWorkCardBody}>
                  <div className={classes.methodicalWorkCardIcon}>
                    <img loading="lazy" src={methodist.image} />
                  </div>
                  <div className={classes.methodicalWorkCardUserInfo}>
                    <p className={classes.methodicalWorkCardUserName}>
                      {methodist.name}
                    </p>
                    <p className={classes.methodicalWorkCardUserJob}>
                      {methodist.job.join(", ")}
                    </p>
                  </div>
                  <div className={classes.methodicalWorkCardUserContacts}>
                    {methodist.contacts.map((contact, index) => (
                      <p key={index}>{contact}</p>
                    ))}
                  </div>
                  <div className={classes.methodicalWorkCardUserSchedule}>
                    {methodist.schedule.map((schedule, index) => (
                      <p key={index}>{schedule}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
