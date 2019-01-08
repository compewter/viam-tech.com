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

const HomepageLayout = ({activePage}) => (
  <ResponsiveContainer activePage={activePage}>
    <Segment id='contact' style={{ padding: '4em 0em', backgroundColor: '#f9f9f9' }} vertical>
      <ContactForm />
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout