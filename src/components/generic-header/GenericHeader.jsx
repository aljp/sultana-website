import React from "react"

import "./GenericHeader.scss"

const GenericHeader = props => {
  return (
    <div className="generic-header">
      <div className="generic-header-container container">
        <div className="header-text">
          <h1>{props.preTitle}</h1>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default GenericHeader
