import React from "react";
import PropTypes from "prop-types";

function CharacterHealthBar(props) {
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "10% 80% 10%",
    gridTemplateRows: "1fr",
    width: "auto"
  };
  const styleGreyBack = {
    backgroundColor: "grey"
  };

  //Style Function Logic
  function healthBarRender(){
    const healthMissing = Math.abs(props.healthMax - props.healthCurrent)
    const barStyle = {
      display: "grid",
      gridTemplateRows: "1fr",
      gridTemplateColumns: props.healthCurrent + "fr " + healthMissing + "fr",
      width: "auto"
    };
    return(barStyle);
  }
  function gridSelect(columnNumber, rowNumber){
    const resultString = columnNumber + " / " + rowNumber;
    return({gridArea: resultString});
  }
  function healthColorPicker(){
    const red = {backgroundColor: "red"};
    const yellow = {backgroundColor: "yellow"};
    const green = {backgroundColor: "green"};
    const healthLow = props.healthMax * 0.1;
    const healthMid = props.healthMax * 0.5;
    if(props.healthCurrent >= healthMid){
      return(green);
    }else if(props.healthCurrent >= healthLow){
      return(yellow);
    }else{
      return(red);
    }
  }

  //Return Logic
  return(
    <React.Fragment>
      <div style={styleTable}>
        <div style={{...healthBarRender(), ...gridSelect(1, 2)}}>
          <div style={{...healthColorPicker(), ...gridSelect(1, 1)}} />
          <div style={{...styleGreyBack, ...gridSelect(1, 2)}} />
        </div>
        <div style={gridSelect(1, 3)}>
          <p>{props.healthCurrent} / {props.healthMax}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

CharacterHealthBar.propTypes = {
  healthMax: PropTypes.number,
  healthCurrent: PropTypes.number
}

CharacterHealthBar.defaultProps = {
  healthMax: 1,
  healthCurrent: 0
}

export default CharacterHealthBar;