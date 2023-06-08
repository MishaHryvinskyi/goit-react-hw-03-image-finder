import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;
    return (
      <ImageGalleryStyle>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
        ))}
      </ImageGalleryStyle>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;