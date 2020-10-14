import React from "react"
import Button from "components/form-helpers/Button"
import fallback from 'images/waves-crashing.png'
import logo from "images/logos/SULTANA_coloured.svg"
import video from "images/ocean.mp4"

const LandingHeader = props => (
  <div className="hero">
    <div className="hero-wrapper u-flex u-flexJustifyEnd u-flexAlignItemsEnd">
      <video autoPlay muted loop width="100%" className="hero-video">
        <source src={video} type="video/mp4" />
      </video>
      <img src={fallback} className="hero-video-fallback" alt="Waves crashing over a rock"/>
      <img src={logo} className="logo" alt="A company logo that looks like a bunch of grapes"/>
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
