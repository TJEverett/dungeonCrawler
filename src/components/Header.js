import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props){
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "2fr 3fr 2fr",
    gridTemplateRows: "1fr"
  };
  const styleLeft = {
    display: "flex",
    justifyContent: "flex-start"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center"
  };
  const styleRight = {
    display: "flex",
    justifyContent: "flex-end"
  };

  //Render Logic
  function AdminAccess(){
    if(props.user != null){
      if(props.user.admin === true){
        return(<Link to="/Create"><button>Level Creation</button></Link>);
      }else{
        return(null);
      }
    }
  }

  //Return Logic
  return(
    <React.Fragment>
      <h1 style={styleCenter}>Dungeon Crawler</h1>

      <div style={styleTable}>
        <div style={styleRight}>
          <Link to="/Game"><button>Game</button></Link>
        </div>
        <div style={styleCenter}>
          {AdminAccess()}
        </div>
        <div style={styleLeft}>
          <Link to="/User"><button>Account</button></Link>
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

Header.propTypes = {
  user: PropTypes.any
}

export default Header;