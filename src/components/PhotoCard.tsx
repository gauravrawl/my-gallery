import React from 'react';
import '../styles/photoCard.css';
import { Images } from '../types/images';

interface ImageCardProps {
  image: Images,
}

const PhotoCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <img
      key={image?.id}
      src={image?.urls.small}
      alt={image?.alt || 'gallery_photo'}
      className="image-card"
    />
  );
};

export default PhotoCard;
