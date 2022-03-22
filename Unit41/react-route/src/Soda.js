import React from "react";
import { NavLink } from "react-router-dom";
function Soda() {
  return (
    <div>
        <p>soda</p>
        <NavLink exact to="/" >
         Back
        </NavLink>
    </div>
  );
}

export default Soda;