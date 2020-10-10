import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Card } from "react-materialize"
import CircleSvg from "components/CircleSvg"
import { ReactComponent as Development } from "images/serviceCards/004-programming-1.svg"
import { ReactComponent as Optimization } from "images/serviceCards/002-computer.svg"
import { ReactComponent as Seo } from "images/serviceCards/005-analytics.svg"
import { ReactComponent as Ecommerce } from "images/serviceCards/shop.svg"

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
    ecommerce: <Ecommerce />,
  }

  const handleOnClick = e => e.currentTarget.classList.toggle("active")
  const handleMouseOver = e => {
    const target = e.currentTarget
    const cardBody = target.querySelector(".card-body")

    cardBody.style.display = "block"
    target.style.height = `${
      target.clientHeight + cardBody.clientHeight + 40
    }px`
  }

  const handleMouseOut = e => {
    const target = e.currentTarget
    const cardBody = target.querySelector(".card-body")

    target.style.height = `${
      target.clientHeight - cardBody.clientHeight - 40
    }px`
    cardBody.style.display = "none"
  }

  return (
    <Row>
      <div className="services-header">
        <h2>Services we offer</h2>
      </div>
      <div className="u-flex u-flexJustifyCenter u-flexAlignItemsBaseline u-flexWrap service-cards">
        {data.homeJson.serviceCards.map(card => (
          <div
            key={card.name}
            className="service-card-wrapper"
            onClick={handleOnClick}
          >
            <div className="service-card">
              <div
                className="u-flex u-flexJustifyCenter"
                style={{ marginBottom: "20px" }}
              >
                <div
                  className="service-card-icon-wrapper"
                  style={{ width: "100px", height: "100px" }}
                >
                  <CircleSvg />
                  {iconMap[card.icon]}
                </div>
              </div>
              <p>
                {card.content}
              </p>
              <div className="card-body">{card.body}</div>
            </div>
          </div>
        ))}
      </div>
    </Row>
  )
}

export default ServiceCards
