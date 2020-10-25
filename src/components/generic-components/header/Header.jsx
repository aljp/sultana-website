import React from "react"
import BackgroundImage from "gatsby-background-image"

import "./Header.scss"

const Header = props => {
  const { backgroundImage, title, description, style } = props
  return (
    <div className="header-wrapper" style={style}>
      <div className="header">
        <BackgroundImage
          fluid={backgroundImage}
          style={{ position: "absolute" }}
          className="header-background"
        >
          <div className="overlay"></div>
        </BackgroundImage>
        <div className="header-content container">
          <h1>{title}</h1>
          {description}
        </div>
      </div>
    </div>
  )
}

export default Header
