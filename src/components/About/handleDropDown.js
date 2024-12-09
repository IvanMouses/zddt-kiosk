import classes from "./About.module.css";

export default function handleDropDown(e) {
  if (document.documentElement.clientWidth <= 768) {
    document
      .querySelectorAll(`.${classes.aboutItemDescription}`)
      .forEach((description) => {
        if (
          e.target.closest("div")?.dataset.subtitle ===
          description.dataset.description
        ) {
          description.classList.toggle(classes.dropDown);
        }
      });
    document
      .querySelectorAll(`.${classes.aboutItemDropDownIcon}`)
      .forEach((icon) => {
        if (e.target.closest("div")?.dataset.subtitle === icon.dataset.icon) {
          icon.classList.toggle(classes.dropDown);
        }
      });
  }
}
