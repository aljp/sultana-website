import React from "react"
import Card from "components/generic-components/Card"

const ServicesPageAdvantages = props => {
  const { iconMap } = props
  const { title, blurb, cards } = props.data

  return (
    <div className="servicesAdvantages container">
      <div className="servicesAdvantages-header topper">
        <h2 className="title-period">{title}</h2>
      </div>
      <div className="servicesAdvantages-blurb">
        <p>{blurb}</p>
      </div>
      <div className="servicesAdvantages-cards u-flex u-flexWrap">
        {cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            content={card.content}
            icon={iconMap[card.title.toLowerCase().replace(/[ &]+/, "_")]}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesPageAdvantages
