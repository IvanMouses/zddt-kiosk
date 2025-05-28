import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./components/App";
import PageNotFound from "./components/PageNotFound";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import NewsShowMore from "./components/News/NewsShowMore";
import Contacts from "./components/Contacts/Contacts";
import Courses from "./components/Courses/Courses";
import CoursesShowMore from "./components/Courses/CoursesShowMore";
import SummerCourses from "./components/Courses/SummerCourses";
import SummerCoursesShowMore from "./components/Courses/SummerCoursesShowMore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/zddt-kiosk" element={<App />}>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/zddt-kiosk" element={<Main />} />
      <Route path="/zddt-kiosk/news" element={<News />} />
      <Route path="/zddt-kiosk/news/:newsTitle" element={<NewsShowMore />} />
      <Route path="/zddt-kiosk/contacts" element={<Contacts />} />
      <Route path="/zddt-kiosk/courses" element={<Courses />} />
      <Route
        path="/zddt-kiosk/courses/:courseTitle"
        element={<CoursesShowMore />}
      />
      <Route path="summer-courses" element={<SummerCourses />} />
      <Route
        path="summer-courses/:coursTitle"
        element={<SummerCoursesShowMore />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
