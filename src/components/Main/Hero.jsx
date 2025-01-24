import classes from "./Main.module.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

const heroImages = [{ src: "./img/Hero/1.jpg" }, { src: "./img/Hero/2.jpg" }];

export default function Hero() {
  return (
    <div className={classes.mainHero}>
      <div className={classes.mainHeroContainer}>
        <h2 className={classes.mainHeroTitle}>
          25 января в 15:00 мы приглашаем детей и родителей на спектакль
          «Кукла», посвящённый 81 годовщине полного освобождения Ленинграда от
          фашистской блокады
        </h2>
        <LightGallery
          download={false}
          elementClassNames={classes.mainHeroGallery}
        >
          {heroImages.map((image, index) => (
            <a
              className={classes.mainHeroGalleryImageContainer}
              key={index}
              href={image.src}
            >
              <img src={image.src} alt="" />
            </a>
          ))}
        </LightGallery>
        <div className={classes.mainHeroText}>
          <p style={{ textAlign: "left" }}>
            С 14:00 мы ждем вас на мастер-классы: «Узор непокоренного города», «
            Журавли», «Значок в технике линогравюра»
          </p>
          <p style={{ textAlign: "left" }}>
            Предварительная запись на мероприятие обязательна! Количество мест
            ограничено!
          </p>
          <p>
            Записаться можно по телефону:{" "}
            <span style={{ fontWeight: 600 }}>
              89219800580 - Александра Сергеевна
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
