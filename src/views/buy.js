import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar41 from '../components/navbar41'
import Component1 from '../components/component1'
import './buy.css'

const Buy = (props) => {
  return (
    <div className="buy-container">
      <Helmet>
        <title>Buy - Lively Phony Manatee</title>
        <meta property="og:title" content="Buy - Lively Phony Manatee" />
      </Helmet>
      <Navbar41></Navbar41>
      <Component1 rootClassName="component1-root-class-name"></Component1>
    </div>
  )
}

export default Buy
