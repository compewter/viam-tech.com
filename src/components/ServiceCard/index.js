import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Card
} from 'semantic-ui-react'


class ServiceCard extends Component {
  state = {hovering: false}

  onMouseEnter = () => {
    this.setState({
      hovering: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      hovering: false
    })
  }

  render() {
    const { service, mobile } = this.props
    const { hovering } = this.state

    return (
      <Card raised centered link 
        style={{
          backgroundColor: '#f9f9f9',
          backgroundImage: hovering || mobile ? `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${service.img})` : `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${service.img})`,
          minHeight: 260,
          backgroundSize: 'cover'
        }}
        onClick={()=>{document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}
        alt={service.imgAltText}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Card.Content>
          <Card.Header style={{color: 'white', fontSize: '1.6em'}}>{service.name}</Card.Header>
          <Card.Description style={{opacity: hovering || mobile ? 1 : 0, color: 'white', fontSize: '1.2em', marginTop: 50, fontWeight: 'bold', transition: 'opacity 0.3s'}}>{service.description}<br/></Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  mobile: PropTypes.bool.isRequired
}

export default ServiceCard