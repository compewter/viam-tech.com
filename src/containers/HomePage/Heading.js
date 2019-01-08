import PropTypes from 'prop-types'
import React from 'react'
import { 
  Button,
  Header,
  Icon,
  Image,
  Segment
} from 'semantic-ui-react'

const Heading = ({ mobile }) => (
    <Segment
      textAlign='center'
      style={{ height: mobile ? 400 : 750, backgroundImage: 'url(/images/home/hero-img.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: mobile ? 100: 150 }}
      vertical
    >
      <Image src="/images/logo/logo-bottom-text.png" style={{marginTop: mobile ? 0 : 25}} className={mobile ? 'heading-logo-mobile' : 'heading-logo-desktop'} alt='abstract architecture'/>
      <Header
        as='h1'
        content='Your technology partner for information security'
        style={{
          fontSize: mobile ? '1.3em' : '2.5em',
          fontWeight: 'normal',
          margin: mobile ? '2em auto' : '1em auto',
          color: '#666666',
          textTransform: 'uppercase',
          maxWidth: mobile ? 350 : 600
        }}
      />
      <Button onClick={()=>{document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}} primary size={mobile ? 'large' : 'huge'} style={{backgroundColor: '#008066', marginTop: 20, marginBottom: 20}}>
        Contact
        <Icon name='right arrow' />
      </Button>
    </Segment>
)

Heading.propTypes = {
  mobile: PropTypes.bool,
}

export default Heading