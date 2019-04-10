import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Header,
  Responsive,
  Segment
} from 'semantic-ui-react'
import DesktopContainer from '../Desktop'
import MobileContainer from '../Mobile'

import LossCalculator from '../../components/LossCalculator'
import ContactForm from '../../components/ContactForm'

const ResponsiveContainer = ({ activePage, children }) => {
  return <div>
    <DesktopContainer activePage={activePage}>{children}</DesktopContainer>
    <MobileContainer activePage={activePage}>{children}</MobileContainer>
  </div>
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const LossCalculatorContainer = ({activePage}) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>Cyber Security Services | Viam Technologies</title>
      <meta name="description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
      <meta name="robots" content="noindex,nofollow" />
    </Helmet>
    <Segment style={{ padding: '6em 2em', backgroundColor: 'white'}} vertical textAlign='center'>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth} style={{position: 'relative'}}>
        <LossCalculator />
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth} style={{position: 'relative'}}>
        <LossCalculator isMobile={true} />
      </Responsive>
    </Segment>
    <Segment id='contact' style={{ padding: '6em 0em', backgroundColor: '#f9f9f9' }} vertical>
      <ContactForm />
    </Segment>
  </ResponsiveContainer>
)

export default LossCalculatorContainer