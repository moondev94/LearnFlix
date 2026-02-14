import '../App.css'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";



function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className={`header ${showMenu ? "menu-active" : ""}`}>
        <div className='header-left'>
          <FontAwesomeIcon className='menu-bars' onClick={() => setShowMenu(!showMenu)} icon={showMenu ? faXmark : faBars} />
        </div>

        <h1>Learn<span>Flix</span></h1>

        <nav className={`menu ${showMenu ? "open" : ""}`}>
          <ul>
            <li><a href="#" onClick={() => setShowMenu(false)}>Home</a></li>
            <li><a href="#" onClick={() => setShowMenu(false)}>Sobre</a></li>
            <li><a href="#" onClick={() => setShowMenu(false)}>Contato</a></li>
          </ul>
        </nav>

        <div className='header-right'><button className="sign-in-btn">Sign In</button>  </div>

      </header>

    </>
  );
}

export default Header;