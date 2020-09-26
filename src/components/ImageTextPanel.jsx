import React from 'react';
import { Row, Col } from 'react-materialize'
import Image from "../components/image"
import LandingImage from '../images/landing-image.png'

const ImageTextPanel = (props) => {
  const { imagePanel, contentPanel, reverse } = props;



  return (
    <Row style={{ marginTop: '20px', maxWidth: '90vw', backgroundColor: 'white'  }}>
      <div >
        <Col m={6} className="imageColumn">
          {imagePanel}
        </Col>
        <Col m={5}>
          {contentPanel}
        </Col>
      </div>
    </Row>
  )
};

export default ImageTextPanel;