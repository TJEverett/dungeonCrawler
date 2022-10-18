import React from "react";
import PropTypes from "prop-types";
import CharacterDisplay from "./CharacterDisplay";
import CustomIFrame from "./CustomIFrame";
import GameMap from "./GameMap";

class GameBoardController extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      map: props.map.map,
      mapSize: props.map.size,
      playerPosition: [0, 0],
      battleMode: false,
      playerStats: props.character,
      enemyStats: null
    };
  }

  componentDidMount(){
    let startingPosition = this.state.playerPosition
    for(let a = 0; a < this.state.map.length; a++){
      for(let b = 0; b < this.state.map[a].length; b++){
        if(this.state.map[a][b] === "U"){
          startingPosition = [a, b];
        }
      }
    }
    this.setState({playerPosition: startingPosition});
  }

  //Styles Object
  styles = {
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
        height: "100vh"
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

  //Combat Logic

  //Movement Logic
  checkMovePossible(direction){
    let result = false;
    let newLocation = [];
    const directionCleansed = direction.toLowerCase();
    if(directionCleansed === "up"){
      if(this.state.playerPosition[0] !== 0){
        newLocation = [(this.state.playerPosition[0] - 1), (this.state.playerPosition[1])];
        if(this.state.map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }else if(directionCleansed === "down"){
      if(this.state.playerPosition[0] !== (this.state.mapSize - 1)){
        newLocation = [(this.state.playerPosition[0] + 1), (this.state.playerPosition[1])];
        if(this.state.map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }else if(directionCleansed === "left"){
      if(this.state.playerPosition[1] !== 0){
        newLocation = [(this.state.playerPosition[0]), (this.state.playerPosition[1] - 1)];
        if(this.state.map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }else if(directionCleansed === "right"){
      if(this.state.playerPosition[1] !== (this.state.mapSize - 1)){
        newLocation = [(this.state.playerPosition[0]), (this.state.playerPosition[1] + 1)];
        if(this.state.map[newLocation[0]][newLocation[1]] !== "X"){
          result = true;
        }
      }
    }
    return result;
  }
  movePlayer(direction){
    const directionCleansed = direction.toLowerCase();
    let tempPosition = this.state.playerPosition;
    console.log("player moved " + directionCleansed);
    if(directionCleansed === "up"){
      tempPosition = [(tempPosition[0] - 1), tempPosition[1]];
    }else if(directionCleansed === "down"){
      tempPosition = [(tempPosition[0] + 1), tempPosition[1]];
    }else if(directionCleansed === "left"){
      tempPosition = [tempPosition[0], (tempPosition[1] - 1)];
    }else if(directionCleansed === "right"){
      tempPosition = [tempPosition[0], (tempPosition[1] + 1)];
    }
    this.setState({playerPosition: tempPosition});
  }


  //Render Function Logic
  buildArrow(direction, stylePosition){
    const directionCleansed = direction.toLowerCase();
    if(this.checkMovePossible(directionCleansed)){
      if(directionCleansed === "up"){
        return(<div className="centered" style={stylePosition} onClick={() => this.movePlayer("up")}><div style={this.styles.arrows.up}></div></div>);
      }else if(directionCleansed === "down"){
        return(<div className="centered" style={stylePosition} onClick={() => this.movePlayer("down")}><div style={this.styles.arrows.down}></div></div>);
      }else if(directionCleansed === "left"){
        return(<div className="centered" style={stylePosition} onClick={() => this.movePlayer("left")}><div style={this.styles.arrows.left}></div></div>);
      }else if(directionCleansed === "right"){
        return(<div className="centered" style={stylePosition} onClick={() => this.movePlayer("right")}><div style={this.styles.arrows.right}></div></div>);
      }
    }
  }
  healthRender(render, character){
    if(render){
      return(<CharacterDisplay simple={true} character={character} />);
    }
  }


  render(){
    //Style Logic
    function tablePosition(columnNumber, rowNumber) {
      const resultString = rowNumber + " / " + columnNumber;
      return ({ gridArea: resultString });
    }
    
    //Return Logic
    return(
      <React.Fragment>
        <div style={this.styles.tables.vertical}>
          <div style={{...tablePosition(1, 1), ...this.styles.tables.top}}>
            <div style={tablePosition(2, 1)}>
              {this.healthRender(true, this.state.playerStats)}
            </div>
            <div style={tablePosition(4, 1)}>
              {this.healthRender(this.state.battleMode, this.state.enemyStats)}
            </div>
          </div>
          <div style={{...tablePosition(1, 3), ...this.styles.tables.middle}}>
            <div style={tablePosition(1, 1)}>
              <p>P: Player</p>
              <p>X: Wall</p>
              <p>E: Enemy</p>
              <p>U: Entrance</p>
              <p>D: Exit</p>
            </div>
            <div style={tablePosition(2, 1)}>
              <CustomIFrame title='game Map' style={{height: "43vh", width: "80vw"}}>
                <GameMap gameBoard={this.state.map} playerPosition={this.state.playerPosition} size={this.state.mapSize} />
              </CustomIFrame>
            </div>
          </div>
          <div style={{...tablePosition(1, 5), ...this.styles.tables.bottom}}>
            <div style={tablePosition(2, 1)}>
              <p>Attacks</p>
            </div>
            <div style={{...tablePosition(4, 1), ...this.styles.tables.movement}}>
              {this.buildArrow("up", tablePosition(3, 2))}
              {this.buildArrow("left", tablePosition(2, 3))}
              {this.buildArrow("right", tablePosition(4, 3))}
              {this.buildArrow("down", tablePosition(3, 4))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

GameBoardController.propTypes = {
  enemyList: PropTypes.array,
  map: PropTypes.object,
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