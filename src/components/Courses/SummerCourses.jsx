import classes from "./Courses.module.css";
import mainClasses from "../App.module.css";
import headerClasses from "../Header/Header.module.css";
import { summerCoursesCardsData } from "./summerCoursesCardsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCalendarDays,
  faAngleDown,
  faXmark,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Courses() {
  const [active, setActive] = useState(false);
  const [ageFilter, setAgeFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categoryFilterDropDown, setCategoryFilterDropDown] = useState(false);
  const filter = {
    age: ageFilter,
    category: categoryFilter,
  };
  const [showingCourseCards, setShowingCourseCards] = useState(0);
  useEffect(() => {
    function handleActive() {
      if (
        scheduleElement.getBoundingClientRect().top <=
        headerElement.getBoundingClientRect().bottom
      ) {
        setActive(true);
        scheduleElement.style.top =
          headerElement.getBoundingClientRect().bottom + "px";
      }
      if (document.documentElement.clientWidth <= 425) {
        if (document.documentElement.scrollTop <= 200) {
          setActive(false);
        }
      } else if (document.documentElement.clientWidth > 425) {
        if (
          document.documentElement.scrollTop <=
          headerElement.getBoundingClientRect().height
        ) {
          setActive(false);
        }
      }
    }
    const scheduleElement = document.querySelector(
      `.${classes.coursesSchedule}`
    );
    const headerElement = document.querySelector(`.${headerClasses.header}`);

    window.addEventListener("scroll", handleActive);
    return () => {
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  useEffect(() => {
    function activeFilters(e) {
      if (e.target.classList.contains(`${classes.fiterDescription}`)) {
        document
          .querySelector(`.${classes.filters}`)
          .classList.toggle(`${classes.active}`);
        document
          .querySelector(`.${classes.filtersIcon}`)
          .classList.toggle(`${classes.active}`);
      }
    }
    document.documentElement.addEventListener("click", activeFilters);
    return () => {
      document.documentElement.removeEventListener("click", activeFilters);
    };
  }, []);

  useEffect(() => {
    function handleCategoryFilter(e) {
      if (
        e.target.classList.contains(`${classes.filterProgrammCategoryOption}`)
      ) {
        setCategoryFilter(e.target.textContent);
      }
    }
    document.documentElement.addEventListener("click", handleCategoryFilter);
    return () => {
      document.documentElement.removeEventListener(
        "click",
        handleCategoryFilter
      );
    };
  }, []);

  useEffect(() => {
    function handleCategoryFilterDropdown(e) {
      if (
        e.target.classList.contains(`${classes.filterProgrammCategory}`) ||
        e.target.classList.contains(`${classes.filterProgrammCategoryIcon}`) ||
        e.target.classList.contains(
          `${classes.filterProgrammCategoryIconsContainer}`
        )
      ) {
        setCategoryFilterDropDown(true);
        document
          .querySelector(`.${classes.filterProgrammCategoryIcon}`)
          .classList.add(`${classes.active}`);
      } else {
        setCategoryFilterDropDown(false);
        document
          .querySelector(`.${classes.filterProgrammCategoryIcon}`)
          .classList.remove(`${classes.active}`);
      }
    }
    document.documentElement.addEventListener(
      "click",
      handleCategoryFilterDropdown
    );
    return () => {
      document.documentElement.removeEventListener(
        "click",
        handleCategoryFilterDropdown
      );
    };
  }, []);

  useEffect(() => {
    setShowingCourseCards(
      document.querySelector(`.${classes.coursesCards}`).children.length
    );
  }, [ageFilter, categoryFilter]);

  return (
    <section className={classes.courses}>
      <div className={classes.coursesContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/summer-courses"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Летние краткосрочные программы
          </Link>
        </div>
        <div
          style={
            active ? { marginBottom: 60 + "px" } : { marginBottom: 10 + "px" }
          }
          className={classes.coursesHeader}
        >
          <h2 className={classes.coursesTitle}>
            Летние краткосрочные программы
          </h2>
          <div className={classes.filterContainer}>
            <p className={classes.fiterDescription}>Фильтры</p>
            <div className={classes.filtersIconWrapper}>
              <FontAwesomeIcon
                icon={faSliders}
                className={classes.filtersIcon}
                onClick={() => {
                  document
                    .querySelector(`.${classes.filters}`)
                    .classList.toggle(`${classes.active}`);
                  document
                    .querySelector(`.${classes.filtersIcon}`)
                    .classList.toggle(`${classes.active}`);
                }}
              />
              <span className={classes.activeFiltersCounter}>
                {ageFilter && categoryFilter
                  ? 2
                  : categoryFilter
                  ? 1
                  : ageFilter
                  ? 1
                  : ""}
              </span>
            </div>

            <div className={classes.filters}>
              <div className={classes.filterAge}>
                <input
                  onChange={(e) => {
                    setAgeFilter(Number(e.target.value));
                    if (e.target.value.startsWith("0")) {
                      e.target.value = "";
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.target.blur();
                    }
                    if (
                      ["-"].includes(e.key) ||
                      ["+"].includes(e.key) ||
                      [","].includes(e.key) ||
                      ["."].includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  name="ageFilter"
                  type="number"
                  className={classes.filterAgeInput}
                  placeholder="Укажите возраст"
                />
                <div className={classes.filterAgeIconsContainer}>
                  {ageFilter ? (
                    <FontAwesomeIcon
                      onClick={() => {
                        setAgeFilter("");
                        document.querySelector(
                          `.${classes.filterAgeInput}`
                        ).value = "";
                      }}
                      icon={faXmark}
                      className={classes.filterAgeResetFilter}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={classes.filterProgrammCategory}>
                <input
                  tabIndex="-1"
                  defaultValue={categoryFilter}
                  className={classes.filterProgrammCategoryInput}
                  type="text"
                  placeholder="Направленность"
                  name="categoryFilter"
                />
                <ul
                  className={
                    categoryFilterDropDown
                      ? `${classes.filterProgrammCategorySelect} ${classes.active}`
                      : `${classes.filterProgrammCategorySelect}`
                  }
                >
                  <li className={classes.filterProgrammCategoryOption}>
                    Художественная
                  </li>
                  <li className={classes.filterProgrammCategoryOption}>
                    Техническая
                  </li>
                  <li className={classes.filterProgrammCategoryOption}>
                    Социально-гуманитарная
                  </li>
                  <li className={classes.filterProgrammCategoryOption}>
                    Физкультурно-спортивная
                  </li>
                  <li className={classes.filterProgrammCategoryOption}>
                    Естественнонаучная
                  </li>
                </ul>
                <div className={classes.filterProgrammCategoryIconsContainer}>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={classes.filterProgrammCategoryIcon}
                    style={
                      categoryFilter
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  />
                  {categoryFilter && (
                    <FontAwesomeIcon
                      onClick={() => setCategoryFilter(null)}
                      icon={faXmark}
                      className={classes.filterProgrammCategoryResetFilter}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          href="/docs/schedule_summer.pdf"
          className={
            active
              ? `${classes.coursesSchedule} ${classes.active}`
              : `${classes.coursesSchedule}`
          }
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            className={classes.coursesScheduleIcon}
          />
          <p>Расписание занятий</p>
        </a>
        {showingCourseCards ? null : (
          <div className={classes.coursesCardsMissingPage}>
            <img
              className={classes.coursesCardsMissingPageImg}
              src="/img/missing-page-cat.png"
            ></img>
            По вашему запросу ничего не найдено...
          </div>
        )}
        <div className={classes.coursesCards}>
          {!filter.age && !filter.category
            ? summerCoursesCardsData.map((card) => (
                <Link
                  to={card.title}
                  key={card.title}
                  className={classes.coursesCard}
                >
                  <div className={classes.coursesCardBody}>
                    <div className={classes.coursesCardImage}>
                      <img
                        loading="lazy"
                        src={card.image.src}
                        alt=""
                        className={classes.coursesCardPicture}
                      />
                    </div>
                    <h3 className={classes.coursesCardTitle}>{card.title}</h3>
                    <div className={classes.coursesCardExtra}>
                      <span className={classes.coursesCardExtraText}>
                        с {card.extraText[0]} до{" "}
                        {card.extraText[card.extraText.length - 1]} лет
                      </span>
                      {card.extraMonth && (
                        <span className={classes.coursesCardExtraText}>
                          {card?.extraMonth}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))
            : filter.age && !filter.category
            ? summerCoursesCardsData
                .filter((data) => data.extraText.includes(filter.age))
                .map((card) => (
                  <Link
                    to={card.title}
                    key={card.title}
                    className={classes.coursesCard}
                  >
                    <div className={classes.coursesCardBody}>
                      <div className={classes.coursesCardImage}>
                        <img
                          loading="lazy"
                          src={card.image.src}
                          alt=""
                          className={classes.coursesCardPicture}
                        />
                      </div>
                      <h3 className={classes.coursesCardTitle}>{card.title}</h3>
                      <div className={classes.coursesCardExtra}>
                        <span className={classes.coursesCardExtraText}>
                          с {card.extraText[0]} до{" "}
                          {card.extraText[card.extraText.length - 1]} лет
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
            : !filter.age && filter.category
            ? summerCoursesCardsData
                .filter((data) => data.category === filter.category)
                .map((card) => (
                  <Link
                    to={card.title}
                    key={card.title}
                    className={classes.coursesCard}
                  >
                    <div className={classes.coursesCardBody}>
                      <div className={classes.coursesCardImage}>
                        <img
                          loading="lazy"
                          src={card.image.src}
                          alt=""
                          className={classes.coursesCardPicture}
                        />
                      </div>
                      <h3 className={classes.coursesCardTitle}>{card.title}</h3>
                      <div className={classes.coursesCardExtra}>
                        <span className={classes.coursesCardExtraText}>
                          с {card.extraText[0]} до{" "}
                          {card.extraText[card.extraText.length - 1]} лет
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
            : summerCoursesCardsData
                .filter(
                  (data) =>
                    data.extraText.includes(filter.age) &&
                    data.category === filter.category
                )
                .map((card) => (
                  <Link
                    to={card.title}
                    key={card.title}
                    className={classes.coursesCard}
                  >
                    <div className={classes.coursesCardBody}>
                      <div className={classes.coursesCardImage}>
                        <img
                          loading="lazy"
                          src={card.image.src}
                          alt=""
                          className={classes.coursesCardPicture}
                        />
                      </div>
                      <h3 className={classes.coursesCardTitle}>{card.title}</h3>
                      <div className={classes.coursesCardExtra}>
                        <span className={classes.coursesCardExtraText}>
                          с {card.extraText[0]} до{" "}
                          {card.extraText[card.extraText.length - 1]} лет
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
        </div>
      </div>
    </section>
  );
}