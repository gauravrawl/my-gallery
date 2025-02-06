import React from 'react';
import '../styles/photoCard.css';
import { Images } from '../types/images';
interface ImageCardProps {
  image: Images,
  onClick: (image: Images) => void;
}

const PhotoCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <img
      key={image?.id}
      src={image?.urls.small}
      alt={image?.alt_description || 'gallery_photo'}
      className="image-card"
      onClick={() => onClick(image)}
    />
  );
};

export default PhotoCard;
