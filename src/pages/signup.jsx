import "../App.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setAuthError, clearAuthError } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  const getRedirectPath = (role) => {
    if (role === "student") return "/dashboard/aluno";
    if (role === "teacher") return "/dashboard/professor";
    if (role === "manager") return "/dashboard/gestor";
    return "/";
  };

  if (user) {
    return <Navigate to={getRedirectPath(user.role)} replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(clearAuthError());

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailAlreadyExists = users.some(
      (storedUser) => storedUser.email.toLowerCase() === email.toLowerCase()
    );

    if (emailAlreadyExists) {
      dispatch(setAuthError("Já existe uma conta com esse e-mail."));
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    dispatch(setUser(newUser));
  };

  return (
    <div className="page-transition">
      <section className="sign-page">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Criar conta</h2>

          <p className="auth-subtitle">
            Já tem conta? <Link to="/signin">Entrar</Link>
          </p>

          {error && <p className="auth-error">{error}</p>}

          <div className="input-field">
            <label htmlFor="signup-name">Nome</label>
            <div className="input-wrapper">
              <input
                id="signup-name"
                type="text"
                placeholder="Digite seu nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FontAwesomeIcon className="input-icon" icon={faUser} />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="signup-email">E-mail</label>
            <div className="input-wrapper">
              <input
                id="signup-email"
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
            <label htmlFor="signup-password">Senha</label>
            <div className="input-wrapper">
              <input
                id="signup-password"
                type="password"
                placeholder="Digite sua senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon className="input-icon" icon={faLock} />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="signup-role">Perfil</label>
            <div className="input-wrapper">
              <select
                id="signup-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Aluno</option>
                <option value="teacher">Professor</option>
              </select>
            </div>
          </div>

          <button type="submit" className="sign-submit-btn btn-reset">
            Criar conta
          </button>
        </form>
      </section>
    </div>
  );
}