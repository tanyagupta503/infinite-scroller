import React, { useEffect, useRef, useState } from 'react';

const InfiniteScroller = (props) => {
  const observerRef = useRef(null);

  const observerCallback = ([entry]) => {
    if (entry.isIntersecting) {
      props.callback();
    }
  };

  useEffect(() => {
    if (props.shouldDisconnect) {
      observerRef.current.innerText = 'All Products Loaded';
    }
  }, [props.shouldDisconnect]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1.0,
    });
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [props.shouldDisconnect]);
  return (
    <>
      {props.children}
      <div ref={observerRef}>Load Next Page...</div>
    </>
  );
};

export default InfiniteScroller;
