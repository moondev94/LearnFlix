import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {

  const [name, setName] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Sucess!')
  }

  return (
    <>
      <div className="sign-page">
        <form onSubmit={handleSubmit}>
          <h2>Create account</h2>
          <div className="signup"> Have an account? <Link to="/">Sign in</Link></div>
          <div className="input-field">
            <p>Name</p>
            <input type="name" placeholder="Name" required onChange={(e) => setName(e.target.value)}/> {/**/}
            <FontAwesomeIcon className="input-icon" icon={faUser} />
          </div>
          <div className="input-field">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" required onChange={(e) => setUsername(e.target.value)}/>
            <FontAwesomeIcon className="input-icon" icon={faUser} />
          </div>
          <div className="input-field">
            <p>Password</p>
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            <FontAwesomeIcon className="input-icon" icon={faLock} />
          </div>
          <button>Create account</button>
        </form>
      </div>
    </>
  )
}

