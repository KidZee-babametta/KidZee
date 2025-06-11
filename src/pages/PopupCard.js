import React, { useState } from 'react';
import './PopupCard.css';

function PopupCard() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="popup-card">
        <div className="popup-card-content">
          <img
            src="/Images/pop-up-card.jpg"
            alt="Popup Card"
            className="popup-card-image"
          />
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>
      </div>
    )
  );
}

export default PopupCard;
