import React from 'react'

import PropTypes from 'prop-types'

import './pricing15.css'

const Pricing15 = (props) => {
  return (
    <div className="pricing15-pricing3 thq-section-padding">
      <div className="pricing15-max-width thq-section-max-width">
        <div className="pricing15-section-title">
          <div className="pricing15-content">
            <h2 className="pricing15-text thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
        <div className="pricing15-content1 thq-card">
          <svg viewBox="0 0 1243.4285714285713 1024" className="pricing15-icon">
            <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
          </svg>
          <div className="pricing15-price-title">
            <p className="pricing15-text01 thq-body-large">{props.plan1}</p>
            <p className="thq-body-large">{props.plan1Detail}</p>
          </div>
          <div className="pricing15-divider"></div>
          <div className="pricing15-list">
            <div className="pricing15-list-item">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature1}</span>
            </div>
            <div className="pricing15-list-item1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature2}</span>
            </div>
            <div className="pricing15-list-item2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature3}</span>
            </div>
            <div className="pricing15-list-item3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature4}</span>
            </div>
            <div className="pricing15-list-item4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature5}</span>
            </div>
          </div>
          <div className="pricing15-divider1"></div>
          <div className="pricing15-price">
            <h3 className="pricing15-text08 thq-heading-3">
              {props.plan1Price}
            </h3>
            <p className="thq-body-large">{props.plan1Yearly}</p>
          </div>
          <button className="pricing15-button thq-button-filled">
            <span className="thq-body-small">{props.plan1Action}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Pricing15.defaultProps = {
  plan1: 'Standard Pass',
  heading1: 'Conference Ticket Pricing',
  plan1Detail: 'Access to all panels and workshops',
  plan1Action: 'Buy Now',
  plan1Feature5: 'Exclusive merchandise discounts',
  content1:
    'Choose the ticket option that suits you best and join us for an unforgettable Dune experience!',
  plan1Feature3: 'Opportunity to participate in autograph sessions',
  plan1Feature1: 'Access to cosplay contests',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan1Feature4: 'Networking opportunities with fellow Dune fans',
  plan1Feature2: 'Discounted rates for hotel accommodation',
  plan1Price: '$0',
  plan1Yearly: 'Petar Gets it For Free!',
}

Pricing15.propTypes = {
  plan1: PropTypes.string,
  heading1: PropTypes.string,
  plan1Detail: PropTypes.string,
  plan1Action: PropTypes.string,
  plan1Feature5: PropTypes.string,
  content1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Feature1: PropTypes.string,
  content2: PropTypes.string,
  plan1Feature4: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Yearly: PropTypes.string,
}

export default Pricing15
