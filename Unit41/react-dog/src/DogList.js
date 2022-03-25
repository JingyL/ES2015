import React from "react";
import { Link } from "react-router-dom";


function DogList({ dogs }) {
    return (
        <>
            <h1>
                HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
            </h1>
            {dogs.map(d => (
                <div key={d.name}>
                    <img src={d.src} alt={d.name} />
                    <h3 className="mt-3">
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h3>
                </div>
            ))}
        </>
    );
}

export default DogList;