import '../App.css'
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CardCalendar() {

  const [date, setDate] = useState(new Date());

  const holidays =
    useSelector((state) => state.calendar.holidays) || [];

  const holidayDates = holidays.map(h => h.date);

  function isHoliday(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return holidayDates.includes(formattedDate);
  }

  return (
    <div className="dashboard-card calendar-card">

      <h3>📅 Calendário Acadêmico</h3>

      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month" && isHoliday(date)) {
            return "holiday";
          }
          return null;
        }}
      />

    </div>
  );
}