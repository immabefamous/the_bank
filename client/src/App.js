// to run react and rails at the same time
// foreman start -f Procfile.dev

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import "./Components/Component.css";
import SignUp from './Components/SignUp';
import UsersPage from './Components/UsersPage'
import CheckingT from './Components/CheckingT';
import SavingT from './Components/SavingT';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // auto-login
    
    fetch("./me").then((r) => {
      if (r.ok) {
        r.json().then((user) => 
          {console.log(user)
          if (user !== null) {
            navigate('/home')}
        });
      }
    });
  }, []);

    return (
      <div className="App" style={{ backgroundColor: "lightgrey" }}>
        
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<UsersPage />} />
        <Route path="/Checkings" element={<CheckingT />} />
        <Route path="/Savings" element={<SavingT />} />

       
        
      </Routes> 

      </div>
    );
  }

  export default App;
