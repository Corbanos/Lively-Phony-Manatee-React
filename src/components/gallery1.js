import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1584013896414-679a95d33958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjU1NTkxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Panel discussion with Dune experts',
  image2Src:
    'https://images.unsplash.com/photo-1579935110464-fcd041be62d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjU1NTkxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Dune fans cosplaying as their favorite characters',
  content1: 'Explore moments from our past conferences through these images.',
  image3Src:
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjU1NTkxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Gallery',
  image3Alt: 'Art exhibit featuring Dune-inspired works',
}

Gallery1.propTypes = {
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.string,
  image3Alt: PropTypes.string,
}

export default Gallery1
