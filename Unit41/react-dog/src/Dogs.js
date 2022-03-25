import React from "react";
import { NavLink } from "react-router-dom";
import "./Dogs.css";

function Dogs({dogs}) {
    const links = dogs.map(dog =>(
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
        {dog.name}
      </NavLink> 
    ))
    console.log(links)
  return (
    <div>
            <nav className="NavBar">
                <NavLink exact to="/dogs">
                    Home
                </NavLink>
                {links}
            </nav>
            <p>Hi, Choose your dogs</p>

    </div>
  );
}

export default Dogs;