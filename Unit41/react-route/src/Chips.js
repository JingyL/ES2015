import React from "react";
import { NavLink } from "react-router-dom";

function Chips() {
  return (
    <div>
        <p>chips</p>
        <NavLink exact to="/" >
         Back
        </NavLink>
    </div>
  );
}

export default Chips;