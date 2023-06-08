import React from 'react';
import { ImageGalleryItemStyle, ImageGalleryItemImage } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ image }) => (
  <ImageGalleryItemStyle>
    <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
  </ImageGalleryItemStyle>
);

export default ImageGalleryItem;