import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <BtnLoadMore onClick={onClick}>Load more</BtnLoadMore>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;