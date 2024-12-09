import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const App = lazy(() => import("./components/App"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Main = lazy(() => import("./components/Main/Main"));
const About = lazy(() => import("./components/About/About"));
const AboutBasicInformation = lazy(() =>
  import("./components/About/AboutBasicInformation")
);
const AboutDocs = lazy(() => import("./components/About/AboutDocs"));
const AboutEducation = lazy(() => import("./components/About/AboutEducation"));
const AboutPaidServices = lazy(() =>
  import("./components/About/AboutPaidServices")
);
const AboutFinancialActivities = lazy(() =>
  import("./components/About/AboutFinancialActivities")
);
const AboutVacant = lazy(() => import("./components/About/AboutVacant"));
const AboutAntiCorruption = lazy(() =>
  import("./components/About/AboutAntiCorruption")
);
const AboutQualityAssessment = lazy(() =>
  import("./components/About/AboutQualityAssessment")
);
const AboutStructure = lazy(() => import("./components/About/AboutStructure"));
const AboutEmployees = lazy(() => import("./components/About/AboutEmployees"));
const AboutEmployeesShowMore = lazy(() =>
  import("./components/About/AboutEmployeesShowMore")
);
const AboutMTO = lazy(() => import("./components/About/AboutMTO"));
const AboutAccessibleEnvironment = lazy(() =>
  import("./components/About/AboutAccessibleEnvironment")
);
const News = lazy(() => import("./components/News/News"));
const NewsShowMore = lazy(() => import("./components/News/NewsShowMore"));
const Contacts = lazy(() => import("./components/Contacts/Contacts"));
const Courses = lazy(() => import("./components/Courses/Courses"));
const CoursesShowMore = lazy(() =>
  import("./components/Courses/CoursesShowMore")
);
// const SummerCourses = lazy(() => import("./components/Courses/SummerCourses"));
// const SummerCoursesShowMore = lazy(() =>
//   import("./components/Courses/SummerCoursesShowMore")
// );
const Activities = lazy(() => import("./components/Activities/Activities"));
const MethodicalWork = lazy(() =>
  import("./components/Activities/MethodicalWork")
);
const MethodicalWorkShowMore = lazy(() =>
  import("./components/Activities/MethodicalWorkShowMore")
);
const OurEvents = lazy(() => import("./components/Activities/OurEvents"));
const Mentoring = lazy(() => import("./components/Activities/Mentoring"));

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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
