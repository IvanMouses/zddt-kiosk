import classes from "./News.module.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function NewsItem({ image, title, text, date }) {
  const newsCardTextRef = useRef(null);
  useEffect(() => {
    text.map((p) => {
      newsCardTextRef.current.insertAdjacentHTML("beforeend", `<p>${p}</p>`);
    });
  }, []);

  return (
    <>
      <div className={classes.newsCard}>
        <Link to={`/news/${title}`} className={classes.newsCardImage}>
          <img
            loading="lazy"
            className={classes.newsCardImg}
            src={image.src}
            alt={image.alt}
          />
        </Link>
        <div className={classes.newsCardBody}>
          <h3 className={classes.newsCardTitle}>{title}</h3>
          <div ref={newsCardTextRef} className={classes.newsCardText}></div>
          <Link to={`/news/${title}`} className={classes.newsCardReadMore}>
            ПОКАЗАТЬ БОЛЬШЕ
          </Link>
          <hr style={{ maxWidth: "100%", margin: "0" }} />
          <div className={classes.newsCardDate}>{date}</div>
        </div>
      </div>
    </>
  );
}
