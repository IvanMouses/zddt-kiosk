import classes from "./Footer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./swiper-bundle.min.css";
import { footerBannerSlides } from "./footerBannerSlides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <Swiper
          className={classes.footerSwiper}
          spaceBetween={10}
          slidesPerView={5}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: "2500" }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            375: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1025: { slidesPerView: 5, spaceBetween: 10 },
          }}
        >
          {footerBannerSlides.map((slide) => (
            <SwiperSlide key={slide.link}>
              <div className={classes.footerBanner}>
                <a
                  target="_blank"
                  href={slide.link}
                  className={classes.footerBannerLink}
                >
                  <img
                    className={classes.footerBannerImage}
                    style={slide.style}
                    src={slide.src}
                    alt={slide.alt}
                  />
                  <p className={classes.footerBannerDescription}>
                    {slide.description}
                  </p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={classes.footerContacts}>
          <div className={classes.mainContacts}>
            <p>
              <FontAwesomeIcon
                className={classes.footerContactsIcon}
                icon={faLocationDot}
              />
              197720, СПб, г. Зеленогорск, ул. Разъезжая 4, стр. 1
            </p>
            <p>
              <FontAwesomeIcon
                className={classes.footerContactsIcon}
                icon={faPhone}
              />
              8 (812) 246-64-96
            </p>
            <p>
              <FontAwesomeIcon
                className={classes.footerContactsIcon}
                icon={faEnvelope}
              />
              panteleeva.zddt@obr.gov.spb.ru
            </p>
          </div>
          <div className={classes.socialMediaContacts}>
            <a target="_blank" href="https://vk.com/zddut2007">
              <FontAwesomeIcon
                className={`${classes.footerContactsIcon} ${classes.footerContactsIconVk}`}
                icon={faVk}
              />
              <p>мы ВКонтакте</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
