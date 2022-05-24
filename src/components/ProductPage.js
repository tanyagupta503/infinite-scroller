import React, { useEffect, useState, useRef } from 'react';
import Product from './Product';

const ProductPage = ({ productPage }) => {
  const [prodPage, setProdPage] = useState(productPage);
  const observerRef = useRef(null);
  const observerCallback = ([entry]) => {
    setProdPage((page) => {
      return { ...page, isVisible: entry.isIntersecting };
    });
  };
  useEffect(() => {
    let observer = new IntersectionObserver(observerCallback, [0, 1.0]);
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={observerRef}>
      {prodPage.isVisible ? (
        <div className='grid'>
          {prodPage.data.map((prod, idx) => (
            <Product key={idx} product={prod}></Product>
          ))}
        </div>
      ) : (
        <div className='empty-page'></div>
      )}
    </div>
  );
};
export default ProductPage;
