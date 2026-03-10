import '../App.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";



export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className={`header ${showMenu ? "menu-active" : ""}`}>
        <div className='header-left'>
          <FontAwesomeIcon className='menu-bars' onClick={() => setShowMenu(!showMenu)} icon={showMenu ? faXmark : faBars} />
        </div>

        <Link to="/" className="logo-link" onClick={() => setShowMenu(false)}><h1 className="logo">Learn<span>Flix</span></h1></Link>

        <nav className={`menu ${showMenu ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setShowMenu(false)}>Home</Link></li>
            <li><Link to="/about"  onClick={() => setShowMenu(false)}>Sobre</Link></li>
            <li><Link to="/contato"  onClick={() => setShowMenu(false)}>Contato</Link></li>
          </ul>
        </nav>

        <Link to="/" className='header-right'><button className="sign-in-btn">Sign In</button></Link>

      </header>

    </>
  );
}
