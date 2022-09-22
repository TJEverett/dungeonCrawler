import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  //Testing Values
  let userInfo = null;
  // userInfo = {id: "123abc", admin: false};
  // userInfo = {id: "123abc", admin: true};



  function CheckAdminToLoad() {
    let action = null;
    if(userInfo === null){
      action = <Redirect to="/User" />;
    }else if(userInfo.admin === false){
      action = <Redirect to="/Game" />;
    }else{
      action = <p>Creation Page for Admins</p>;
    }
    return action;
  }

  return(
    <BrowserRouter>
      <h1>Header</h1>
      <Switch>
        <Route path="/Create">
          {CheckAdminToLoad()}
        </Route>
        <Route path="/Game">
          <p>Game Menu</p>
        </Route>
        <Route path="/User">
          <p>Log In/Out Here</p>
        </Route>
        <Route path="/">
          <Redirect to="/Create" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;