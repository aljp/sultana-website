import React from 'react';

const Footer = (props) => {
  const { className, copyrights, links, children } = props;
  const wrapperClass = `page-footer ${className}`

  return (
    <footer className={wrapperClass}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            {children}
          </div>
          <div className="col l4 offset-l2 s12">
            {links}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          {copyrights}
        </div>
      </div>
    </footer>
  )
};

export default Footer;