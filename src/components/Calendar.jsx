import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

export default function CardCalendar() {

  const [date, setDate] = useState(new Date());

  const holidays = useSelector(
    (state) => state.calendar.holidays
  );
  console.log(holidays);

  // ✅ função que marca feriados
  const isHoliday = (date) => {
    const formattedDate = date.toISOString().split("T")[0];

    return holidays.some(
      (holiday) => holiday.date === formattedDate
    );
  };

  return (
    <div className="dashboard-card calendar-card">

      <h3>📅 Calendário Acadêmico</h3>

      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) =>
          view === "month" && isHoliday(date)
            ? "holiday"
            : null
        }
      />

    </div>
  );
}