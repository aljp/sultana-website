import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from 'images/logos/SULTANA_white.svg'

const Nav = ({ siteTitle }) => (
  <header
    className="sultana-nav u-flex u-flexJustifyBetween u-flexAlignItemsCenter"
  >
    <div
      className="logo-wrapper"
    >
      <Link to="/">
        <img src={logo} style={{width: '160px'}}/>
      </Link>
      {/* <h1 className="logo-title">{siteTitle}</h1> */}
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
      </div>
  </header>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
