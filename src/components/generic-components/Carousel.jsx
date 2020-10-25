import React, { useRef, useEffect, useState } from 'react';

const Carousel = (props) => {
  const itemsRef = useRef(null)
  const { currentPage, pages } = props;
  const [pageWidth, setPageWidth] = useState(0)

  useEffect(() => { itemsRef.current.scrollLeft = currentPage * pageWidth }, [currentPage, pageWidth])

  useEffect(() => {
    const width = 
      itemsRef.current?.clientWidth - (itemsRef.current?.paddingLeft || 0) - (itemsRef.current?.paddingRight || 0)
    setPageWidth(width)
  }, [])
  
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