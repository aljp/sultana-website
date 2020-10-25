import React from 'react'

const CarouselPage = ({ width, title, content }) => (
  <div className="CarouselPage" style={{ width: width }}>
    <h4>{title}:</h4>
    <p>{content}</p>
  </div>
);

export default CarouselPage;