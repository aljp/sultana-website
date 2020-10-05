import React from 'react'
import { Button } from 'react-materialize'
import logo from 'images/logos/SULTANA_grapes.svg'
import video from 'images/ocean.mp4';

const LandingHeader = props => (
  <div className="hero">
    <div className="hero-wrapper u-flex u-flexJustifyEnd">
      <video autoPlay muted loop width="100%" >
        <source src={video} type="video/mp4"/>
      </video>
      <img src={logo} />
      <div className="hero-content">
        <div className="hero-title">Prepare to be Websited</div>
        <div>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  </div>
);

export default LandingHeader;