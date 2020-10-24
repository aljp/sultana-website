import React from 'react';
import Card from 'components/generic-components/Card';

const ServicesPageAdvantages = (props) => {
  const { iconMap } = props;
  const { blurb, cards } = props.data

  return (
    <div className="servicesAdvantages">
      <div className="servicesAdvantages-header topper">
        <h2 className="title-period">Advantages</h2>
      </div>
      <div className="servicesAdvantages-blurb">
        <p>{blurb}</p>
      </div>
      <div className="container serviceAdvantages-cards u-flex u-flexJustifyCenter u-flexAlignItemsCenter u-flexWrap">
        {cards.map((card) => (
          <Card title={card.title} content={card.content} icon={iconMap[card.title]} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPageAdvantages;