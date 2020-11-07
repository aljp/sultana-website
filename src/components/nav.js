import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from 'images/logos/SULTANA_white.svg'
import { ReactComponent as Menu } from 'images/menu.svg';
import Dropdown from "./layout/Dropdown";

const Nav = ({ siteTitle }) => {
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const [dropdownActive, setDropdownActive] = useState(false)

  const handleMouseEnter = () => {
    setDropdownActive(true);
  }

  const handleOnMouseLeave = () => { setDropdownActive(false); }

  const handleOnClick = () => {
    menuRef.current.classList.toggle('open')
    menuButtonRef.current.classList.toggle('open')
  }

  return (
    <header
      className="sultana-nav u-flex u-flexJustifyBetween u-flexAlignItemsCenter"
    >
      <div
        className="logo-wrapper"
      >
        <Link to="/">
          <img src={logo} style={{width: '160px'}} alt="Sultana Digital Logo"/>
        </Link>
      </div>
      <button onClick={handleOnClick} ref={menuButtonRef} aria-label="Main menu"><Menu /></button>
      <ul className="nav-links" ref={menuRef}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services" onMouseEnter={handleMouseEnter}>Services <span className="link-chevron">&rsaquo;</span></Link>
          <Dropdown active={dropdownActive} onMouseLeave={handleOnMouseLeave}/>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
