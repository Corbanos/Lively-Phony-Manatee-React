import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos1 from '../components/logos1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lively Phony Manatee</title>
        <meta property="og:title" content="Lively Phony Manatee" />
      </Helmet>
      <div className="home-navbar1">
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
            <li data-thq="thq-dropdown" className="home-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle1"
              >
                <span className="home-text1">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle2"
              >
                <span className="home-text2">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle3"
              >
                <span className="home-text3">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <Navbar4></Navbar4>
      </div>
      <div className="home-hero2">
        <Hero3></Hero3>
      </div>
      <div className="home-logos3">
        <Logos1 rootClassName="logos1-root-class-name"></Logos1>
      </div>
      <div className="home-gallery4"></div>
      <div className="home-features5">
        <Features17></Features17>
      </div>
      <div className="home-features6">
        <Features18></Features18>
      </div>
      <div className="home-features7"></div>
      <div className="home-cta8">
        <CTA1></CTA1>
      </div>
      <div className="home-faq9">
        <FAQ1></FAQ1>
      </div>
      <div className="home-contact10">
        <Contact4></Contact4>
      </div>
      <div className="home-footer11">
        <Footer15></Footer15>
      </div>
      <div data-thq="thq-dropdown" className="home-thq-dropdown1 list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle4">
          <span className="home-text4">Menu Item</span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list1">
          <li data-thq="thq-dropdown" className="home-dropdown4 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle5"
            >
              <span className="home-text5">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown5 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle6"
            >
              <span className="home-text6">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown6 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle7"
            >
              <span className="home-text7">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
