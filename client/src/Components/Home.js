import React from "react";
import "./Component.css"
import { useEffect, useState, useRef } from "react"
import UsersPage from "./UsersPage";


const Home = () => {
    
    
    

    return (
        <div>
            <div id="bankLogo">
                <img src='https://pngimg.com/uploads/bank/small/bank_PNG15.png'></img>
                <h1>The Bank</h1>
                <h3>It's The Bank You Can trust</h3>
            </div>
            
            <a id="logInButton" href="https://obscure-earth-36091.herokuapp.com/Signup"> Log In or Sign Up </a>

            <div id="bankLogo">
                <img witdh= "1200"  height='400' src="https://www.investopedia.com/thmb/z6sP3eY4kbWULQ1dmBOQl3Ojpm0=/2121x1414/filters:fill(auto,1)/financial-advisor-having-a-meeting-with-clients-1063753064-c799ed7b34b945e79e548b62e90fdd83.jpg"></img>
            </div>

            <div className="twoBoxes">
                <div >
                    <img witdh="400" height="200" src="https://mpng.subpng.com/20180319/oke/kisspng-cheque-computer-icons-bank-payment-money-icon-request-fa-cheque-icon-issue-4775-for-5ab080fb9b6df4.5498342015215167956367.jpg"></img>
                    <h3> The Bank is the place for our premium checking account. No overdraft fees, amazing interest rates, and hassle-free tech support.</h3>
                </div>
                <div>
                    <img witdh="400" height="200" src="https://www.seekpng.com/png/detail/875-8756935_png-file-svg-saving-money-symbol-png.png"></img>
                    <h3> The Bank is the place to save your money. Why? Our Premier Savings Account has one of the highest interst rates in the world. Watch your money grow. </h3>
                </div>
                
            </div>
        </div>
    )

}

export default Home;

