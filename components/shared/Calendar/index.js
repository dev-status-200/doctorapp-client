import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { parse, format } from "date-fns";

const CalendarGrid = ({ appointments }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const combineDateAndTime = (dateString, timeString) => {
      try {
        const parsedDate = parse(
          dateString,
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          new Date()
        );
        const parsedTime = parse(timeString, "hh:mm a", new Date());

        parsedDate.setHours(parsedTime.getHours());
        parsedDate.setMinutes(parsedTime.getMinutes());

        const formattedDateTime = format(parsedDate, "yyyy-MM-dd'T'HH:mm");

        return formattedDateTime;
      } catch (error) {
        console.error("Error combining date and time:", error);
        return null;
      }
    };

    if (calendarRef.current) {
      const startTimes = appointments.map((ele) => {
        const startTime = combineDateAndTime(ele.selectedDate, ele.selectHour);

        // Access AppointmentServices and Pricing information
        const services = ele.AppointmentServices.map((service) => {
          return {
            serviceName: service.Pricing.name,
            price: service.Pricing.price,
          };
        });

        return {
          startTime,
          services,
        };
      });

      const calendar = new Calendar(calendarRef.current, {
        plugins: [dayGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next",
          center: "title",
          right: "dayGridWeek,dayGridDay,dayGridMonth,dayGridYear,listWeek",
        },
        height: "800px",
        events: startTimes.map((start, i) => ({
          title:`${start.services[0].serviceName}${start.services[0].price}`,
          start: start.startTime,
        })),
      });

      calendar.render();
    }
  }, [appointments]);

  return <div ref={calendarRef} />;
};

export default CalendarGrid;
