import React, { useContext } from 'react'
import Img from 'gatsby-image';
import Carousel from 'components/generic-components/Carousel';
import CarouselPage from 'components/service-template/components/CarouselPage';
import CarouselIndicator from 'components/service-template/components/CarouselIndicator';
import { GlobalContext } from 'components/GlobalContext'

const ServicesPageBreakdownMiddle = (props) => {
  const { image, decrementPage, incrementPage, carouselPages, setPage, page } = props;
  const { pageWidth } = useContext(GlobalContext);



  return (
    <>
      <div className="servicesPageBreakdown-indicator">
        <div className="servicesPageBreakdown-indicatorContainer">
          <div className="container  u-flex u-flexJustifyBetween">
            {[...carouselPages.map((page) => page.title)].map((title, index) => (
              <CarouselIndicator
                className={`${index === page ? 'active' : ''}`}
                title={title}
                setPage={() => setPage(index)}
              />
            ))}
          </div>
          <div className="strike-through-container">
            <div className="strike-through"></div>
          </div>
        </div>
      </div>
      <div className="servicesPageBreakdown-middle row">
        <div className="col l6 offset-l1 hide-on-med-and-down">
          <Img fluid={image} style={{ width: '46vw' }} />
        </div>
        <div className="col l4 s12 offset-m1">
          <div className="servicesPageBreakdown-middleCarousel u-flex u-flexCol u-flexJustifyBetween">
            <Carousel
              pageWidth={pageWidth}
              currentPage={page}
              pages={carouselPages.map(({ title, content }) => (
                <CarouselPage
                  key={title}
                  title={title}
                  content={content}
                />
              ))}
            />
            <div>
              <button onClick={decrementPage} aria-label="move carousel left" type="button" className="btn-plaintext">
                <span className="material-icons">keyboard_arrow_left</span>
              </button>
              <button onClick={incrementPage} aria-label="move carousel right" type="button" className="btn-plaintext">
                <span className="material-icons">keyboard_arrow_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPageBreakdownMiddle;