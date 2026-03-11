import "../App.css"
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent } from "../store/authSlice";

export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (user?.role === "student") {
    return <Navigate to="/dashboard/aluno" />;
  }

  return (
    <section className="page-transition">

      <h2>Bem-vindo ao LearnFlix</h2>

      <p>Organize sua vida acadêmica em um único lugar.</p>

      <button
        className="sign-in-btn"
        onClick={() => dispatch(loginStudent())}
      >
        Entrar como aluno
      </button>

      <Link to="/signup">
        <button className="sign-in-btn">
          Criar uma conta
        </button>
      </Link>

    </section>
  );
}