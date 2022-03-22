import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function VendingMachine() {
    return (
        <div>
            <nav className="NavBar">
                <NavLink exact to="/soda">
                    SODA
                </NavLink>
                <NavLink exact to="/chips">
                    CHIPS
                </NavLink>
                <NavLink exact to="/sardines">
                    FRESH SARDINES
                </NavLink>
            </nav>
        </div>


    );
}

export default VendingMachine;