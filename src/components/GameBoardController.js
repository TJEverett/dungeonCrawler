import React from "react";
import PropTypes from "prop-types";
import CharacterDisplay from "./CharacterDisplay";

function GameBoardController(props){
  //Temp Variables
  let map = props.map.map;
  const mapSize = props.map.size;
  let playerPosition = [0, 0];
  let playerStats = props.character;
  let enemyStats = null;
  let battleMode = false;
  for(let a = 0; a < map.length; a++){
    for(let b = 0; b < map[a].length; b++){
      if(map[a][b] === "U"){
        playerPosition = [a, b];
      }
    }
  }

  //Style Logic
  const styles = {
    arrows: {
      up: {
        height: 0,
        width: 0,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "25px solid grey"
      },
      down: {
        height: 0,
        width: 0,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderTop: "25px solid grey"
      },
      left: {
        height: 0,
        width: 0,
        borderBottom: "25px solid transparent",
        borderTop: "25px solid transparent",
        borderRight: "25px solid grey"
      },
      right: {
        height: 0,
        width: 0,
        borderBottom: "25px solid transparent",
        borderTop: "25px solid transparent",
        borderLeft: "25px solid grey"
      }
    },
    tables: {
      vertical: {
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "24% 2% 43% 2% 29%",
        height: "80vh"
      },
      top: {
        display: "grid",
        gridTemplateColumns: "10% 35% 10% 35% 10%",
        gridTemplateRows: "100%"
      },
      middle: {
        display: "grid",
        gridTemplateColumns: "10% 80% 10%",
        gridTemplateRows: "100%"
      },
      bottom: {
        display: "grid",
        gridTemplateColumns: "10% 35% 10% 35% 10%",
        gridTemplateRows: "100%"
      },
      movement: {
        display: "grid",
        gridTemplateColumns: "auto 5vh 7vh 5vh auto",
        gridTemplateRows: "auto 5vh 7vh 5vh auto"
      }
    }
  };
  function tablePosition(columnNumber, rowNumber){
    const resultString = rowNumber + " / " + columnNumber;
    return({gridArea: resultString});
  }

  //Combat Logic

  //Movement Logic
  function checkMovePossible(direction){
    let result = false;
    let newLocation = [];
    const directionCleansed = direction.toLowerCase();
    if(directionCleansed === "up"){
      if(playerPosition[0] !== 0){
        newLocation = [(playerPosition[0] - 1), (playerPosition[1])];
        if(map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }else if(directionCleansed === "down"){
      if(playerPosition[0] !== (mapSize - 1)){
        newLocation = [(playerPosition[0] + 1), (playerPosition[1])];
        if(map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }else if(directionCleansed === "left"){
      if(playerPosition[1] !== 0){
        newLocation = [(playerPosition[0]), (playerPosition[1] - 1)];
        if(map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }else if(directionCleansed === "right"){
      if(playerPosition[1] !== (mapSize - 1)){
        newLocation = [(playerPosition[0]), (playerPosition[1] + 1)];
        if(map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }
    return result;
  }
  function movePlayer(direction){
    const directionCleansed = direction.toLowerCase();
    console.log("player moved " + directionCleansed);
  }


  //Render Function Logic
  function buildArrow(direction, columnNumber, rowNumber){
    const directionCleansed = direction.toLowerCase();
    if(checkMovePossible(directionCleansed)){
      if(directionCleansed === "up"){
        return(<div className="centered" style={tablePosition(columnNumber, rowNumber)} onClick={() => movePlayer("up")}><div style={styles.arrows.up}></div></div>);
      }else if(directionCleansed === "down"){
        return(<div className="centered" style={tablePosition(columnNumber, rowNumber)} onClick={() => movePlayer("down")}><div style={styles.arrows.down}></div></div>);
      }else if(directionCleansed === "left"){
        return(<div className="centered" style={tablePosition(columnNumber, rowNumber)} onClick={() => movePlayer("left")}><div style={styles.arrows.left}></div></div>);
      }else if(directionCleansed === "right"){
        return(<div className="centered" style={tablePosition(columnNumber, rowNumber)} onClick={() => movePlayer("right")}><div style={styles.arrows.right}></div></div>);
      }
    }
  }
  function healthRender(render, character){
    if(render){
      return(<CharacterDisplay simple={true} character={character} />);
    }
  }

  //Return Logic
  return(
    <React.Fragment>
      <div style={styles.tables.vertical}>
        <div style={{...tablePosition(1, 1), ...styles.tables.top}}>
          <div style={tablePosition(2, 1)}>
            {healthRender(true, playerStats)}
          </div>
          <div style={tablePosition(4, 1)}>
            {healthRender(battleMode, enemyStats)}
          </div>
        </div>
        <div style={{...tablePosition(1, 3), ...styles.tables.middle}}>
          <div style={tablePosition(2, 1)}>
            <p>Map</p>
          </div>
        </div>
        <div style={{...tablePosition(1, 5), ...styles.tables.bottom}}>
          <div style={tablePosition(2, 1)}>
            <p>Attacks</p>
          </div>
          <div style={{...tablePosition(4, 1), ...styles.tables.movement}}>
            {buildArrow("up", 3, 2)}
            {buildArrow("left", 2, 3)}
            {buildArrow("right", 4, 3)}
            {buildArrow("down", 3, 4)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

GameBoardController.propTypes = {
  enemyList: PropTypes.array,
  map: PropTypes.array,
  character: PropTypes.object
}

GameBoardController.defaultProps = {
  enemyList: [{
    difficulty: 1,
    name: "",
    healthMax: 1,
    meleeAim: 0,
    rangeAim: 0,
    magicAim: 0,
    attackStyle: "melee",
    meleeDodge: 0,
    rangeDodge: 0,
    magicDodge: 0
  }],
  map: {
    size: 3,
    map:[
      ["U", "X", "D"],
      ["-", "X", "-"],
      ["-", "E", "-"]
    ]
  },
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
  }
}

export default GameBoardController;