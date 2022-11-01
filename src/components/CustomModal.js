import React from "react";

function CustomModal({ handleClose, show, children }){
  const base = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)"
  };
  const internal = {
    position: "fixed",
    background: "white",
    width: "80%",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const modalStyle = show ? { ...base, display: "block" } : { ...base, display: "none" };

  return(
    <div style={modalStyle}>
      <section style={internal}>
        {children}
        <button type="button" onClick={() => handleClose()}>Close</button>
      </section>
    </div>
  );
}

export default CustomModal;