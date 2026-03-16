import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent } from "../store/authSlice";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Sucess!')
  }

  return (
    <div className="page-transition">
      <div className="sign-page">
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="signup"> or <Link to="/signup">create an account</Link></div>
          <div className="input-field">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" required onChange={(e) => setUsername(e.target.value)} /> {/**/}
            <FontAwesomeIcon className="input-icon" icon={faUser} />
          </div>
          <div className="input-field">
            <p>Password</p>
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <FontAwesomeIcon className="input-icon" icon={faLock} />
          </div>
          <div className="remember-login">
            <label>
              <input type="checkbox" name="" />
              Remember me
            </label>
          </div>
          <button onClick={() => dispatch(loginStudent())}>Sign in</button>
        </form>
      </div>
    </div>
  )
}

