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

  const [dropdownActive, setDropdownActive] = useState(false)

  const handleMouseEnter = () => {
    if (pageWidth > 901) setDropdownActive(true);
  }

  const handleDropdown = () => {
    setDropdownActive(!dropdownActive);
  }

  const handleOnMouseLeave = () => { 
    if (pageWidth > 901) setDropdownActive(false); 
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li className={`dropdown-nav-link ${dropdownActive ? 'active' : ''}`} onClick={handleDropdown} onMouseEnter={handleMouseEnter}>
          <div>
            <Link to="/services" >Services <span className="link-chevron">&rsaquo;</span></Link>
          </div>
          {pageWidth > 901 && (
            <Dropdown active={dropdownActive} onMouseLeave={handleOnMouseLeave} />
          )}
        </li>

        {pageWidth < 901 && (
          <Dropdown active={dropdownActive} />
        )}
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
