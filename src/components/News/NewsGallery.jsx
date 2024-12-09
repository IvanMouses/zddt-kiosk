import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import classes from "./NewsGallery.module.css";

export default function NewsGallery({ images, galleryID }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className={classes.newsGallery} id={galleryID}>
      {images.map((image, index) => (
        <a
          className={classes.newsGalleryImageContainer}
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img loading="lazy" src={image.src} alt="" />
        </a>
      ))}
    </div>
  );
}
