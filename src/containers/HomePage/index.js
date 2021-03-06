import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Responsive,
  Segment,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import DesktopContainer from '../Desktop'
import MobileContainer from '../Mobile'
import services from '../../content/services'
import ServiceCard from '../../components/ServiceCard'
import ContactForm from '../../components/ContactForm'
import Heading from './Heading'
import './Home.css'



const ResponsiveContainer = ({ activePage, children }) => (
  <div>
    <DesktopContainer activePage={activePage}><Heading />{children}</DesktopContainer>
    <MobileContainer activePage={activePage}><Heading mobile/>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ activePage }) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>Cyber Security Consulting | Viam Technologies</title>
      <meta property="og:title" content="Cyber Security Consulting | Viam Technologies" />
      <meta name="description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
      <meta name="og:description" content="When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services. Contact us today to be prepared." />
    </Helmet>
    <Segment style={{ padding: '8em 0em', backgroundColor:'#f9f9f9' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Manage Cyber Security Risk
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Get a clear understanding of the risks facing your organization and recommendations for addressing those risks
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image bordered rounded size='big' src='/images/services/risk.jpeg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em', backgroundColor: 'white' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
              60%
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Of Small to Medium Size Businesses Fold After A Serious Security Incident
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
              1/5
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Of Small to Medium Size Businesses Annually Becomes A Victim Of A Security Incident
            </p>
          </Grid.Column>
          <p style={{position: 'absolute', bottom: 10, right: 10, fontSize: '.8em'}}>Source: 
            <a
              href='https://www.bizjournals.com/bizjournals/how-to/growth-strategies/2017/05/does-your-business-need-cyber-liability-insurance.html'
              rel="noopener noreferrer"
              target='_blank'
            > BizJournals.com</a>
          </p>
        </Grid.Row>
      </Grid>
    </Segment>

    {/*Service Section*/}
    <Segment style={{ padding: '6em 2em', backgroundColor:'#f9f9f9'}} vertical textAlign='center'>
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

    <Segment style={{ padding: '6em 0em', backgroundColor: 'white' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Securing Your Organization - Where to Start?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Cut through the endless amount of information and snake oil and read how you can effectively prioritize where to spend your security budget and efforts...
        </p>
        <Button as={Link} to='/blog/where-to-start' size='large' style={{backgroundColor: '#008066', color: 'white'}} onClick={()=>window.scrollTo(0, 0)}>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', color: '#008066' }}
        >
          Hacking Attacks Explained
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Advanced Phishing Attacks and Defense
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          A new phishing tool was released which allows hackers to monitor victims as they shop or send emails. Here's how it works, and how you can protect users who visit your...
        </p>
        <Button as={Link} to='/blog/hacking-explained-advanced-phishing-attacks-defense' size='large' style={{backgroundColor: '#008066', color: 'white'}} onClick={()=>window.scrollTo(0, 0)}>
          Read More
        </Button>
      </Container>
    </Segment>

    <Segment id='contact' style={{ padding: '6em 0em', backgroundColor: '#f9f9f9' }} vertical>
      <ContactForm />
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout