import React, { useRef, useEffect, useState } from 'react';

const Carousel = (props) => {
  const itemsRef = useRef(null)
  const { currentPage, pages, pageWidth } = props;
  const [carouselPageWidth, setCarouselPageWidth] = useState(0)

  useEffect(() => { itemsRef.current.scrollLeft = currentPage * carouselPageWidth }, [currentPage, carouselPageWidth])

  useEffect(() => {
    const width = 
      itemsRef.current?.clientWidth - (itemsRef.current?.paddingLeft || 0) - (itemsRef.current?.paddingRight || 0)
    setCarouselPageWidth(width)
  }, [pageWidth])
  
  return (
    <div className="Carousel">
      <div className="Carousel-items u-flex" ref={itemsRef}>
        {pages.map((page) => (
          <div style={{ minWidth: `${carouselPageWidth}px` }}>
            {page}
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Carousel;