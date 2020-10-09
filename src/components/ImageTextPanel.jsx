import React from 'react';
import { Row, Col } from 'react-materialize'
import Image from "../components/image"
import LandingImage from '../images/landing-image.png'

const ImageTextPanel = (props) => {
  const { imagePanel, contentPanel, reverse, className } = props;

  const imageClasses = `imageColumn${reverse ? ' push-l6' : ''}`
  const contentClasses = `${reverse ? ' pull-l5' : ''}`

  return (
    <Row style={{ marginTop: '20px', maxWidth: '90vw' }}>
      <div >
        <Col l={6} className={imageClasses}>
          {imagePanel}
        </Col>
        <Col l={5} className={contentClasses}>
          {contentPanel}
        </Col>
      </div>
    </Row>
  )
};

export default ImageTextPanel;