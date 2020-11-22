import React, { useState, useRef, useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from 'images/logos/SULTANA_white.svg'
import { ReactComponent as Menu } from 'images/menu.svg';
import Dropdown from "./layout/Dropdown";
import { GlobalContext } from 'components/GlobalContext';

const Nav = ({ siteTitle }) => {
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { pageWidth } = useContext(GlobalContext)

  const MENU_CUTOFF = 767 
  const [dropdownActive, setDropdownActive] = useState(false)

  const handleMouseEnter = () => {
    if (pageWidth > MENU_CUTOFF) setDropdownActive(true);
  }

  const handleDropdown = () => {
    setDropdownActive(!dropdownActive);
  }

  const handleOnMouseLeave = () => {
    if (pageWidth > MENU_CUTOFF) setDropdownActive(false);
  }

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
          <img src={logo} style={{ width: '160px' }} alt="Sultana Digital Logo" />
        </Link>
      </div>
      <button onClick={handleOnClick} ref={menuButtonRef} aria-label="Main menu"><Menu /></button>
      <ul className="nav-links" ref={menuRef}>
        <Link to="/">
          <li>
            Home
          </li>
        </Link>
        <Link to="/about">
          <li>
            About Us
          </li>
        </Link>
        <div className={`dropdown-nav-link ${dropdownActive ? 'active' : ''}`} onClick={handleDropdown} onMouseEnter={handleMouseEnter}>
          <li >
          <Link to="/services" >Services <span className="link-chevron">&rsaquo;</span></Link>
          </li>
          <Dropdown active={dropdownActive} onMouseLeave={handleOnMouseLeave} />

        </div>

        <Link to="/contact">
          <li>
            Contact
          </li>
        </Link>
      </ul>
    </header >
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
