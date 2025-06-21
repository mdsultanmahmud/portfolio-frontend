import React from "react";
import "./CustomModal.css";
import { RxCross1 } from "react-icons/rx";

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="portfolio__modal__overlay" onClick={onClose}>
      <div
        className="portfolio__modal__container scroll__hidden slide__up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="portfolio__modal__close" onClick={onClose}>
          <span>
            <RxCross1 size={16}/>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
