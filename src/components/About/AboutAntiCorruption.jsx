import { useEffect } from "react";
import classes from "./About.module.css";
import mainClasses from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import handleDropDown from "./handleDropDown";
import { Link } from "react-router-dom";

export default function AboutAntiCorruption() {
  useEffect(() => {
    document.documentElement.addEventListener("click", handleDropDown);
    return () =>
      document.documentElement.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={classes.aboutAntiCorruption}>
      <div
        className={`${classes.aboutAntiCorruptionContainer} ${classes.aboutItemContainer}`}
      >
        <div className={mainClasses.navigation}>
          <Link to="/" className={mainClasses.navigationLink}>
            Главная
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link to="/about" className={mainClasses.navigationLink}>
            Сведения об организации
          </Link>
          <FontAwesomeIcon
            className={mainClasses.navigationIcon}
            icon={faAngleRight}
          />
          <Link
            to="/about/anti-corruption"
            className={`${mainClasses.navigationLink} ${mainClasses.current}`}
          >
            Противодействие коррупции
          </Link>
        </div>
        <h2
          className={`${classes.aboutAntiCorruptionTitle} ${classes.aboutItemTitle}`}
        >
          Противодействие коррупции
        </h2>
        <div
          className={`${classes.aboutAntiCorruptionColumns} ${classes.aboutItemColumns}`}
        >
          <div
            className={`${classes.aboutAntiCorruptionRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="1"
              className={`${classes.aboutAntiCorruptionSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Обратная связь для сообщений о фактах коррупции</p>
              <FontAwesomeIcon
                data-icon="1"
                className={`${classes.aboutAntiCorruptionDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="1"
              className={`${classes.aboutAntiCorruptionDescription} ${classes.aboutItemDescription}`}
            >
              <p>Выделенная телефонная линия "Нет коррупции!"</p>
              <p>Телефон: 8 (812) 576-77-65</p>
              <ul>
                <li>
                  Телефонная линия функционирует в режиме автоответчика с 9:00
                  до 18:00 по рабочим дням;
                </li>
                <li>Продолжительность сообщения - до 8 минут;</li>
                <li>
                  Данная линия не является «телефоном доверия» и предназначена
                  только для приема сообщений, содержащих факты коррупционных
                  проявлений согласно определению коррупции;
                </li>
                <li>
                  Поступившие сообщения, удовлетворяющие указанным требованиям,
                  обрабатываются и затем рассматриваются в соответствии с
                  Федеральным законом от 2 мая 2006 года № 59-ФЗ{" "}
                  <a
                    target="_blank"
                    href="http://pravo.gov.ru/proxy/ips/?docbody=&nd=102106413&intelsearch=%D4%E5%E4%E5%F0%E0%EB%FC%ED%FB%E9+%E7%E0%EA%EE%ED+%EE%F2+02.05.2006+N+59-%D4%C7+%AB%CE+%EF%EE%F0%FF%E4%EA%E5+%F0%E0%F1%F1%EC%EE%F2%F0%E5%ED%E8%FF+%EE%E1%F0%E0%F9%E5%ED%E8%E9+%E3%F0%E0%E6%E4%E0%ED+%D0%EE%F1%F1%E8%E9%F1%EA%EE%E9+%D4%E5%E4%E5%F0%E0%F6%E8%E8%BB"
                  >
                    «О порядке рассмотрения обращения граждан Российской
                    Федерации»
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${classes.aboutAntiCorruptionRow} ${classes.aboutItemRow}`}
          >
            <div
              data-subtitle="2"
              className={`${classes.aboutAntiCorruptionSubtitle} ${classes.aboutItemSubtitle}`}
            >
              <p>Электронный почтовый ящик "Нет коррупции!"</p>
              <FontAwesomeIcon
                data-icon="2"
                className={`${classes.aboutAntiCorruptionDropDownIcon} ${classes.aboutItemDropDownIcon}`}
                icon={faArrowDown}
              />
            </div>
            <div
              data-description="2"
              className={`${classes.aboutAntiCorruptionDescription} ${classes.aboutItemDescription}`}
            >
              <p>
                <a
                  target="_blank"
                  href="https://letters.gov.spb.ru/no_corrupline/"
                >
                  Отправить сообщение о коррупции
                </a>
              </p>
              <p>
                Обращаем Ваше внимание, что в соответствии с частью 3 статьи 7,
                частью 4 статьи 10 и частью 1 статьи 11 Федерального закона от 2
                мая 2006 года № 59-ФЗ{" "}
                <a
                  target="_blank"
                  href="http://pravo.gov.ru/proxy/ips/?docbody=&nd=102106413&intelsearch=%D4%E5%E4%E5%F0%E0%EB%FC%ED%FB%E9+%E7%E0%EA%EE%ED+%EE%F2+02.05.2006+N+59-%D4%C7+%AB%CE+%EF%EE%F0%FF%E4%EA%E5+%F0%E0%F1%F1%EC%EE%F2%F0%E5%ED%E8%FF+%EE%E1%F0%E0%F9%E5%ED%E8%E9+%E3%F0%E0%E6%E4%E0%ED+%D0%EE%F1%F1%E8%E9%F1%EA%EE%E9+%D4%E5%E4%E5%F0%E0%F6%E8%E8%BB"
                >
                  «О порядке рассмотрения обращения граждан Российской
                  Федерации»
                </a>
                :
              </p>
              <ul>
                <li>
                  Обращение, поступившее в форме электронного документа,
                  принимается к рассмотрению, только если оно содержит фамилию,
                  имя, отчество (при наличии) гражданина, направившего
                  обращение, адрес электронной почты, если ответ должен быть
                  направлен в форме электронного документа, и почтовый адрес,
                  если ответ должен быть направлен в письменной форме;
                </li>
                <li>
                  Ответ на обращение, поступившее в форме электронного
                  документа, направляется в форме электронного документа по
                  адресу электронной почты, указанному в обращении, или в
                  письменной форме по почтовому адресу, указанному в обращении;
                </li>
                <li>
                  В случае, если в обращении не указаны фамилия заявителя и
                  почтовый (либо электронный) адрес для направления ответа, но в
                  указанном обращении содержатся сведения о подготавливаемом,
                  совершаемом или совершенном противоправном деянии, а также о
                  лице, его подготавливающем, совершающем или совершившем,
                  обращение направляется для рассмотрения в государственный
                  орган в соответствии с его компетенцией, при этом письменный
                  ответ на обращение не дается.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
