import React from 'react';
import '../styles/popupModal.css'
import { Images } from '../types/images';

interface ModalProps {
  image: Images;
  onClose: () => void;
}

const PopupModal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div
      className='pop-modal'
      onClick={onClose}
    >
      <img
        src={image?.urls?.regular}
        alt={image?.alt || 'Album Image'}
      />
    </div>
  );
};

export default PopupModal;
