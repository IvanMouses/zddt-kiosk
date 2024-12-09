import classes from "./Main.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={classes.mainHero}>
      <div className={classes.mainHeroContainer}>
        <h2 className={classes.mainHeroTitle}>
          Набор в группы 2024-2025 года обучения
        </h2>
        <p className={classes.mainHeroText}>
          Зеленогорский дом детского творчества объявляет набор на новый учебный
          год! Нажав на кнопку СПИСОК ПРОГРАММ, вы сможете увидеть доступные для
          записи объединения. С полным списком программ можно ознакомиться,
          нажав на кнопку РАСПИСАНИЕ ЗАНЯТИЙ
        </p>
        <div className={classes.heroButtonsContainer}>
          <Link to="/courses" className={classes.heroButton}>
            Список программ
          </Link>
          <a
            target="_blank"
            href="/docs/schedule.pdf"
            className={classes.heroButton}
          >
            Расписание занятий
          </a>
        </div>
      </div>
    </div>
  );
}
