import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product-container'>
      <img src={product.image} width='100px' alt='product'></img>
      <div>{product.title}</div>
    </div>
  );
};

export default Product;
