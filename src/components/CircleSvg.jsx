import React from 'react';

const CircleSvg = (props) => (
  <svg
    class="progress-ring"
    height="120"
    width="120"
  >
    <circle
      class="progress-ring__circle"
      stroke-width="4"
      fill="transparent"
      r="58"
      cx="60"
      cy="60"
    />
  </svg>
);

export default CircleSvg;