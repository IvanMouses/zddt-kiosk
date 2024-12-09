import classes from "./ModalWindow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function ModalWindow({
  openModal,
  setOpenModal,
  modalWindowContent,
}) {
  function handleModal() {
    setOpenModal(false);
  }
  return (
    <div
      onClick={handleModal}
      className={
        openModal
          ? `${classes.modalWindow} ${classes.active}`
          : `${classes.modalWindow}`
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          openModal
            ? `${classes.modalWindowBody} ${classes.active}`
            : `${classes.modalWindowBody}`
        }
      >
        <FontAwesomeIcon
          className={classes.modalWindowIcon}
          icon={faQuestion}
        />
        <FontAwesomeIcon
          onClick={handleModal}
          className={classes.modalWindowCloseButton}
          icon={faXmark}
        />
        <div className={classes.modalWindowContent}>{modalWindowContent}</div>
        <button
          onClick={handleModal}
          className={classes.modalWindowButton}
          type="button"
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
