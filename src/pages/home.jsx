import "../App.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent } from "../store/authSlice";

export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (user?.role === "student") {
    return <Navigate to="/dashboard/aluno" replace />;
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
            className="hero-btn"
            onClick={() => dispatch(loginStudent())}
          >
            Entrar como aluno
          </button>

          <Link to="/signup">
            <button className="hero-btn-outline">
              Criar conta
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}