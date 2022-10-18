import React from "react";
import PropTypes from "prop-types";
import fakeDataCalls from "../dummyData/database-response.json";
import GameOptionSelector from "./GameOptionSelector";
import GameBoardController from "./GameBoardController";

function GameController(props){
  //Temp Values
  // const optionsSelected = false;
  const optionsSelected = true;
  const mapArray = fakeDataCalls.mapResponseArray;
  const enemyArray = fakeDataCalls.enemyResponseArray;
  let characterData = null;
  if(props.user !== null){
    characterData = fakeDataCalls.characterResponse.filter(char => char.userId === props.user.id)[0] || null;
  }

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
  if(props.user !== null && (optionsSelected === false || characterData === null)){
    return(
      <GameOptionSelector character={characterData} />
    );
  }
  if(props.user !== null && (optionsSelected === true && characterData !== null)){
    return(
      <React.Fragment>
        <GameBoardController enemyList={enemyArray} map={mapArray[2]} character={{...characterData, healthCurrent: 100}} />
      </React.Fragment>
    );
  }
}

GameController.propTypes = {
  user: PropTypes.any
}

export default GameController