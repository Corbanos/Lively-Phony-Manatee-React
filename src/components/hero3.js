import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-section-max-width thq-flex-row">
          <div className="hero3-column">
            <h1 className="thq-heading-1 hero3-text">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="thq-body-large hero3-text1">{props.content1}</p>
            <div className="hero3-actions">
              <a href="#faq" className="hero3-button thq-button-filled">
                <span className="thq-body-small">{props.action1}</span>
              </a>
              <Link to="/buy" className="hero3-button1 thq-button-outline">
                <span className="thq-body-small">{props.action2}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1553796661-17b7fa359f49?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fER1bmV8ZW58MHx8fHwxNzE2NTU2MDIzfDA&ixlib=rb-4.0.3&w=1500',
  content1:
    'Join us for the ultimate gathering of Dune fans from around the universe!',
  action1: 'Learn More',
  image1Alt: 'Dune Fandom Conference Logo',
  heading1: 'Welcome to the Dune Fandom Conference',
  action2: 'Register Now',
}

Hero3.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero3
