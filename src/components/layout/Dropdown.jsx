import React from 'react';
import { Link } from 'gatsby';

const ServicesDropdown = (props) => {
  const { active, onMouseLeave } = props;

  return (
    <div onMouseLeave={onMouseLeave}>
      <ul className={`ServicesDropDown ${active ? 'active' : ''}`} >
        <Link to="/development"><li>Development</li></Link>
        <Link to="/optimisation"><li>Optimisation</li></Link>
        <Link to="/analytics"><li>Analytics</li></Link>
      </ul>
    </div>

  )
};

export default ServicesDropdown;
