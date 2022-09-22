import React from "react";
import PropTypes from "prop-types";

function GameController(props){
  //Temp Values
  const optionsSelected = false;

  //Style Logic
  const styleCenter = {
    display: "flex",
    justifyContent: "center"
  };

  //Return Logic
  if(props.user === null){
    return(
      <React.Fragment>
        <h2 style={styleCenter}>No user detected</h2>
        <h3 style={styleCenter}>Please sign in to play</h3>
      </React.Fragment>
    );
  }
  if(props.user !== null && optionsSelected === false){
    return(
      <h1>Options Route</h1>
    );
  }
  if(props.user !== null && optionsSelected === true){
    return(
      <h1>Game Board</h1>
    );
  }
}

GameController.propTypes = {
  user: PropTypes.any
}

export default GameController