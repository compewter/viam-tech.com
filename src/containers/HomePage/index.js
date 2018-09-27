import PropTypes from 'prop-types'
import React from 'react'
import {
  Card,
  Grid,
  Header,
  Image,
  Responsive,
  Segment,
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'
import services from '../../content/services'
import ServiceCard from '../../components/ServiceCard'
import ContactForm from '../../components/ContactForm'
import './Home.css'



const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em', backgroundColor:'#f9f9f9' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              A Range of Software Engineering and Technology Consultancy Services
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Software solutions that we build help our clients save time and operating costs, increase revenue, and secure their confidential information.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image bordered rounded size='big' src='/images/group-consulting.jpeg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/*Service Section*/}
    <Segment style={{ padding: '8em 2em'}} vertical textAlign='center'>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <Header as='h2' className='section-header' style={{fontSize: '4em', marginBottom: 30}}>Services</Header>
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

    <Segment id='contact' style={{ padding: '8em 0em', backgroundColor: '#f9f9f9' }} vertical>
      <ContactForm />
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout