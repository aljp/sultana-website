import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Row, Card } from "react-materialize"
import CircleSvg from 'components/CircleSvg';
import { ReactComponent as Development } from 'images/serviceCards/004-programming-1.svg';
import { ReactComponent as Optimization } from 'images/serviceCards/002-computer.svg';
import { ReactComponent as Seo } from 'images/serviceCards/005-analytics.svg';
import { ReactComponent as Ecommerce } from 'images/serviceCards/shop.svg';

const ServiceCards = props => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        serviceCards {
          name
          content
          body
          icon
        }
      }
    }
  `)

  const handleOnClick = (e) => e.currentTarget.classList.toggle('active');
  const handleMouseOver = (e) => {
    const target =  e.currentTarget;
    const cardBody = target.querySelector('.card-body');
    
    cardBody.style.display = 'block';
    target.style.height = `${target.clientHeight + cardBody.clientHeight + 40}px`;
  };

  const handleMouseOut = (e) => {
    const target =  e.currentTarget;
    const cardBody = target.querySelector('.card-body');

    target.style.height = `${target.clientHeight - cardBody.clientHeight - 40}px`;
    cardBody.style.display = 'none';
  };

  return (
    <Row>
      <div className="services-header">
        <h2>Services we offer</h2>
      </div>
      <div className="u-flex u-flexJustifyCenter u-flexAlignItemsBaseline u-flexWrap service-cards">
        {data.homeJson.serviceCards.map((card) => (
          <Card key={card.name} className="service-card" onClick={handleOnClick}>
            <div className="u-flex u-flexJustifyCenter" style={{marginBottom: '20px'}}>
              <div className="service-card-icon-wrapper" style={{width: '100px', height: '100px'}}>
                <CircleSvg />
                {card.icon === 'development' && <Development />}
                {card.icon === 'optimization' && <Optimization />}
                {card.icon === 'seo' && <Seo />}
                {card.icon === 'ecommerce' && <Ecommerce />}
              </div>
            </div>
            {card.content}
            <div className="card-body">
              {card.body}
            </div>
          </Card>
        ))}
      </div>
    </Row>
  );
};

export default ServiceCards;
