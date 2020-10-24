import React, { useState } from 'react';
import Img from 'gatsby-image';
import Carousel from 'components/generic-components/Carousel';
import CarouselPage from 'components/service-template/components/CarouselPage';
import CarouselIndicator from 'components/service-template/components/CarouselIndicator';

const ServicesPageBreakdown = (props) => {
  const { image, data } = props;
  const carouselPages = data.pages;
  const { title, price } = data;
  const [page, setPage] = useState(0);
  const pageLength = carouselPages.length

  const incrementPage = () => {
    setPage((page + 1) % pageLength);
  };

  const decrementPage = () => {
    setPage((page + pageLength - 1) % pageLength);
  }

  return (
    <div className="servicesPageBreakdown">
      <div className="servicesPageBreakdown-top u-flex u-flexJustifyBetween container">
        <div className="servicesPageBreakdown-header">
          <h2 className="topper">{title}</h2>
        </div>
        <div className="servicesPageBreakdown-counter u-flex u-flexAlignItemsEnd">
          {[...Array(pageLength).keys()].map((index) => (
            <div className={page === index ? "active" : ''}>0{index + 1}</div>
          ))}
        </div>
      </div>
      <div className="servicesPageBreakdown-middle u-flex">
        <div style={{ marginRight: '100px' }}>
          <Img fluid={image} style={{ width: '46vw' }} />
        </div>
        <div className="u-flex u-flexCol u-flexAlignItemsCenter">
          <div>
            <Carousel
              currentPage={page}
              pages={carouselPages.map(({ title, content }) => (
                <CarouselPage
                  key={title}
                  title={title}
                  content={content}
                />
              ))}
            />
          </div>
          <div>
            <button onClick={decrementPage} ariaLabel="move carousel left" type="button" className="btn-plaintext">
              <span className="material-icons">keyboard_arrow_left</span>
            </button>
            <button onClick={incrementPage} ariaLabel="move carousel right" type="button" className="btn-plaintext">
              <span className="material-icons">keyboard_arrow_right</span>
            </button>
          </div>
        </div>
      </div>
      <div className="servicesPageBreakdown-bottom container">
        <div className="servicesPageBreakdown-bottomHeader u-flex u-flexAlignItemsEnd">
          <div style={{ position: 'relative' }}>
            <div className="topper">
              <h2 className="title-period"><b>Price</b></h2>
            </div>
          </div>
          <span style={{ fontColor: 'gray' }}>from</span>
          <span>${price.amount}</span>
        </div>
        <div className="servicesPageBreakdown-bottomText">
          <p>{price.description}</p>
        </div>
        <h5><b>Stages of development</b></h5>
      </div>
      <div className="servicesPageBreakdown-indicator">
        <div className="servicesPageBreakdown-bottomIndicatorsContainer">
          <div className="container  u-flex u-flexJustifyBetween">
            {[...Array(pageLength).keys()].map((index) => (
              <CarouselIndicator className={`${index === page ? 'active' : ''}`}/>
            ))}
          </div>

          <div className="strike-through-container u-flex u-flexAlignItemsCenter">
            <div className="strike-through"></div>
          </div>
        </div>
        <div className="container u-flex u-flexJustifyBetween">
          {[...carouselPages.map((page) => page.title)].map((title) => (
            <b>{title}</b>
          ))}
        </div>
      </div>
    </div>
  )
};

export default ServicesPageBreakdown;