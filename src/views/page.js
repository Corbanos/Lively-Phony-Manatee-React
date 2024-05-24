import React from 'react'

import { Helmet } from 'react-helmet'

import NotFound2 from '../components/not-found2'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Lively Phony Manatee</title>
        <meta property="og:title" content="Page - Lively Phony Manatee" />
      </Helmet>
      <NotFound2></NotFound2>
    </div>
  )
}

export default Page
