import '../App.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const logged = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 70;

  const handleAuthClick = () => {
    if (logged) {
      dispatch(logout());
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchEndX(null);
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (touchStartX === null || touchEndX === null) return;

      const distance = touchEndX - touchStartX;
      const isRightSwipe = distance > minSwipeDistance;
      const isLeftSwipe = distance < -minSwipeDistance;

      if (isRightSwipe && touchStartX <= 40) {
        setShowMenu(true);
      }

      if (isLeftSwipe && showMenu) {
        setShowMenu(false);
      }

      setTouchStartX(null);
      setTouchEndX(null);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, touchEndX, showMenu]);

  

  return (
    
    <header className={`header ${showMenu ? "menu-active" : ""}`}>
      {showMenu && <div className="menu-overlay" onClick={() => setShowMenu(false)}></div>}
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

          {logged?.role === "student" && (
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

          {logged?.role === "teacher" && (
            <li>
              <Link to="/dashboard/professor" onClick={() => setShowMenu(false)}>
                Dashboard
              </Link>
            </li>
          )}

          {logged?.role === "manager" && (
            <li>
              <Link to="/dashboard/gestor" onClick={() => setShowMenu(false)}>
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <Link to={logged ? "/" : "/signin"} className="header-right">
  <button className="sign-in-btn btn-reset" onClick={handleAuthClick}>
    {logged ? "Sair" : "Entrar"}
  </button>
</Link>
    </header>
  );
}