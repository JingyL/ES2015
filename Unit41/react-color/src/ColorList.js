import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
      ));
    return (
        <div>   
            {colorLinks}
        </div>
    );
}

export default ColorList;