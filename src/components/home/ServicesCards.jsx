import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ReactComponent as Development } from "images/serviceCards/004-programming-1.svg"
import { ReactComponent as Optimization } from "images/serviceCards/002-computer.svg"
import { ReactComponent as Seo } from "images/serviceCards/005-analytics.svg"
import { ReactComponent as Analytics } from "images/serviceCards/data-analytics.svg"
import Card from 'components/generic-components/Card'

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
  let iconMap = {
    development: <Development />,
    optimization: <Optimization />,
    seo: <Seo />,
    analytics: <Analytics />,
  }

  return (
    <div className="row serviceCardWrapper container no-margin">
      <div className="container">
        <h2 className="topper title-period">Services we offer</h2>
      </div>
      <div className="u-flex u-flexJustifyCenter u-flexWrap service-cards">
        {data.homeJson.serviceCards.map(card => (
          <Card title={card.name} content={`${card.content} ${card.body}`} icon={iconMap[card.icon]} />
        ))}
      </div>
    </div>
  )
}

export default ServiceCards
