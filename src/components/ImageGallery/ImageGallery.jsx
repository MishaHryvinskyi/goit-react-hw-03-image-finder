import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

const ImageGallery = ({ images }) => (
  <ImageGalleryStyle>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </ImageGalleryStyle>
);

export default ImageGallery;