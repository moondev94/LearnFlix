import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function StudentDashboard() {

  const user = useSelector((state) => state.auth.user);

  // proteção de rota
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Bem-vindo, {user.name}</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>📚 Disciplinas</h3>
        </div>

        <div className="dashboard-card">
          <h3>📅 Calendário</h3>
        </div>

        <div className="dashboard-card">
          <h3>📈 Progresso</h3>
        </div>

        <div className="dashboard-card">
          <h3>👤 Meu Perfil</h3>
        </div>

      </div>

    </section>
  );
}