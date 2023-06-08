import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyle, ImageGalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;
    return (
      <ImageGalleryItemStyle>
        <ImageGalleryItemImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => openModal(image)}
        />
      </ImageGalleryItemStyle>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;