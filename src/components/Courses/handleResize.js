import classes from "./Courses.module.css";

export default function handleResize() {
  const column = document.querySelectorAll(
    `.${classes.coursesShowMoreCardProgrammScheduleColumn}`
  );
  const row = document.querySelectorAll(
    `.${classes.coursesShowMoreCardProgrammScheduleRow}`
  );
  if (document.documentElement.clientWidth <= 425) {
    column.forEach((column, index) => {
      column.insertAdjacentElement("afterend", row[index]);
    });
  } else {
    document
      .querySelectorAll(
        `.${classes.coursesShowMoreCardProgrammScheduleRowsWrapper}`
      )
      .forEach((wrapper, index) => {
        wrapper.insertAdjacentElement("afterend", row[index]);
      });
  }
}
