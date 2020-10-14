import React from 'react';

const ImageTextPanel = (props) => {
  const { imagePanel, contentPanel, reverse, className } = props;

  const imageClasses = `image-column col l6${reverse ? ' pull-l5' : ''}`
  const contentClasses = `content-column col l5${reverse ? ' push-l6' : ''}`

  return (
    <div className="row" style={{ maxWidth: '90vw' }}>
      <div >
        <div className={contentClasses}>
          {contentPanel}
        </div>
        <div className={imageClasses}>
          {imagePanel}
        </div>
      </div>
    </div>
  )
};

export default ImageTextPanel;