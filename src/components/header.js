import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from 'images/sultana wally.svg'

const Header = ({ siteTitle }) => (
  <header
    className="sultana-header u-flex u-flexJustifyBetween u-flexAlignItemsCenter"
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
      <Link to="/services">Our Services</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
