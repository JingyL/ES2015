import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <h1>Welcome to color factory</h1>
        <Link to="/colors/new"> Add a color</Link>
    </div>
  );
}

export default NavBar;