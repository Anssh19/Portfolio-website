import React from "react";
import "./Modals.css";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <a href="https://www.screener.in/" className="linkk" target="_blank" rel="noreferrer">
          Click here(GitHub)
        </a>
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
