import React from "react";
import PropTypes from "prop-types";

function GameOptionSelector(props){
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  };

  //Submit Function Logic
  function tempFunction(event) {
    event.preventDefault();
  }

  //Render Function Logic
  function characterRender(){
    if(props.character === null){
      return(
        <form onSubmit={tempFunction}>
          <input
            type="text"
            name="HeroName"
            placeholder="Hero"
            defaultValue="Hero" />
          <button type="submit">Create Hero</button>
        </form>
      );
    }else{
      return(<h1>Character Data</h1>);
    }
  }

  function buildSelect(idValue){
    const optionsList = [{ optionValue: 1, displayString: "Difficulty 1" }, { optionValue: 2, displayString: "Difficulty 2" }, { optionValue: 3, displayString: "Difficulty 3" }, { optionValue: 4, displayString: "Difficulty 4" }, { optionValue: 5, displayString: "Difficulty 5" }];
    let selectListOptions = [];
    optionsList.forEach((entry, index) => {
      selectListOptions.push(<option key={index} value={entry.optionValue}>{entry.displayString}</option>);
    });
    return(<select name={idValue} id={idValue}>{selectListOptions}</select>);
  }


  //Return Logic
  return(
    <React.Fragment>
      <div style={styleTable}>
        <div style={styleCenter}>
          {characterRender()}
        </div>
        <div style={styleCenter}>
          <form onSubmit={tempFunction}>
            {buildSelect("difficulty")}
            <button type="submit">Choose Difficulty</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

GameOptionSelector.propTypes = {
  character: PropTypes.object
}

GameOptionSelector.defaultProps = {
  character: null
}

export default GameOptionSelector;