import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ReactComponent as Development } from "images/serviceCards/004-programming-1.svg"
import { ReactComponent as Support } from "images/serviceCards/002-computer.svg"
import { ReactComponent as Automation } from "images/serviceCards/machinery.svg"
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
          type
        }
      }
    }
  `)
  let iconMap = {
    development: <Development />,
    support: <Support />,
    automation: <Automation />,
    analytics: <Analytics />,
  }

  return (
    <div className="row serviceCardWrapper container no-margin">
      <div className="container">
        <h2 className="topper title-period">Services we offer</h2>
      </div>
      <div className="u-flex u-flexJustifyCenter u-flexWrap service-cards">
        {data.homeJson.serviceCards.map(card => (
            <Card title={card.name} content={`${card.content} ${card.body}`} icon={iconMap[card.type]} type={card.type} />

        ))}
      </div>
    </div>
  )
}

export default ServiceCards
