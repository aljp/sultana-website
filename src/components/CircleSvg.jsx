import React from 'react';

const CircleSvg = (props) => (
  <svg
    className="progress-ring"
    height="120"
    width="120"
  >
    <circle
      className="progress-ring__circle"
      strokeWidth="4"
      fill="transparent"
      r="58"
      cx="60"
      cy="60"
    />
  </svg>
);

export default CircleSvg;