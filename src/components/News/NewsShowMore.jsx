// import { lazy } from "react";
import classes from "./News.module.css";
import mainClasses from "../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// const NewsGallery = lazy(() => import("./NewsGallery"));
import { newsItemsData } from "./newsItemsData";
import { useParams } from "react-router-dom";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import { useEffect, useRef } from "react";

export default function NewsShowMore() {
  const newsCardTextRef = useRef(null);
  const params = useParams();
  useEffect(() => {
    newsItemsData[
      newsItemsData.indexOf(
        newsItemsData.find((data) => data.title == params.newsTitle)
      )
    ].text.map((p) => {
      newsCardTextRef.current.insertAdjacentHTML("beforeend", `<p>${p}</p>`);
    });
  }, []);

  return (
    <div className={classes.newsShowMore}>
      <div
        className={`${classes.newsShowMoreContainer} ${classes.newsContainer}`}
      >
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link to="/news" className={mainClasses.navigationLink}>
            Новости
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            {
              newsItemsData[
                newsItemsData.indexOf(
                  newsItemsData.find((data) => data.title == params.newsTitle)
                )
              ].title
            }
          </Link>
        </div>
        <div className={`${classes.newsCard} ${classes.showMore}`}>
          <div className={`${classes.newsCardBody} ${classes.showMore}`}>
            <h3 className={`${classes.newsCardTitle} ${classes.showMore}`}>
              {
                newsItemsData[
                  newsItemsData.indexOf(
                    newsItemsData.find((data) => data.title == params.newsTitle)
                  )
                ].title
              }
            </h3>
            <div
              ref={newsCardTextRef}
              className={`${classes.newsCardText} ${classes.showMore}`}
            ></div>
            <LightGallery elementClassNames={classes.newsGallery}>
              {newsItemsData[
                newsItemsData.indexOf(
                  newsItemsData.find((data) => data.title == params.newsTitle)
                )
              ].image.gallery.map((image, index) => (
                <a
                  className={classes.newsGalleryImageContainer}
                  key={index}
                  href={image.src}
                >
                  <img loading="lazy" src={image.src} alt="" />
                </a>
              ))}
            </LightGallery>
            <hr style={{ maxWidth: "100%", margin: "0" }} />
            <div className={`${classes.newsCardDate} ${classes.showMore}`}>
              {
                newsItemsData[
                  newsItemsData.indexOf(
                    newsItemsData.find((data) => data.title == params.newsTitle)
                  )
                ].date
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
