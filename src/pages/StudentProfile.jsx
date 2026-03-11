import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function StudentProfile() {

  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Perfil do Aluno</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Nome</h3>
          <p>{user.name}</p>
        </div>

        <div className="dashboard-card">
          <h3>Perfil</h3>
          <p>{user.role}</p>
        </div>

        <div className="dashboard-card">
          <h3>Status</h3>
          <p>Ativo</p>
        </div>

      </div>

    </section>
  );
}