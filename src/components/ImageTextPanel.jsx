import React from 'react';
import { Row, Col } from 'react-materialize'
import Image from "../components/image"
import LandingImage from '../images/landing-image.png'

const ImageTextPanel = (props) => {
  return (
    <Row>
      <div style={{ marginTop: '20px'  }}>
        <Col s={1} />
        <Col s={5}>
          <div>
            <Image />
            
          </div>
        </Col>
        <Col s={5}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia perferendis expedita in, eius asperiores tempore corporis aperiam et officia dicta earum molestiae nam laboriosam delectus facilis, veniam quo nisi provident?
        </Col>
        <Col s={1} />
      </div>
    </Row>
  )
};

export default ImageTextPanel;