import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Segment
} from 'semantic-ui-react'
import DesktopContainer from '../Desktop'
import MobileContainer from '../Mobile'
import ContactForm from '../../components/ContactForm'
import './Contact.css'



const ResponsiveContainer = ({ activePage, children }) => {
  return <div>
    <DesktopContainer activePage={activePage}>{children}</DesktopContainer>
    <MobileContainer activePage={activePage}>{children}</MobileContainer>
  </div>
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const ContactPage = ({activePage}) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>Viam Technologies | Contact Us</title>
      <meta name="description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
      <meta name="og:description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
    </Helmet>
    <Segment id='contact' style={{ padding: '4em 0em'}} vertical>
      <ContactForm />
    </Segment>
  </ResponsiveContainer>
)

export default ContactPage