import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Icon,
  Image,
  Menu,
  Responsive,
  Sidebar,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './Mobile.css'

export default class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { activePage, children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable style={{backgroundColor: 'white'/*important for preventing sidebar animation glitch*/}}>
          <Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}>
            <Menu.Item as={Link} active={activePage==='home'} to='/' onClick={()=>window.scrollTo(0, 0)} >Home</Menu.Item>
            <Menu.Item as={Link} active={activePage==='services'} to='/services' onClick={()=>window.scrollTo(0, 0)} >Services</Menu.Item>
            <Menu.Item as={Link} active={activePage==='blog'} to='/blog' onClick={()=>window.scrollTo(0, 0)} >Blog</Menu.Item>
            <Menu.Item as={Link} active={activePage==='contact'} to='/contact' onClick={()=>window.scrollTo(0, 0)} >Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Container>
              <Menu pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                {activePage !== 'home' && <Image src="/images/logo/logo-side-text.png" className='header-menu-logo-mobile' alt='logo'/>}
              </Menu>
            </Container>
            {children}
            <Footer mobile={true}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}