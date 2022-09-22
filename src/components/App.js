import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";

function App() {
  //Testing Values
  let userInfo = null; //Fake user (default logged out)
  // userInfo = {id: "123abc", admin: false}; //Fake user update (General user)
  // userInfo = {id: "123abc", admin: true}; //Fake user update (Admin user)

  //Render Logic
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

  //Return Logic
  return(
    <BrowserRouter>
      <Header user={userInfo}/>
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