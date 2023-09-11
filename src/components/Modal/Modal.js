import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Modal.css';

const Modal = ({ toggleModal, body }) => {
  return (
    <div className='modal-block'>
      <div className='modal'>
        <div onClick={toggleModal} className='overlay'></div>

        <div className='modal-content'>
          <h2>Comment</h2>

          <p>{body}</p>

          <div onClick={toggleModal} className='modal-close'>
            <AiFillCloseCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
