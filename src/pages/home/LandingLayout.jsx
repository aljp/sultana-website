import React from 'react'

const LandingLayout = (props) => {
  const { landingHeader, panel1 } = props;
  
  return (
    <div>
      {landingHeader}
      {panel1}
    </div>
  )
}

export default LandingLayout;