import React from 'react'
import { Button } from 'react-materialize'
import { Parallax } from 'react-parallax';
import images from '../../images/landing-image.png'

const LandingHeader = (props) => (
  <div className="hero">
    <Parallax 
      strength={500}
      bgImage={images}
    >
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-title">
            Prepare to be Websited
          </div>
          <div>
            <Button>Contact us</Button>
          </div>
        </div>
      </div>
    </Parallax>
  </div>
);

export default LandingHeader;