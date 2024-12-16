import classes from "./Courses.module.css";
import mainClasses from "../App.module.css";
import { coursesCardsData } from "./coursesCardsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Courses() {
  const [active, setActive] = useState(false);

  return (
    <section className={classes.courses}>
      <div className={classes.coursesContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/zddt-kiosk/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/zddt-kiosk/courses"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Образовательные программы
          </Link>
        </div>
        <div
          style={
            active ? { marginBottom: 60 + "px" } : { marginBottom: 10 + "px" }
          }
          className={classes.coursesHeader}
        >
          <h2 className={classes.coursesTitle}>Образовательные программы</h2>
        </div>
        <div className={classes.coursesCards}>
          {coursesCardsData.map((card) => (
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
                    {card.extraText.length > 1
                      ? `с ${card.extraText[0]} до
                        ${card.extraText[card.extraText.length - 1]} лет`
                      : `для ${card.extraText[0]} лет`}
                  </span>
                  {card.extraInfo &&
                    card.extraInfo.map((i, index) => (
                      <Tippy content={i.description} key={index} touch={true}>
                        <span
                          className={classes.coursesCardExtraText}
                          onClick={(e) => e.preventDefault()}
                        >
                          {i.text}
                        </span>
                      </Tippy>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
