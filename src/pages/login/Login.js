import {  useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import React, { useRef, useState } from "react";
import "./login.scss";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Register from "../register/Register";
import { Routes, Route } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="top">
        <div className="navbar">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Error"
          />
          <Link to="/Register" className="loginButton">
            Register
          </Link>
        </div>

        <div className="container">
          <form action="" className="form">
            <h1 className="h">Sign Up</h1>
            <input
              className="email"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button  className="loginButton" onClick={() => signInWithEmailAndPassword(email, password)}>Sign In</button>
            <span className="span">
              New to NetFlix? <b>Sign Up</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot <b>Learn more</b>
            </small>
          </form>
        </div>
      </div>

      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>

     
    </div>
  );
}
