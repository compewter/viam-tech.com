import PropTypes from 'prop-types'
import React from 'react'
import { 
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

const Heading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Your technology partner for software engineering and information security'
      style={{
        fontSize: mobile ? '1em' : '2.3em',
        fontWeight: 'normal',
        marginBottom: 20,
        marginTop: mobile ? '5em' : '5em',
        color: mobile ? 'white' : '#2d2d2d',
        textTransform: 'uppercase'
      }}
    />
    <Button onClick={()=>{document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}} primary size={mobile ? 'large' : 'huge'} style={{backgroundColor: '#008066', marginTop: 20, marginBottom: 20}}>
      Contact
      <Icon name='right arrow' />
    </Button>
  </Container>
)

Heading.propTypes = {
  mobile: PropTypes.bool,
}

export default Heading