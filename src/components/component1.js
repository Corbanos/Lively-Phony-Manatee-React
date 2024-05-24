import React from 'react'

import PropTypes from 'prop-types'

import Pricing15 from './pricing15'
import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <Pricing15 className=""></Pricing15>
    </div>
  )
}

Component1.defaultProps = {
  rootClassName: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component1
