import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Row, Card } from "react-materialize"

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

  return (
    <Row>
      <div className="u-flex u-flexJustifyCenter u-flexAlignItemsBaseline service-cards">
        {data.homeJson.serviceCards.map((card) => (
          <Card key={card.name} className="service-card">
            <div className="u-flex u-flexJustifyCenter">
              <i class="large material-icons">{card.icon}</i>
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
