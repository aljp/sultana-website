import React, { useState } from 'react';
import ServicesPageBreakdownTop from 'components/service-template/components/ServicesPageBreakdownTop';
import ServicesPageBreakdownMiddle from 'components/service-template/components/ServicesPageBreakdownMiddle';
import ServicesPageBreakdownBottom from 'components/service-template/components/ServicesPageBreakdownBottom';

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
      <ServicesPageBreakdownTop page={page} title={title} pageLength={pageLength} />
      <ServicesPageBreakdownMiddle
        image={image}
        decrementPage={decrementPage}
        incrementPage={incrementPage}
        carouselPages={carouselPages}
        page={page}
      />
      <ServicesPageBreakdownBottom price={price} carouselPages={carouselPages} page={page} />
    </div>
  )
};

export default ServicesPageBreakdown;