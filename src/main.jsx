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
    <Route path="/zdd-kiosk" element={<App />}>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/zdd-kiosk" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route
        path="about/basic-information"
        element={<AboutBasicInformation />}
      />
      <Route path="about/docs" element={<AboutDocs />} />
      <Route path="about/education" element={<AboutEducation />} />
      <Route path="about/paid-services" element={<AboutPaidServices />} />
      <Route
        path="about/financial-activities"
        element={<AboutFinancialActivities />}
      />
      <Route path="about/vacant" element={<AboutVacant />} />
      <Route path="about/anti-corruption" element={<AboutAntiCorruption />} />
      <Route
        path="about/quality-assessment"
        element={<AboutQualityAssessment />}
      />
      <Route path="about/structure" element={<AboutStructure />} />
      <Route path="about/employees" element={<AboutEmployees />} />
      <Route path="about/mto" element={<AboutMTO />} />
      <Route
        path="about/accessible-environment"
        element={<AboutAccessibleEnvironment />}
      />
      <Route
        path="about/employees/:employeeName"
        element={<AboutEmployeesShowMore />}
      />
      <Route path="news" element={<News />} />
      <Route path="news/:newsTitle" element={<NewsShowMore />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:courseTitle" element={<CoursesShowMore />} />
      {/* <Route path="summer-courses" element={<SummerCourses />} />
      <Route
        path="summer-courses/:coursTitle"
        element={<SummerCoursesShowMore />}
      /> */}
      <Route path="activities" element={<Activities />} />
      <Route path="activities/methodical-work" element={<MethodicalWork />} />
      <Route
        path="activities/methodical-work/:employeeName"
        element={<MethodicalWorkShowMore />}
      />
      <Route path="activities/events" element={<OurEvents />} />
      <Route path="activities/mentoring" element={<Mentoring />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
