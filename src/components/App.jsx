import { useState, Suspense } from "react";
import classes from "./App.module.css";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import ModalWindow from "./ModalWindow";
import { ScrollRestoration } from "react-router-dom";
import Loader from "./Loader";
import UpToHeader from "./UpToHeader/UpToHeader";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalWindowContent, setModalWindowContent] = useState("");

  return (
    <>
      <ModalWindow
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalWindowContent={modalWindowContent}
      />
      <UpToHeader />
      <Header />
      <div className={classes.wrapper}>
        <Suspense fallback={<Loader />}>
          <Outlet context={[setOpenModal, setModalWindowContent]} />
        </Suspense>
      </div>
      <ScrollRestoration />
    </>
  );
}
