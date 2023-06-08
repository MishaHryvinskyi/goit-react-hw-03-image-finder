import React from 'react';
import { BtnLoadMore } from './Button.styled';


const Button = ({ onClick }) => {
  return (
    <BtnLoadMore onClick={onClick}>Load more</BtnLoadMore>
  );
};

export default Button;