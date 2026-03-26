import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "../../App.css";

export default function ManagerDashboard() {

  const user = useSelector((state) => state.auth.user);

  if (!user || user.role !== "manager") {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Bem-vindo, {user.name}</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Usuários</h3>
        </div>

        <div className="dashboard-card">
          <h3>Relatórios</h3>
        </div>

        <div className="dashboard-card">
          <h3>Indicadores</h3>
        </div>

        <div className="dashboard-card">
          <h3>Calendário Institucional</h3>
        </div>

      </div>

    </section>
  );
}