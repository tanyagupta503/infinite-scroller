import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product-container'>
      <img src={product.image} height='200px' alt='product'></img>
      <div className='product-description'>{product.title}</div>
    </div>
  );
};

export default Product;
