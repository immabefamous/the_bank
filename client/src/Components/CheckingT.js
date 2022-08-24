
import React, { useState, useEffect, useRef } from "react";
import "./Component.css"
import NavBar from "./NavBar";


const CheckingT = () => {

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
    useEffect(() => { getUser() }, [])

    async function getUser() {
        const req = await fetch(`/me`);
        const res = await req.json();
        console.log(res)
        setCurrentUser(res);
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let orderedList = currentUser.checkings[0].transactions.sort((a, b) => new Date(...b.date.split('/').reverse()) - new Date(...a.date.split('/').reverse()));
    console.log(orderedList)
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
            <div>
                {(currentUser.checkings.map((element) => {
                    return (
                        <div>
                            <div id="checkingDiv">
                                <div style={{ display: "flex", position: "relative", top: "25%" }}>
                                    <h1>CHECKING</h1>
                                    <h4 style={{ position: "relative", top: "5%", paddingLeft: "10px" }}>-{element.account_number.toString().substr(5)}</h4>
                                </div>
                                <h1 style={{ position: "relative", top: "-10%", left: "7%" }}>Availbable Balance: {dollarUS.format(element.available_balance)}</h1>
                                <h4 style={{ position: "relative", top: "50%", left: "-30%" }}>Current Balance: {dollarUS.format(element.current_balance)}</h4>
                                <button onClick={null}> TRANSFER</button>
                            </div>
                            <h1 style={{ textAlign: "center" }}> Recent Transactions</h1>
                            
                                {(orderedList.map((element) => {
                                    return ( 
                                        <div style={{display: "flex", flexDirection: "column"}}>
                                        <div>
                                        <h2>{element.date}</h2>
                                        </div>
                                        <div id="transactionList"> 
                                        <div style={{display: "flex", flexDirection: "column", width: "400px"}}> 
                                        <h3>{element.name}</h3>
                                        <h3>{element.category}</h3>
                                        </div>
                                        <h3 style={{postion: "relative", textAlign: "right", width: "400px"}}>{element.amount}</h3>
                                    </div>
                                    </div>     
                                )
                                }))}
                            
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}
export default CheckingT;