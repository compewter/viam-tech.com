import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Card,
  Header,
  Responsive,
  Segment
} from 'semantic-ui-react'
import DesktopContainer from '../Desktop'
import MobileContainer from '../Mobile'

import services from '../../content/services'
import ServiceCard from '../../components/ServiceCard'
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

const ServicesPage = ({activePage}) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>Cyber Security Services | Viam Technologies</title>
      <meta property="og:title" content="Cyber Security Services | Viam Technologies" />
      <meta name="description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
      <meta name="og:description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
    </Helmet>
    <Segment style={{ padding: '6em 2em', backgroundColor: '#eaeaea'}} vertical textAlign='center'>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <Header as='h2' style={{fontSize: '4em', marginBottom: 30}}>Services</Header>
        <Header as='h3' style={{fontSize: '1.5em', margin: '0 auto 15px auto', maxWidth: 800}}>Test your security posture to find security holes before criminals can exploit them.</Header>
        <Card.Group itemsPerRow={3} centered style={{margin: '25px auto', maxWidth: 1200}}>
          {services.map((service, ind) => <ServiceCard service={service} key={`service_${ind}`} mobile={false} /> )}
        </Card.Group>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Header as='h2' className='section-header' style={{fontSize: '3em', marginBottom: 30}}>Services</Header>
        <Card.Group itemsPerRow={1} centered style={{margin: '25px auto'}}>
          {services.map((service, ind) => <ServiceCard service={service} key={`service_${ind}`} mobile={true} /> )}
        </Card.Group>
      </Responsive>
    </Segment>
    <Segment id='contact' style={{ padding: '6em 0em', backgroundColor: '#f9f9f9' }} vertical>
      <ContactForm />
    </Segment>
  </ResponsiveContainer>
)

export default ServicesPage