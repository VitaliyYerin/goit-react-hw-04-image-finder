import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

class Modal extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.modalRoot = document.getElementById('modalRoot');
  }


  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEscape);
  }

  handleKeyEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modalContent}>{this.props.children}</div>
      </div>,
      this.modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
