import React from "react";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

function EachDog({dogs}) {
  const { name } = useParams();
  let currentDog = {};
  if (name) {
    currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
  }
  if (!currentDog){
    return <Redirect to="/dogs"/>
  }
  return (
    <div>
        <img src={currentDog.src} alt={currentDog.name} />
        <h2>{currentDog.name}</h2>
        <h3>{currentDog.age} years old</h3>
        <ul>
          {currentDog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>

    </div>
  );
}

export default EachDog;