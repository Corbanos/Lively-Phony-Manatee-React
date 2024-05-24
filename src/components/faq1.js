import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div id="faq" className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
          </div>
          <div className="faq1-container">
            <Link to="/contact" className="faq1-button thq-button-outline">
              <span className="thq-body-small">{props.action1}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq3Answer:
    'Yes, we have partnered with local hotels to offer discounted rates for conference attendees. More information will be provided upon registration.',
  faq2Question: 'Where will the Dune fandom conference be held?',
  faq4Answer:
    'Yes, there will be scheduled autograph sessions and meet-and-greets with select Dune cast members. Stay tuned for the announcement of participating guests.',
  faq1Answer:
    'The Dune fandom conference will take place on August 4th to August 12th 2024',
  faq5Answer:
    'Cosplay is highly encouraged at the Dune fandom conference! Show off your best Dune-inspired costumes and join our cosplay contest for a chance to win exciting prizes.',
  action1: 'Contact',
  heading2: 'Still have a question?',
  heading1: 'FAQs',
  faq2Answer:
    'The Dune fandom conference will be held at the Metro Toronto Convention Centre',
  faq5Question: 'Is cosplay allowed at the Dune fandom conference?',
  faq4Question:
    'Will there be opportunities for autographs and meet-and-greets with Dune cast members?',
  faq3Question:
    'Are there any discounted hotel rates for conference attendees?',
  faq1Question: 'What is the date of the Dune fandom conference?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
}

FAQ1.propTypes = {
  faq3Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq5Answer: PropTypes.string,
  action1: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq3Question: PropTypes.string,
  faq1Question: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
}

export default FAQ1
