import React from "react";
import PropTypes from "prop-types";

function GameMap(props){
  //Internal Variables
  let gameMap = JSON.parse(JSON.stringify(props.gameBoard));
  gameMap[props.playerPosition[0]][props.playerPosition[1]] = "P";

  //Style Logic
  const verticalTable = {
    display: "grid",
    gridTemplateRows: "50px ".repeat(props.size)
  };
  const horizontalTable = {
    display: "grid",
    gridTemplateColumns: "50px ".repeat(props.size)
  };
  const styleFrame = {
    border: "1px solid black",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  //Render Functions
  function fillCell(piece){
    if(piece === "X" || piece === "E" || piece === "U" || piece === "D" || piece === "P"){
      return(<strong>{piece}</strong>);
    }else{
      return(null);
    }
  }

  //Return Logic
  return(
    <React.Fragment>
      <div style={verticalTable}>
        {gameMap.map((verticalEntry, index) => {
          return(
            <div style={horizontalTable} key={"vertical-" + index}>
              {verticalEntry.map((horizontalCell, index) => {
                return(
                 <div style={styleFrame} key={"horizontal-" + index}>
                  {fillCell(horizontalCell)}
                </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

GameMap.propTypes = {
  gameBoard: PropTypes.array,
  playerPosition: PropTypes.array,
  size: PropTypes.number
};

GameMap.defaultProps = {
  gameBoard: [
    ["U", "X", "D"],
    ["-", "X", "-"],
    ["-", "E", "-"]
  ],
  playerPosition: [0, 0],
  size: 3
};

export default GameMap;