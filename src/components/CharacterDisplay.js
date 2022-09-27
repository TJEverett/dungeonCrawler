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
            <CharacterHealthBar healthMax={props.character.healthMax} healthCurrent={props.character.healthCurrent} />
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
    healthMax: 1,
    healthCurrent: 0,
    meleeAim: 0,
    meleeDodge: 0,
    rangeAim: 0,
    rangeDodge: 0,
    magicAim: 0,
    magicDodge: 0,
    killCount: 0
},
  buttonFunc: () => {console.log("no button passed to CharacterDisplay component")},
  simple: true
};

export default CharacterDisplay;