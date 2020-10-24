import React, { useRef, useEffect, cloneElement, Children } from 'react';

const Carousel = (props) => {
  const itemsRef = useRef(null)
  const { currentPage, pages } = props;

  useEffect(() => { itemsRef.current.scrollLeft = currentPage * pageWidth }, [currentPage])

  const pageWidth = 
    itemsRef.current?.clientWidth - (itemsRef.current?.paddingLeft || 0) - (itemsRef.current?.paddingRight || 0)

  
  return (
    <div className="Carousel">
      <div className="Carousel-items u-flex" ref={itemsRef}>
        {pages.map((page) => (
          <div style={{ minWidth: `${pageWidth}px` }}>
            {page}
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Carousel;