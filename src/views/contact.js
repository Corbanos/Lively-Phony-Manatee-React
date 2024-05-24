import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm3 from '../components/contact-form3'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Lively Phony Manatee</title>
        <meta property="og:title" content="Contact - Lively Phony Manatee" />
      </Helmet>
      <div className="contact-navbar1">
        <div data-thq="thq-dropdown" className="contact-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="contact-dropdown-list">
            <li data-thq="thq-dropdown" className="contact-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="contact-dropdown-toggle"
              >
                <span className="contact-text">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="contact-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="contact-dropdown-toggle1"
              >
                <span className="contact-text1">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="contact-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="contact-dropdown-toggle2"
              >
                <span className="contact-text2">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="contact-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="contact-dropdown-toggle3"
              >
                <span className="contact-text3">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <Navbar4></Navbar4>
      </div>
      <div className="contact-contactform2">
        <ContactForm3></ContactForm3>
      </div>
      <div className="contact-contact3"></div>
      <div className="contact-contact4"></div>
      <div className="contact-footer11"></div>
    </div>
  )
}

export default Contact
