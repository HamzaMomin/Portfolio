import React from "react";
import './modal.css';

    //Modal in React is known for pop up Screen//

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
