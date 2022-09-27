import React from "react";
import PropTypes from "prop-types";

function CharacterStats(props) {
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    width: "auto"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center"
  };

  //Return Logic
  return(
    <React.Fragment>
      <div style={styleTable}>
        <div style={styleCenter}>
          <p>Max Health: <strong>{props.character.healthMax}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Kill Count: <strong>{props.character.killCount}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Melee Aim: <strong>{props.character.meleeAim}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Melee Dodge: <strong>{props.character.meleeDodge}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Range Aim: <strong>{props.character.rangeAim}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Range Dodge: <strong>{props.character.rangeDodge}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Magic Aim: <strong>{props.character.magicAim}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Magic Dodge: <strong>{props.character.magicDodge}</strong></p>
        </div>
      </div>
    </React.Fragment>
  )
}

CharacterStats.propTypes = {
  character: PropTypes.object
}

CharacterStats.defaultProps = {
  character: {
    healthMax: 0,
    meleeAim: 0,
    meleeDodge: 0,
    rangeAim: 0,
    rangeDodge: 0,
    magicAim: 0,
    magicDodge: 0,
    killCount: 0
  }
}

export default CharacterStats;