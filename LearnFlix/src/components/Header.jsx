function Header() {
  const tituloHeader = "LearnFlix";
  return (
    <div className="header">
      <h2>{tituloHeader}</h2>
      <nav>
        <ul>
            <li href="#">Início</li>
            <li href="#">Sobre</li>
            <li href="#">Contato</li>
        </ul>
        <a className="sign-in-btn">Sign In</a>
      </nav>
    </div>
  );
}

export default Header;