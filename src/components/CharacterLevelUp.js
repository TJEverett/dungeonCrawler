import React from "react";
import PropTypes from "prop-types";

function CharacterLevelUp(props) {
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "15vh 15vh 15vh 15vh"
  };
  const styleButton = {
    color: "green",
    fontSize: "300%"
  }

  //Return Logic
  return (
    <React.Fragment>
      <h1 className="centered">Choose Stat For Level Up</h1>
      <div style={styleTable}>
        <div className="centered">
          <p>Max Health: <strong>{props.character.health.max}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("health")}>+</button>
        </div>
        <div /> {/* Takes up a place in the table */}
        <div className="centered">
          <p>Melee Aim: <strong>{props.character.aim.melee}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("aimMelee")}>+</button>
        </div>
        <div className="centered">
          <p>Melee Dodge: <strong>{props.character.dodge.melee}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("dodgeMelee")}>+</button>
        </div>
        <div className="centered">
          <p>Range Aim: <strong>{props.character.aim.range}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("aimRange")}>+</button>
        </div>
        <div className="centered">
          <p>Range Dodge: <strong>{props.character.dodge.range}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("dodgeRange")}>+</button>
        </div>
        <div className="centered">
          <p>Magic Aim: <strong>{props.character.aim.magic}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("aimMagic")}>+</button>
        </div>
        <div className="centered">
          <p>Magic Dodge: <strong>{props.character.dodge.magic}</strong></p>
          <button style={styleButton} onClick={() => props.statPicker("dodgeMagic")}>+</button>
        </div>
      </div>
    </React.Fragment>
  )
}

CharacterLevelUp.propTypes = {
  character: PropTypes.object,
  statPicker: PropTypes.func
}

CharacterLevelUp.defaultProps = {
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
  statPicker: () => {console.log("ERR: CharacterLevelUp has no function")}
}

export default CharacterLevelUp;