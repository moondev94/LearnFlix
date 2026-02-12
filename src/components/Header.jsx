import '../App.css'
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Header() {

const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <header> 
      <FontAwesomeIcon className='menu-bars' onClick={() => setShowMenu(!showMenu)} icon={faBars}/>

        <h1>Learn<span>Flix</span></h1>
        <a className="sign-in-btn">Sign In</a>    
    </header>

    {showMenu && (
      <nav className={showMenu ? "menu open" : "menu"}>
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
  )}
  </>
  );
}

export default Header;