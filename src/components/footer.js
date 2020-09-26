import React from "react";
import { Link } from 'gatsby';
import { Footer } from "react-materialize"
import logo from "images/sultana wally.svg"

// TODO: Implement footer
// TODO: Implement social media links
const SultanaFooter = props => (
  <Footer
    className="sultana-footer"
    copyrights="&copy; 2020 Sultana Digital"
    links={
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          {/* <Link to="/services">Services</Link>  */}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    }
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        More Links
      </a>
    }
  >
    <h5 className="white-text">Sultana Digital</h5>
    <p className="grey-text text-lighten-4">
      You can use rows and columns here to organize your footer content.
    </p>
  </Footer>
)

export default SultanaFooter
