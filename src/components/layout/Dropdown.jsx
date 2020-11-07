import React from 'react';
import { Link } from 'gatsby';

const ServicesDropdown = (props) => {
  const { active, onMouseLeave } = props;

  return (
    <ul className={`ServicesDropDown ${active ? 'active' : ''}`} onMouseLeave={onMouseLeave}>
      <Link to="/development"><li>Development</li></Link>
      <Link to="/optimisation"><li>Optimisation</li></Link>
      <Link to="/analytics"><li>Analytics</li></Link>
    </ul>
  )
};

export default ServicesDropdown;
