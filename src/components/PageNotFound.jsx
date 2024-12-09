import { Link } from "react-router-dom";
import classes from "./App.module.css";

export default function PageNonFound() {
  return (
    <div className={classes.pageNotFound}>
      <div className={classes.pageNotFoundContainer}>
        <img
          loading="lazy"
          className={classes.pageNotFoundImg}
          src="/img/missing-page-cat.png"
        />
        <p>
          Страница не найдена...{" "}
          <Link to="/" className={classes.pageNotFoundBackHomeLink}>
            Вернуться на главную?
          </Link>
        </p>
      </div>
    </div>
  );
}
