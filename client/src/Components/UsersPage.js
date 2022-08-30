import React, { useState, useEffect, useRef } from "react";
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";



const UsersPage = () => {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState({
        name: "Loading Info",
        username: "unique11",
        checkings: [{

            available_balance: 27137,
            current_balance: 27137,
            account_number: 146395260,
            transactions: [{

                name: "Quitzon, Trantow and Schuppe",
                location: "Suite 633 6465 Kuvalis Valley, West Vallie, NJ 52996",
                category: "Wine and Spirits",
                amount: 50600,
                date: "2022-08-04",
                checking_id: 9,
                saving_id: null,
            }
            ]
        }

        ],
        savings: [{

            available_balance: 27137,
            current_balance: 27137,
            account_number: 146395260,
            transactions: [{

                name: "Quitzon, Trantow and Schuppe",
                location: "Suite 633 6465 Kuvalis Valley, West Vallie, NJ 52996",
                category: "Wine and Spirits",
                amount: 50600,
                date: "2022-08-04",
                checking_id: 9,
                saving_id: null,
            }
            ]
        }
        ]
    })


    async function getUser() {
        const req = await fetch("https://obscure-earth-36091.herokuapp.com/me");
        const res = await req.json();
        console.log(res)
        setCurrentUser(res);
    }

    console.log(currentUser)
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => { getUser() }, [])
    return (
        <div style={{ backgroundColor: "lightgrey" }}>
            <div className="bankLogo">
                <img width="200" height="200" src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-bank-icon-png-image_515245.jpg" ></img>
                <h1>The Bank</h1>
                <h3>Its The Bank you can trust</h3>
            </div>
            {<NavBar />}
            <div>
                <h1 id="userName"> Welcome {currentUser.name}</h1>
            </div>
            <div onClick={() => navigate('/checkings')}>
            {console.log(currentUser)}
            {(currentUser.checkings.map((element) => {
                return (
                    <div id="checkingBox">
                        <div>
                            <h1>CHECKING</h1>
                            <h4>-{element.account_number.toString().substr(5)}</h4>
                        </div>
                        <div id="alignRight">
                            <h1>Availbable Balance: {dollarUS.format(element.available_balance)}</h1>
                            <h4>Current Balance: {dollarUS.format(element.current_balance)}</h4>
                        </div>
                    </div>
                )
            }))}
            </div >
            <div onClick={() => navigate('/Savings')}>
            {currentUser.savings.map((element) => {
                return (
                    <div id="checkingBox">
                        <div>
                            <h1>Savings</h1>
                            <h4>-{element.account_number.toString().substr(5)}</h4>
                        </div>
                        <div id="alignRight">
                            <h1>Availbable Balance: {dollarUS.format(element.available_balance)}</h1>
                            <h4>Current Balance: {dollarUS.format(element.current_balance)}</h4>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default UsersPage;