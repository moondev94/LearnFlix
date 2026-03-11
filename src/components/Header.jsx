import '../App.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Header() {

  const logged = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleAuthClick = () => {
    if (logged) {
      dispatch(logout());
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
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

      {!logged && (
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

      {logged && (
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

    </ul>
  </nav>

  <Link to={logged ? "/" : "/signup"} className="header-right">
    <button className="sign-in-btn" onClick={handleAuthClick}>
      {logged ? "Sair" : "Sign Up"}
    </button>
  </Link>

</header>

    </>
  );
}
