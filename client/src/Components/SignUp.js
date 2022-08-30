import React from "react";
import "./Component.css";
import { useEffect, useState, useRef } from "react";
import Home from './Home'
import UsersPage from "./UsersPage";
import { useNavigate, Link } from "react-router-dom";

const  SignUp = () => {

    const [user, setUser] = useState("null")
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
};




const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];
    
    let username = uname.value
    let password = pass.value
    fetch("./login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    navigate('/home',{state: user});
                });
            } else {
                r.json().then((err) => console.log(err))
            }
        });
   
};

// Generate JSX code for error message
const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );



// JSX code for login form
const renderForm = (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
);


const [isSubmitted2, setIsSubmitted2] = useState(true);

const errors2 = {
    uname: "invalid username",
    pass: "invalid password",

    fname: "give a proper full name"
};

async function handleSubmit2(event) {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass, pass_confirm, fname } = document.forms[1];
    
    
    // await fetch('https://tranquil-plateau-22078.herokuapp.com/users', {
    await fetch('./users', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: fname.value,
            username: uname.value,
            password: pass.value,
            password_confirmation: pass_confirm.value
        }
        )
    },
    )
    setIsSubmitted2(true)
    alert("you can now log in")
    window.location.reload()
}

// JSX code for login form
const renderForm2 = (
    <div className="form2">

        <form onSubmit={handleSubmit2}>
            {/* First and Last Name */}
            <div className="input-container">
                <label>Full Name </label>
                <input type="text" name="fname" required />

            </div>

            {/* User Name */}
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />

            </div>
            {/* Password */}
            <div className="input-container">
                <label>Password </label>
                <input type="text" name="pass" required />

            </div>
            {/* Password Confirmation */}
            <div className="input-container">
                <label>Confirm Password</label>
                <input type="text" name="pass_confirm" required />

            </div>
            <div className="button-container">
                <input type="submit" value="Signup" />

            </div>
        </form>
    </div>
);

function flipCard() {
    let front = document.getElementsByClassName("LoginPage")
    
    if (front[0].classList[1] == 'flipped') {
        front[0].classList.remove('flipped')
    } else {
        front[0].classList.add('flipped')
    }
    
}

return(
    <div className="LoginPage">
                <div className="login-form">
                    <div className="title">Log In</div>
                    {/* exhange <div>User is successfully logged in</div> with Jerry's component */}
                    {renderForm}
                    <button onClick={() => flipCard()}>SIGN UP</button>
                </div>
                <div className="signup-form">
                    <div className="title">Sign Up</div>
                    {renderForm2}
                    <button onClick={() => flipCard()}>BACK TO LOGIN</button>
                </div>
    </div>

    )
}
export default SignUp;