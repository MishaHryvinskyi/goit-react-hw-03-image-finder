import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

const ImageGallery = ({ images, openModal }) => (
  <ImageGalleryStyle>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
    ))}
  </ImageGalleryStyle>
);

export default ImageGallery;