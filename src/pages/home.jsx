import "../App.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent, loginTeacher, loginManager } from "../store/authSlice";

export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (user?.role === "student") {
    return <Navigate to="/dashboard/aluno" replace />;
  }

  if (user?.role === "teacher") {
    return <Navigate to="/dashboard/professor" replace />;
  }

  if (user?.role === "manager") {
    return <Navigate to="/dashboard/gestor" replace />;
  }

  return (
    <section className="home page-transition">

      <div className="hero">

        <h1>
          Bem-vindo ao <span>LearnFlix</span>
        </h1>

        <p>
          Organize sua vida acadêmica em um único lugar.
          Acompanhe disciplinas, calendário e seu progresso
          de forma simples.
        </p>

        <div className="hero-actions">

          <button
            className="hero-btn btn-reset"
            onClick={() => dispatch(loginStudent())}
          >
            Entrar como aluno
          </button>

          <button
            className="hero-btn-outline btn-reset"
            onClick={() => dispatch(loginTeacher())}
          >
            Entrar como professor
          </button>

          <button
            className="hero-btn-outline btn-reset"
            onClick={() => dispatch(loginManager())}
          >
            Entrar como gestor
          </button>

          <Link to="/signup">
            <button className="hero-btn-outline btn-reset">
              Criar conta
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}