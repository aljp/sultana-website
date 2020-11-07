import React from 'react'

const MainContent = (props) => {
  const {content, currentPage } = props;

  return (
    <div className="" id={currentPage}>
      <div className="about-content">
        {content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  )
};

export default MainContent;
