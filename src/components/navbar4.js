import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <div className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <Link to="/" className="navbar4-link1 thq-body-small thq-link">
              {props.link1}
            </Link>
            <Link to="/buy" className="navbar4-action2 thq-button-outline">
              {props.action2}
            </Link>
          </nav>
          <div className="navbar4-buttons"></div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
              <Link to="/" className="navbar4-link11 thq-body-small thq-link">
                {props.link1}
              </Link>
              <span className="thq-body-small thq-link">{props.link4}</span>
            </nav>
          </div>
          <div className="navbar4-buttons1">
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar4.defaultProps = {
  link5: 'Contact',
  logoSrc: 'df19adb2-de48-483e-81de-0fddbe1add74',
  logoAlt: 'Dune Fandom Conference',
  action2: 'Buy Now',
  link4: 'Tickets',
  action1: 'Register',
  link1: 'Home',
  link2: 'Schedule',
  link3: 'Speakers',
}

Navbar4.propTypes = {
  link5: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  action2: PropTypes.string,
  link4: PropTypes.string,
  action1: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
}

export default Navbar4
