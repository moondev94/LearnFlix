import "../App.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setAuthError, clearAuthError } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  const getRedirectPath = (role) => {
    if (role === "student") return "/dashboard/aluno";
    if (role === "teacher") return "/dashboard/professor";
    return "/";
  };

  if (user) {
    return <Navigate to={getRedirectPath(user.role)} replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(clearAuthError());

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (storedUser) =>
        storedUser.email.toLowerCase() === email.toLowerCase() &&
        storedUser.password === password
    );

    if (!foundUser) {
      dispatch(setAuthError("E-mail ou senha inválidos."));
      return;
    }

    dispatch(setUser(foundUser));
  };

  return (
    <div className="page-transition">
      <section className="sign-page">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Entrar</h2>

          <p className="auth-subtitle">
            Ainda não tem conta? <Link to="/signup">Criar conta</Link>
          </p>

          {error && <p className="auth-error">{error}</p>}

          <div className="input-field">
            <label htmlFor="signin-email">E-mail</label>
            <div className="input-wrapper">
              <input
                id="signin-email"
                type="email"
                placeholder="Digite seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon className="input-icon" icon={faUser} />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="signin-password">Senha</label>
            <div className="input-wrapper">
              <input
                id="signin-password"
                type="password"
                placeholder="Digite sua senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon className="input-icon" icon={faLock} />
            </div>
          </div>

          <button type="submit" className="sign-submit-btn btn-reset">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}