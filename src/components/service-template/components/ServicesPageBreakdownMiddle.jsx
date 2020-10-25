import React from 'react'
import Img from 'gatsby-image';
import Carousel from 'components/generic-components/Carousel';
import CarouselPage from 'components/service-template/components/CarouselPage';

const ServicesPageBreakdownMiddle = (props) => {
  const { image, decrementPage, incrementPage, carouselPages, page } = props;

  return (
    <div className="servicesPageBreakdown-middle u-flex u-flexWrap">
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
  );
};

export default ServicesPageBreakdownMiddle;