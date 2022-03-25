import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import EachDog from "./EachDog";

function Routes({dogs}) {
    return (
      <Switch>
        <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>xw
          <Route path="/dogs/:name">
              <EachDog dogs={dogs}></EachDog>
            </Route>
            <Redirect to="/dogs"/> 
      </Switch>
    );
  }
  
  export default Routes;