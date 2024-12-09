import classes from "./App.module.css";

export default function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <span className={classes.loader}></span>
    </div>
  );
}
