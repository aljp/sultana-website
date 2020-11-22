import React from 'react';
import { Link } from 'gatsby';

const ServicesDropdown = (props) => {
  const { active, onMouseLeave } = props;

  return (
    <div onMouseLeave={onMouseLeave}>
      <ul className={`ServicesDropDown ${active ? 'active' : ''}`} >
        <Link to="/development"><li>Development</li></Link>
        <Link to="/support"><li>Support</li></Link>
        <Link to="/analytics"><li>Analytics</li></Link>
        <Link to="/automation"><li>Automation</li></Link>
      </ul>
    </div>
  )
};

export default ServicesDropdown;
