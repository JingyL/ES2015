import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function Routes() {
    const initialColors = JSON.parse(localStorage.getItem("colors")) ||{
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    }
    const [colors, setColors] = useState(initialColors);
    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
      );
    const updateColors = (newColorObj) => {
        setColors(prevColors => ({ ...prevColors, ...newColorObj }));
    }
    function renderCurrentColor(props) {
        const { color } = props.match.params;
        const hex = colors[color];
        return <Color {...props} hex={hex} color={color} />;
      };
    return (
        <div>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors} />
                </Route>
                <Route exact path="/colors/new">
                    <NewColorForm addColor={updateColors}/>
                </Route>
                <Route path="/colors/:color" render={renderCurrentColor} />
                <Redirect to="/colors" />
            </Switch>
        </div>
    );
}

export default Routes;
