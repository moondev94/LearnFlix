import '../App.css'


function Header() {
  return (
    <header> 
      <nav>
        <h1>Learn<span>Flix</span></h1>
        <a className="sign-in-btn">Sign In</a>
         <div class="menu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
        <ul>
            <li href="#">Início</li>
            <li href="#">Sobre</li>
            <li href="#">Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;