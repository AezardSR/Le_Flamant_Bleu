import React from "react";
import "../css/styles.css";

function Modal({button, title, content}) {

  return (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modal-title">{title}</div>
            <p>{content}</p>
            <button className="close-modal btn-modal" onClick={button}>X</button>
          </div>
        </div>
  );
}

export default Modal