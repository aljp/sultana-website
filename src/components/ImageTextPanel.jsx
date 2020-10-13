import React from 'react';
import { Row, Col } from 'react-materialize'

const ImageTextPanel = (props) => {
  const { imagePanel, contentPanel, reverse, className } = props;

  const imageClasses = `image-column${reverse ? ' pull-l5' : ''}`
  const contentClasses = `content-column${reverse ? ' push-l6' : ''}`

  return (
    <Row style={{ maxWidth: '90vw' }} className={className}>
      <div >
        <Col l={5} className={contentClasses}>
          {contentPanel}
        </Col>
        <Col l={6} className={imageClasses}>
          {imagePanel}
        </Col>
      </div>
    </Row>
  )
};

export default ImageTextPanel;