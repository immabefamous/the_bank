import React from "react";
import { NavLink, useNavigate } from "react-router-dom"



function NavBar({}) {
    const navigate = useNavigate();
    const logOut = () => {
        fetch("./logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              navigate('/');
            }
          });
    }

    return (
        <nav>
            {/* <NavLink to="/signup">Profile</NavLink> */}
            <NavLink to="/Home"> Home </NavLink>
            <NavLink to="/Home"> Services </NavLink>
            <NavLink to="/Home"> Help </NavLink>
            {/* <NavLink to="/photofeed">Pictures</NavLink>
            <NavLink to="/forums">Forum</NavLink> */}
            <button id="logOut" onClick={logOut}> LOG OUT</button>
        </nav>
    );
}

export default NavBar;