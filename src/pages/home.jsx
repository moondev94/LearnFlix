import "../App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Sucess!')
  }

  return (
    <>
      <div className="signin-page">
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="signup"> or <a href="#">create an account</a></div>
          <div>
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" required onChange={(e) => setUsername(e.target.value)}/> {/**/}
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <p>Password</p>
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="remember-login">
            <label>
              <input type="checkbox" name="" />
              Remember me
            </label>
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </>
  )
}

