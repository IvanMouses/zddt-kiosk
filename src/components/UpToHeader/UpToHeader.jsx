import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import classes from "./UpToHeader.module.css";
import { useState, useEffect } from "react";

export default function UpToHeader() {
  const [upToHeader, setUpToHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      document.documentElement.scrollTop >= 500
        ? setUpToHeader(true)
        : setUpToHeader(false);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        document.documentElement.scrollTop >= 500
          ? setUpToHeader(true)
          : setUpToHeader(false);
      });
    };
  }, [upToHeader]);

  return (
    <FontAwesomeIcon
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      style={upToHeader && { transform: "scale(1)", opacity: 1 }}
      className={classes.upToHeaderIcon}
      icon={faArrowUp}
    />
  );
}
