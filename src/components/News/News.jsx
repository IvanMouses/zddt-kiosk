import { useState, useEffect, lazy } from "react";
import classes from "./News.module.css";
import mainClasses from "../App.module.css";
const NewsItem = lazy(() => import("./NewsItem.jsx"));
import { newsItemsData } from "./newsItemsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function News() {
  const [showingNews, setShowingNews] = useState(6);
  const [currentShowingNews, setCurrentShowingNews] = useState(6);
  function handleShowingNews() {
    document.documentElement.clientWidth <= 425
      ? (setShowingNews(2), setCurrentShowingNews(2))
      : (setShowingNews(6), setCurrentShowingNews(6));
  }
  useEffect(() => {
    handleShowingNews();
  }, []);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={classes.news}>
      <div className={classes.newsContainer}>
        <div className={mainClasses.navigation}>
          <Link to="/zddt-kiosk" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/zddt-kiosk/news"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Новости
          </Link>
        </div>
        <div className={classes.newsHeader}>
          <h2 className={classes.newsTitle}>Новости</h2>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.target.blur();
              }
            }}
            placeholder="Поиск по новостям"
            type="text"
            className={classes.newsSearchInput}
            name="newsSearchInput"
          />
        </div>
        {newsItemsData
          .filter(
            (newsItem) =>
              newsItem.text
                .join(" ")
                .toLowerCase()
                .includes(inputValue.toLowerCase()) ||
              newsItem.title.toLowerCase().includes(inputValue.toLowerCase()) ||
              newsItem.date.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((card, index) => (
            <NewsItem
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
              date={card.date}
            />
          )).length === 0 && (
          <div className={classes.newsMissingItem}>
            <img
              className={classes.newsMissingItemImg}
              src="/img/missing-page-cat.png"
            ></img>
            По вашему запросу ничего не найдено...
          </div>
        )}
        <div className={classes.newsCards}>
          {inputValue
            ? newsItemsData
                .filter(
                  (newsItem) =>
                    newsItem.text
                      .join(" ")
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()) ||
                    newsItem.title
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()) ||
                    newsItem.date
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                )
                .map((card, index, cards) => (
                  <NewsItem
                    key={index}
                    image={card.image}
                    title={card.title}
                    text={card.text}
                    date={card.date}
                  />
                ))
            : newsItemsData
                .map((card, index) => (
                  <NewsItem
                    key={index}
                    image={card.image}
                    title={card.title}
                    text={card.text}
                    date={card.date}
                  />
                ))
                .slice(0, showingNews)}
        </div>
        {!inputValue && (
          <button
            onClick={() => setShowingNews(showingNews + currentShowingNews)}
            className={classes.newsCardsShowMoreNews}
            type="button"
          >
            Показать больше новостей
          </button>
        )}
      </div>
    </div>
  );
}
