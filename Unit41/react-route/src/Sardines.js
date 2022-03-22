import React from "react";
import { NavLink } from "react-router-dom";

function Sardines() {
  return (
    <div>
         <p>sardines</p>
         <NavLink exact to="/" >
         Back
        </NavLink>
    </div>
  );
}

export default Sardines;