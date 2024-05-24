import React from 'react'

import PropTypes from 'prop-types'

import './contact14.css'

const Contact14 = (props) => {
  return (
    <div className="contact14-contact20 thq-section-padding">
      <div className="contact14-max-width thq-section-max-width">
        <div className="contact14-content">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact14-contact-info">
            <div className="contact14-content1">
              <h3 className="contact14-text thq-heading-3">{props.heading1}</h3>
              <p className="contact14-text1 thq-body-large">{props.content1}</p>
            </div>
            <span className="contact14-email thq-body-small">
              {props.email1}
            </span>
          </div>
        </div>
        <div className="contact14-content2">
          <svg viewBox="0 0 1024 1024" className="contact14-icon2">
            <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
          </svg>
          <div className="contact14-contact-info1">
            <div className="contact14-content3">
              <h3 className="contact14-text2 thq-heading-3">
                {props.heading2}
              </h3>
              <p className="contact14-text3 thq-body-large">{props.content2}</p>
            </div>
            <span className="contact14-email1 thq-body-small">
              {props.link1}
            </span>
          </div>
        </div>
        <div className="contact14-content4">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact14-contact-info2">
            <div className="contact14-content5">
              <h3 className="contact14-text4 thq-heading-3">
                {props.heading3}
              </h3>
              <p className="contact14-text5 thq-body-large">{props.content3}</p>
            </div>
            <span className="contact14-phone thq-body-small">
              {props.phone1}
            </span>
          </div>
        </div>
        <div className="contact14-content6">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
          </svg>
          <div className="contact14-contact-info3">
            <div className="contact14-content7">
              <h3 className="contact14-text6 thq-heading-3">
                {props.heading4}
              </h3>
              <p className="contact14-content4 thq-body-large">
                {props.content4}
              </p>
            </div>
            <span className="contact14-address thq-body-small">
              {props.address1}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact14.defaultProps = {
  content4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Contact Information',
  heading3: 'Phone',
  email1: 'info@dunefandomconference.com',
  heading4: 'Office',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading2: 'Live Chat',
  phone1: '+1-XXX-XXX-XXXX',
  address1: 'Metro Toronto Convention Centre, Toronto, Canada',
  link1: 'Start new chat',
}

Contact14.propTypes = {
  content4: PropTypes.string,
  heading1: PropTypes.string,
  heading3: PropTypes.string,
  email1: PropTypes.string,
  heading4: PropTypes.string,
  content1: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  phone1: PropTypes.string,
  address1: PropTypes.string,
  link1: PropTypes.string,
}

export default Contact14
