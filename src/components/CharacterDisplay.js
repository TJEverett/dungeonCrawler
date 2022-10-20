import React from "react";
import PropTypes from "prop-types";
import CharacterHealthBar from "./CharacterHealthBar";
import CharacterStats from "./CharacterStats";

function CharacterDisplay(props){
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "none",
    width: "auto"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  };

  //Style Function Logic
  function styleCol(columnNumber){
    const resultString = columnNumber + " / 1";
    return({gridArea: resultString});
  }

  //Render Logic
  if(props.simple === false){
    return(
      <React.Fragment>
        <div style={styleTable}>
          <div style={{...styleCenter, ...styleCol(1)}}>
            <p>{props.character.name}</p>
          </div>
          <div style={styleCol(2)}>
            <CharacterStats character={props.character} />
          </div>
          <div style={{...styleCenter, ...styleCol(3)}}>
            <button onClick={props.buttonFunc}>Delete Character</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
  if(props.simple === true){
    return(
      <React.Fragment>
        <div style={styleTable}>
          <div style={{ ...styleCenter, ...styleCol(1) }}>
            <p>{props.character.name}</p>
          </div>
          <div style={styleCol(2)}>
            <CharacterHealthBar healthMax={props.character.health.max} healthCurrent={props.character.health.current} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CharacterDisplay.propTypes = {
  character: PropTypes.object,
  buttonFunc: PropTypes.func,
  simple: PropTypes.bool
};

CharacterDisplay.defaultProps = {
  character: {
    name: "",
    killCount: 0,
    health: {
      max: 1,
      current: 0
    },
    aim: {
      melee: 0,
      range: 0,
      magic: 0
    },
    dodge: {
      melee: 0,
      range: 0,
      magic: 0
    }
},
  buttonFunc: () => {console.log("no button passed to CharacterDisplay component")},
  simple: true
};

export default CharacterDisplay;