import classes from "./Inclusive.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faPalette,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { memo, useEffect, useState } from "react";
import { increaseFontSize, decreaseFontSize } from "./fontSizeAdaptivity";
import { switchToDarkMode, switchToLightMode } from "./colorSchemes";

function Inclusive({ inclusiveMode, setInclusiveMode }) {
  const [colorScheme, setColorScheme] = useState("");
  const [fontSizeAdaptivity, setFontSizeAdaptivity] = useState("");

  useEffect(() => {
    document.documentElement.style.cssText = [
      localStorage.getItem("colorScheme"),
      localStorage.getItem("fontSizeAdaptivity"),
    ];
  }, [colorScheme, fontSizeAdaptivity]);

  return (
    <div
      className={
        inclusiveMode
          ? `${classes.inclusive} ${classes.active}`
          : classes.inclusive
      }
    >
      <div className={classes.inclusiveFontSize}>
        Размер шрифта
        <div>
          <button
            onClick={() => {
              decreaseFontSize();
              setFontSizeAdaptivity(localStorage.getItem("fontSizeAdaptivity"));
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button
            onClick={() => {
              increaseFontSize();
              setFontSizeAdaptivity(localStorage.getItem("fontSizeAdaptivity"));
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => setInclusiveMode(false)}
        title="Свернуть специальные возможности"
        className={classes.headerInclusiveModeOffIcon}
        icon={faEyeSlash}
      />
      <div className={classes.inclusiveBGColor}>
        Цветовая схема
        <div>
          <button
            className={classes.inclusiveBGColorWhite}
            onClick={() => {
              switchToLightMode();
              setColorScheme(localStorage.getItem("colorScheme"));
            }}
          >
            <FontAwesomeIcon icon={faPalette} />
          </button>
          <button
            className={classes.inclusiveBGColorDark}
            onClick={() => {
              switchToDarkMode();
              setColorScheme(localStorage.getItem("colorScheme"));
            }}
          >
            <FontAwesomeIcon icon={faPalette} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Inclusive);
