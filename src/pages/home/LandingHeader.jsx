import React from 'react'
import { Button } from 'react-materialize'
import { Parallax } from 'react-parallax';
import logo from 'images/logos/SULTANA_grapes.svg'

const LandingHeader = props => (
  <div className="hero">
    <div className="hero-wrapper u-flex u-flexJustifyEnd">
      <img src={logo} />
      <div className="hero-content">
        <div className="hero-title">Prepare to be Websited</div>
        <div>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  </div>
)

export default LandingHeader;