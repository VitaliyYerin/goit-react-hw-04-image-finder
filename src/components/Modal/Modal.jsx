import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ onClose, selectedImg }) => {
  useEffect(() => {
    const handleKeyEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyEscape);
    return () => {
      window.removeEventListener('keydown', handleKeyEscape);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modalContent}>
        <img src={selectedImg} alt="SelectedImage" />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedImg: PropTypes.string.isRequired,
};

export default Modal;
