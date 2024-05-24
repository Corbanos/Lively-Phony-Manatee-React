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
