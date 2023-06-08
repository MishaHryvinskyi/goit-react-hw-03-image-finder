import React from 'react';
import { ImageGalleryItemStyle, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, openModal }) => (
  <ImageGalleryItemStyle>
    <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} onClick={() => openModal(image)} />
  </ImageGalleryItemStyle>
);

export default ImageGalleryItem;