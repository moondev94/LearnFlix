import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

export default function CardCalendar() {

  const [date, setDate] = useState(new Date());

  const holidays = useSelector((state) => state.calendar.holidays);

  const holidaysThisMonth = holidays.filter((holiday) => {
    const [year, month] = holiday.date.split("-");

    return (
      Number(month) - 1 === date.getMonth() &&
      Number(year) === date.getFullYear()
    );
  });

  const isHoliday = (date) => {
    return holidays.some((holiday) => {
      const [year, month, day] = holiday.date.split("-");

      return (
        date.getFullYear() === Number(year) &&
        date.getMonth() === Number(month) - 1 &&
        date.getDate() === Number(day)
      );
    });
  };

  return (
    <div className="dashboard-card calendar-card">

      <Calendar
        onChange={setDate}
        onActiveStartDateChange={({ activeStartDate }) => setDate(activeStartDate)}
        value={date}

        tileClassName={({ date, view }) =>
          view === "month" && isHoliday(date) ? "holiday" : ""
        }
      />

      {holidaysThisMonth.length > 0 && (
        <div className="holiday-list">

          <h4>Feriados deste mês</h4>

          {holidaysThisMonth.map((holiday) => {
            const day = new Date(holiday.date).getDate();

            return (
              <div key={holiday.date} className="holiday-item">
                <strong>{day}</strong> - {holiday.name}
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}