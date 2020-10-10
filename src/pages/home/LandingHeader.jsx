import React from "react"
import { Button } from "react-materialize"
import fallback from 'images/waves-crashing.png'
import logo from "images/logos/SULTANA_coloured.svg"
import video from "images/ocean.mp4"

const LandingHeader = props => (
  <div className="hero">
    <div className="hero-wrapper u-flex u-flexJustifyEnd u-flexAlignItemsEnd">
      <video autoPlay muted loop width="100%" className="hero-video">
        <source src={video} type="video/mp4" />
      </video>
      <img src={fallback} className="hero-video-fallback" />
      <img src={logo} className="logo" />
      <div className="hero-content">
        <div className="hero-title">
          Have digital problems? 
          <br />
          We have solutions
        </div>
        <div>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  </div>
)

export default LandingHeader
