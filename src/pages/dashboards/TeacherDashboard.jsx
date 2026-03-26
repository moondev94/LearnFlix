import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "../../App.css";

export default function TeacherDashboard() {

  const user = useSelector((state) => state.auth.user);

  if (!user || user.role !== "teacher") {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Bem-vindo, {user.name}</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Turmas</h3>
        </div>

        <div className="dashboard-card">
          <h3>Disciplinas</h3>
        </div>

        <div className="dashboard-card">
          <h3>Materiais</h3>
        </div>

        <div className="dashboard-card">
          <h3>Calendário</h3>
        </div>

      </div>

    </section>
  );
}