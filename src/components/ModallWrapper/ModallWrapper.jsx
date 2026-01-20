import React from "react";
import "./ModallWrapper.css"
const ModallWrapper = ({children, onClose}) => {
  return (
    <>
      <div onClick={onClose} className="modal-overlay"></div>
      <div className="modal-content">{children}</div>
    </>
  );
};

export default ModallWrapper;
