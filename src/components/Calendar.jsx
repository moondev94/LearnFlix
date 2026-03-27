import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

export default function CardCalendar() {
  const [date, setDate] = useState(new Date());

  const holidays = useSelector((state) => state.calendar.holidays);
  const events = useSelector((state) => state.calendar.events);

  const holidaysThisMonth = holidays.filter((holiday) => {
    const [year, month] = holiday.date.split("-");

    return (
      Number(month) - 1 === date.getMonth() &&
      Number(year) === date.getFullYear()
    );
  });

  const eventsThisMonth = events.filter((event) => {
    const [year, month] = event.date.split("-");

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

  const hasEvent = (date) => {
    return events.some((event) => {
      const [year, month, day] = event.date.split("-");

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
        tileClassName={({ date, view }) => {
          if (view !== "month") return "";

          const holiday = isHoliday(date);
          const event = hasEvent(date);

          if (holiday && event) return "holiday event-day";
          if (holiday) return "holiday";
          if (event) return "event-day";

          return "";
        }}
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

      {eventsThisMonth.length > 0 && (
        <div className="holiday-list">
          <h4>Avaliações deste mês</h4>

          {eventsThisMonth.map((event) => {
            const day = new Date(event.date).getDate();

            return (
              <div key={event.id} className="holiday-item">
                <strong>{day}</strong> - {event.title} ({event.type})
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}