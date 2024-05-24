import React from 'react'

import PropTypes from 'prop-types'

import './logos1.css'

const Logos1 = (props) => {
  return (
    <div
      className={`logos1-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos1-container1">
        <img
          alt={props.imageAlt3}
          src={props.imageSrc3}
          className="logos1-image"
        />
      </div>
      <span className="logos1-text">{props.text}</span>
      <div className="logos1-max-width thq-section-max-width">
        <img
          alt="Logo3"
          src="/image_2024-05-24_091415962-1400w.png"
          className="logos1-logo3 thq-img-ratio-16-9"
        />
      </div>
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="logos1-image1"
      />
    </div>
  )
}

Logos1.defaultProps = {
  imageAlt3: 'image',
  imageAlt2: 'image',
  rootClassName: '',
  imageSrc2: '/image_2024-05-24_091415962-1400w.png',
  text: 'Our Sponsors',
  imageSrc3: '/image_2024-05-24_094015315-200h.png',
}

Logos1.propTypes = {
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc2: PropTypes.string,
  text: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default Logos1
