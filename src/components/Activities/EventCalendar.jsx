import "./EventCalendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import ruLocale from "@fullcalendar/core/locales/ru";
import { events } from "./events.js";
import "tippy.js/dist/tippy.css";
import tippy, { followCursor } from "tippy.js";
import { useState, useRef, useEffect } from "react";

export default function EventCalendar() {
  const [activeView, setActiveView] = useState("dayGridMonth");
  const [activeToolbar, setActiveToolbar] = useState({
    left: "title",
    right: "prev dayGridMonth,dayGridWeek,dayGridDay next",
  });
  const calendarRef = useRef(null);
  useEffect(() => {
    const { current: calendarDom } = calendarRef;
    const API = calendarDom ? calendarDom.getApi() : null;
    API && API.changeView(activeView);
    document.documentElement.clientWidth <= 425
      ? (setActiveView("listWeek"),
        setActiveToolbar({
          left: "title",
          right: "prev next",
        }))
      : (setActiveView("dayGridMonth"),
        setActiveToolbar({
          left: "title",
          right: "prev dayGridMonth,dayGridWeek,dayGridDay next",
        }));
  }, [activeView]);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, listPlugin]}
      locale={ruLocale}
      initialView={activeView}
      windowResize={() => {
        document.documentElement.clientWidth <= 425
          ? setActiveView("listWeek")
          : setActiveView("dayGridMonth");
      }}
      headerToolbar={activeToolbar}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
      }}
      events={[
        ...events.april24,
        ...events.may24,
        ...events.june24,
        ...events.august24,
        ...events.september24,
        ...events.october24,
        ...events.november24,
        ...events.december24,
      ]}
      eventDidMount={(info) => {
        tippy(info.el, {
          plugins: [followCursor],
          content: info.event.extendedProps.description,
          allowHTML: true,
          interactive: true,
          offset: [0, 3],
          delay: [300, null],
          followCursor: "horizontal",
          touch: true,
          appendTo: () => document.body,
        });
        info.el.style.cursor = "pointer";
      }}
    />
  );
}
