import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Inclusive from "../Inclusive/Inclusive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [inclusiveMode, setInclusiveMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [adaptiveLogo, setAdaptiveLogo] = useState(false);
  const handleShowMenu = function () {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    document.querySelector("body").style = `${
      showMenu ? "overflow: hidden" : "null"
    }`;
  }, [showMenu]);
  useEffect(() => {
    if (document.documentElement.clientWidth <= 1024) {
      setAdaptiveLogo(true);
    } else {
      setAdaptiveLogo(false);
    }
    window.addEventListener("resize", function () {
      if (document.documentElement.clientWidth <= 1024) {
        setAdaptiveLogo(true);
      } else {
        setAdaptiveLogo(false);
      }
    });
    return () => {
      window.removeEventListener("resize", function () {
        if (document.documentElement.clientWidth <= 1024) {
          setAdaptiveLogo(true);
        } else {
          setAdaptiveLogo(false);
        }
      });
    };
  }, []);

  return (
    <div
      className={
        showMenu ? `${classes.header} ${classes.active}` : `${classes.header}`
      }
    >
      {!inclusiveMode && (
        <FontAwesomeIcon
          className={classes.headerInclusiveModeIcon}
          icon={faEye}
          title="Специальные возможности"
          onClick={() => setInclusiveMode(true)}
        />
      )}
      <Inclusive
        inclusiveMode={inclusiveMode}
        setInclusiveMode={setInclusiveMode}
      />
      <div className={classes.headerContainer}>
        <div className={classes.headerLogo}>
          <div>
            <Link onClick={() => showMenu && setShowMenu()} to="/">
              {adaptiveLogo ? (
                <div className={classes.adaptiveLogoContainer}>
                  <img
                    className={classes.headerLogoImageAdaptive}
                    src="./img/Header/logo.png"
                    alt="Логотип ЗДДТ"
                  />
                  <span className={classes.headerLogoText}>ЗДДТ</span>
                </div>
              ) : (
                <img
                  className={classes.headerLogoImage}
                  src="./img/Header/logo.png"
                  alt="Логотип ЗДДТ"
                />
              )}
            </Link>
          </div>
        </div>
        <ul
          className={
            showMenu
              ? `${classes.headerMenu} ${classes.active}`
              : `${classes.headerMenu}`
          }
        >
          <li className={classes.headerMenuItem}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "var(--headerLinksActiveColor)"
                    : "var(--mainColor)",
                };
              }}
              onClick={() => showMenu && setShowMenu()}
              to="/news"
            >
              Новости
            </NavLink>
          </li>
          <li className={classes.headerMenuItem}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "var(--headerLinksActiveColor)"
                    : "var(--mainColor)",
                };
              }}
              onClick={() => showMenu && setShowMenu()}
              to="/courses"
            >
              Образовательные программы
            </NavLink>
          </li>
          <li className={classes.headerMenuItem}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "var(--headerLinksActiveColor)"
                    : "var(--mainColor)",
                };
              }}
              onClick={() => showMenu && setShowMenu()}
              to="/contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => handleShowMenu()}
          className={
            showMenu
              ? `${classes.headerMenuBurgerButton} ${classes.active}`
              : `${classes.headerMenuBurgerButton}`
          }
          type="button"
        >
          <span className={classes.headerMenuBurgerDecor}></span>
        </div>
      </div>
    </div>
  );
}