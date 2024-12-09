import classes from "./Activities.module.css";
import mainClasses from "../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { lazy } from "react";
const EventCalendar = lazy(() => import("./EventCalendar"));

export default function OurEvents() {
  return (
    <div className={classes.eventCalendar}>
      <div className={classes.eventCalendarContainer}>
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
            to="/activities/events"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Календарь событий
          </Link>
        </div>
        <h2 className={classes.eventCalendarTitle}>Календарь событий</h2>
        <EventCalendar />
      </div>
    </div>
  );
}
