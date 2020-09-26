import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card } from "react-materialize"

const ServiceCards = props => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        serviceCards {
          content
          name
          icon
        }
      }
    }
  `)

  return (
    <div className="u-flex u-flexJustifyCenter service-cards">
    {/* <Row> */}
      {data.homeJson.serviceCards.map((card) => (

        <Card key={card.name} className="service-card">
          <div className="u-flex u-flexJustifyCenter">
            <i class="large material-icons">{card.icon}</i>
          </div>
          {card.content}
        </Card>
      ))}
    </div>
  );
};

export default ServiceCards;
