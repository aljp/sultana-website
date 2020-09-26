import React from 'react'
import { Button } from 'react-materialize'
import { Parallax } from 'react-parallax';
import images from '../../images/landing-image.png'

const LandingHeader = (props) => (
  <div style={{ zIndex: -1, marginTop: '20px', boxShadow: '0px 0px 4px black'}}>
    <Parallax 
      strength={500}
      bgImage={images}
    >
      <div style={{height: '50vh', position: 'relative'}}>
        <div style={{position: 'absolute', top: '20vh', left: '20%'}}>
          <div style={{mixBlendMode: 'difference', color: "gray", fontSize: '56px'}}>
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