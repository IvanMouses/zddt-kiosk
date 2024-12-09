import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { employeesData } from "./employeesData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutEmployees() {
  return (
    <div className={classes.aboutEmployees}>
      <div
        className={`${classes.aboutEmployeesContainer} ${classes.aboutItemContainer}`}
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
            to="/about/employees"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Руководство и педагогический состав
          </Link>
        </div>
        <h2
          className={`${classes.aboutEmployeesTitle} ${classes.aboutItemTitle}`}
        >
          Руководство и педагогический состав
        </h2>
        <h3 className={classes.aboutEmployeesSubtitle}>Администрация</h3>
        <div
          className={`${classes.aboutEmployeesCards} ${classes.aboutEmployeesCardsAdmins}`}
        >
          {employeesData
            .filter((employee) => employee.employeeCategory === "admin")
            .map((admin) => (
              <Link
                to={`${admin.name}`}
                key={admin.name}
                className={classes.aboutEmployeesCard}
              >
                <div className={classes.aboutEmployeesCardBody}>
                  <div className={classes.aboutEmployeesCardIcon}>
                    <img loading="lazy" src={admin.image} />
                  </div>
                  <div className={classes.aboutEmployeesCardUserInfo}>
                    <p className={classes.aboutEmployeesCardUserName}>
                      {admin.name}
                    </p>
                    <p className={classes.aboutEmployeesCardUserJob}>
                      {admin.job.join(", ")}
                    </p>
                  </div>
                  <div className={classes.aboutEmployeesCardUserContacts}>
                    {admin.contacts.map((contact, index) => (
                      <p key={index}>{contact}</p>
                    ))}
                  </div>
                  <div className={classes.aboutEmployeesCardUserSchedule}>
                    {admin.schedule.map((schedule, index) => (
                      <p key={index}>{schedule}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <h3 className={classes.aboutEmployeesSubtitle}>Специалисты</h3>
        <div
          className={`${classes.aboutEmployeesCards} ${classes.aboutEmployeesCardsSpecialists}`}
        >
          {employeesData
            .filter((employee) => employee.employeeCategory === "specialist")
            .map((specialist) => (
              <Link
                to={`${specialist.name}`}
                key={specialist.name}
                className={classes.aboutEmployeesCard}
              >
                <div className={classes.aboutEmployeesCardBody}>
                  <div className={classes.aboutEmployeesCardIcon}>
                    <img loading="lazy" src={specialist.image} />
                  </div>
                  <div className={classes.aboutEmployeesCardUserInfo}>
                    <p className={classes.aboutEmployeesCardUserName}>
                      {specialist.name}
                    </p>
                    <p className={classes.aboutEmployeesCardUserJob}>
                      {specialist.job.join(", ")}
                    </p>
                  </div>
                  <div className={classes.aboutEmployeesCardUserContacts}>
                    {specialist.contacts.map((contact, index) => (
                      <p key={index}>{contact}</p>
                    ))}
                  </div>
                  <div className={classes.aboutEmployeesCardUserSchedule}>
                    {specialist.schedule.map((schedule, index) => (
                      <p key={index}>{schedule}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <h3 className={classes.aboutEmployeesSubtitle}>
          Методисты, прочий педагогический персонал
        </h3>
        <div
          className={`${classes.aboutEmployeesCards} ${classes.aboutEmployeesCardsMethodists}`}
        >
          {employeesData
            .filter((employee) => employee.employeeCategory === "methodist")
            .map((methodist) => (
              <Link
                to={`${methodist.name}`}
                key={methodist.name}
                className={classes.aboutEmployeesCard}
              >
                <div className={classes.aboutEmployeesCardBody}>
                  <div className={classes.aboutEmployeesCardIcon}>
                    <img loading="lazy" src={methodist.image} />
                  </div>
                  <div className={classes.aboutEmployeesCardUserInfo}>
                    <p className={classes.aboutEmployeesCardUserName}>
                      {methodist.name}
                    </p>
                    <p className={classes.aboutEmployeesCardUserJob}>
                      {methodist.job.join(", ")}
                    </p>
                  </div>
                  <div className={classes.aboutEmployeesCardUserContacts}>
                    {methodist.contacts.map((contact, index) => (
                      <p key={index}>{contact}</p>
                    ))}
                  </div>
                  <div className={classes.aboutEmployeesCardUserSchedule}>
                    {methodist.schedule.map((schedule, index) => (
                      <p key={index}>{schedule}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <h3 className={classes.aboutEmployeesSubtitle}>
          Педагоги дополнительного образования
        </h3>
        <div
          className={`${classes.aboutEmployeesCards} ${classes.aboutEmployeesCardsTeachers}`}
        >
          {employeesData
            .filter((employee) => employee.employeeCategory === "teacher")
            .map((teacher) => (
              <Link
                to={`${teacher.name}`}
                key={teacher.name}
                className={classes.aboutEmployeesCard}
              >
                <div className={classes.aboutEmployeesCardBody}>
                  <div className={classes.aboutEmployeesCardIcon}>
                    <img loading="lazy" src={teacher.image} />
                  </div>
                  <div className={classes.aboutEmployeesCardUserInfo}>
                    <p className={classes.aboutEmployeesCardUserName}>
                      {teacher.name}
                    </p>
                    <p className={classes.aboutEmployeesCardUserJob}>
                      {teacher.job.join(", ")}
                    </p>
                  </div>
                  <div className={classes.aboutEmployeesCardUserContacts}>
                    {teacher.contacts.map((contact, index) => (
                      <p key={index}>{contact}</p>
                    ))}
                  </div>
                  <div className={classes.aboutEmployeesCardUserSchedule}>
                    {teacher.schedule.map((schedule, index) => (
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
