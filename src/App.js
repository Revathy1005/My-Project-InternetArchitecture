import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import Cookies from 'js-cookie';
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Success from "./components/Success";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                exact
                path="/"
                element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
              />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              
              <Route path="/success" element={<Success />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// "start": "set HTTPS=true && set SSL_CRT_FILE=$(./.ssl/localhost.pem) && set SSL_KEY_FILE=$(./.ssl/localhost-key.pem) && set PORT=8080 && react-scripts start",