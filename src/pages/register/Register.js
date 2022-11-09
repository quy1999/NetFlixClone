import React, { useRef, useState } from "react";
import "./register.scss";
import { Routes,Route } from "react-router-dom";
import Login from "../login/Login";
import { Link } from "react-router-dom";
export default function Register() {
  const emailRef = useRef();
  const emailPasswordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleStart = () => {
    setEmail(emailRef.current.value);
    console.log(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(emailRef.current.value);
    console.log(emailPasswordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="navbar">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Error"
          />
          <Link to="/Login" className="btnSign">Login</Link>
        </div>

        <div className="container">
          <h1 className="hone">Unlimited movies, TV shows, and more.</h1>
          <h2 className="htwo">Watch anywhere. Cancel anytime.</h2>
          <p className="pone">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input
                className="email"
                type="email"
                placeholder="Email Address"
                ref={emailRef}
              />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <div className="input">
              <input
                className="email"
                type="email"
                placeholder="Passworld"
                ref={emailPasswordRef}
              />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </div>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/Login" element={<Login/>}  />
      </Routes>
    </div>
  );
}
