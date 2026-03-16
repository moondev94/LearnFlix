import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import "../../App.css";
import Calendar from "../../components/Calendar";
import { fetchHolidays } from "../../store/calendarSlice";

export default function StudentDashboard() {

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Bem-vindo, {user.name}</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Calendário</h3>
          <Calendar />
        </div>
        <div className="dashboard-card">
          <h3>Disciplinas</h3>
        </div>

        <div className="dashboard-card">
          <h3>Progresso</h3>
        </div>

        

      </div>

    </section>
  );
}