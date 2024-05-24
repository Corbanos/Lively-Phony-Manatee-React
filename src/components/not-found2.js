import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './not-found2.css'

const NotFound2 = (props) => {
  return (
    <div className="not-found2-container thq-section-padding">
      <div className="not-found2-container1">
        <h1 className="not-found2-text thq-heading-1">404</h1>
        <h2 className="not-found2-text1 thq-heading-2">{props.heading2}</h2>
        <button className="not-found2-button thq-button-outline thq-button-filled">
          <Link to="/" className="not-found2-action1 thq-body-small">
            {props.action1}
          </Link>
        </button>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="not-found2-image"
      />
      <div className="not-found2-container2"></div>
    </div>
  )
}

NotFound2.defaultProps = {
  heading2: 'Page not found',
  image1Src:
    'https://images.unsplash.com/photo-1716492444249-e5a6981daf58?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxNjU1NTY2M3w&ixlib=rb-4.0.3&w=1500',
  image1Alt: 'image',
  action1: 'Back to homepage',
}

NotFound2.propTypes = {
  heading2: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default NotFound2
