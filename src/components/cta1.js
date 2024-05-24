import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-max-width thq-section-max-width">
        <div className="cta1-content">
          <h2 className="cta1-heading1 thq-heading-2">{props.heading1}</h2>
          <p className="cta1-content1 thq-body-large">{props.content1}</p>
          <div className="cta1-actions">
            <button className="thq-button-filled cta1-button">
              <Link to="/buy" className="cta1-action1 thq-body-small">
                {props.action1}
              </Link>
            </button>
            <button className="thq-button-outline cta1-button1">
              <a href="#faq" className="cta1-action2 thq-body-small">
                {props.action2}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA1.defaultProps = {
  content1:
    "Don't miss out on this epic gathering of Dune fans from around the world. Register now to secure your spot!",
  action1: 'Register Now',
  heading1: 'Join us at the Dune Fandom Conference!',
  action2: 'Learn More',
}

CTA1.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
}

export default CTA1
