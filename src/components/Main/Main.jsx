import { newsItemsData } from "../News/newsItemsData";
import { useState, useEffect, lazy } from "react";
import classes from "./Main.module.css";
import newsClasses from "../News/News.module.css";
import NewsItem from "../News/NewsItem";

export default function Main() {
  const [showingNews, setShowingNews] = useState(6);
  function handleShowingNews() {
    document.documentElement.clientWidth <= 425
      ? setShowingNews(2)
      : setShowingNews(6);
  }
  useEffect(() => {
    handleShowingNews();
    window.addEventListener("resize", handleShowingNews);
    return () => {
      window.removeEventListener("resize", handleShowingNews);
    };
  }, [showingNews]);

  return (
    <div className={classes.main}>
      <div className={classes.mainRecentNews}>
        <div className={classes.mainRecentNewsContainer}>
          <h2 className={classes.mainRecentNewsTitle}>Последние новости</h2>
          <div className={newsClasses.newsCards}>
            {newsItemsData
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
        </div>
      </div>
    </div>
  );
}
