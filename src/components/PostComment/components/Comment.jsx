import Modal from '../../Modal/Modal';
import React, { useState } from 'react';
import '../style.css';
import { MdOutlineMailOutline } from 'react-icons/md';

const Comment = ({ email, name, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='comments'>
      <div className='column'>
        <span className='name'>
          <h3>Name: </h3>
          {name}
        </span>

        <div className='email'>
          <h5>Email: </h5>
          <div>
            {email}
            <span className='email-icon'>
              <MdOutlineMailOutline className='icon-email' />
            </span>
          </div>
        </div>

        <div className='modal-component'>
          <button className='open-modal' onClick={toggleModal}>
            Open Comment
          </button>
          {isOpen && <Modal body={body} toggleModal={toggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default Comment;
