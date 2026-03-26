import '../App.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const handleAuthClick = () => {
    if (user) {
      dispatch(logout());
      setShowMenu(false);
    }
  };

  return (
    <header className={`header ${showMenu ? "menu-active" : ""}`}>
      <div className='header-left'>
        <FontAwesomeIcon
          className='menu-bars'
          onClick={() => setShowMenu(!showMenu)}
          icon={showMenu ? faXmark : faBars}
        />
      </div>

      <Link
        to="/"
        className="logo-link"
        onClick={() => setShowMenu(false)}
      >
        <h1 className="logo">Learn<span>Flix</span></h1>
      </Link>

      <nav className={`menu ${showMenu ? "open" : ""}`}>
        <ul>
          {!user && (
            <>
              <li>
                <Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
              </li>

              <li>
                <Link to="/about" onClick={() => setShowMenu(false)}>Sobre</Link>
              </li>

              <li>
                <Link to="/contato" onClick={() => setShowMenu(false)}>Contato</Link>
              </li>
            </>
          )}

          {user?.role === "student" && (
            <>
              <li>
                <Link to="/dashboard/aluno" onClick={() => setShowMenu(false)}>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/perfil" onClick={() => setShowMenu(false)}>
                  Perfil
                </Link>
              </li>
            </>
          )}

          {user?.role === "teacher" && (
            <>
              <li>
                <Link to="/dashboard/professor" onClick={() => setShowMenu(false)}>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/dashboard/professor" onClick={() => setShowMenu(false)}>
                  Turmas
                </Link>
              </li>
            </>
          )}

          {user?.role === "manager" && (
            <>
              <li>
                <Link to="/dashboard/gestor" onClick={() => setShowMenu(false)}>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/dashboard/gestor" onClick={() => setShowMenu(false)}>
                  Relatórios
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Link
        to={user ? "/" : "/signup"}
        className="header-right"
        onClick={() => {
          if (!user) setShowMenu(false);
        }}
      >
        <button className="sign-in-btn btn-reset" onClick={handleAuthClick}>
          {user ? "Sair" : "Sign Up"}
        </button>
      </Link>
    </header>
  );
}