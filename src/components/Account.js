import React from "react";
import PropTypes from "prop-types";

function Account(props){
  //Auth Functions
  function tempFunction(event){
    event.preventDefault();
  }

  //Return Logic
  if(props.user !== null){
    return(
      <React.Fragment>
        <h1>Sign Out</h1>
        <button onClick={tempFunction}>Sign out</button>
      </React.Fragment>
    );
  }
  if(props.user === null){
    return(
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={tempFunction}>
          <input
            type="text"
            name="signInEmail"
            placeholder="EMAIL" />
          <input
            type="password"
            name="signInPassword"
            placeholder="PASSWORD" />
          <button type="submit">Sign in</button>
        </form>

        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Sign Up</h1>
        <form onSubmit={tempFunction}>
          <input
            type="text"
            name="signUpEmail"
            placeholder="EMAIL" />
          <input
            type="password"
            name="signUpPassword"
            placeholder="PASSWORD" />
          <button type="submit">Sign up</button>
        </form>
      </React.Fragment>
    );
  }
}

Account.propTypes = {
  user: PropTypes.any
}

export default Account