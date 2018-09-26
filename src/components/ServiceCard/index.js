import PropTypes from 'prop-types'
import React from 'react'
import {
  Card,
  Image
} from 'semantic-ui-react'


const ServiceCard = (props) => (
  <Card raised centered link style={{backgroundColor: '#d4d4d5', backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url(${props.service.img})`, minHeight: 260, backgroundSize: 'cover'}} onClick={()=>{document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}>
    <Card.Content>
      <Card.Header style={{color: 'white'}}>{props.service.name}</Card.Header>
      {/*<Card.Description>{props.service.description}</Card.Description>*/}
      {/*<Image src={props.service.img} height="230" />*/}
    </Card.Content>
  </Card>
)

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired
}

export default ServiceCard