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
          <p>Max Health: <strong>{props.character.health.max}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Kill Count: <strong>{props.character.killCount}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Melee Aim: <strong>{props.character.aim.melee}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Melee Dodge: <strong>{props.character.dodge.melee}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Range Aim: <strong>{props.character.aim.range}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Range Dodge: <strong>{props.character.dodge.range}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Magic Aim: <strong>{props.character.aim.magic}</strong></p>
        </div>
        <div style={styleCenter}>
          <p>Magic Dodge: <strong>{props.character.dodge.magic}</strong></p>
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
  }
}

export default CharacterStats;