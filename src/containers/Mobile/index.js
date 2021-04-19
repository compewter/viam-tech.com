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
  state = {
    sidebarOpened: false
  }

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
            <Menu.Item as={Link} className='mobile-item' active={activePage==='home'} to='/' onClick={()=>window.scrollTo(0, 0)} >Home</Menu.Item>
            <Menu.Item as={Link} className='mobile-item' active={activePage==='services'} to='/services' onClick={()=>window.scrollTo(0, 0)} >Services</Menu.Item>
            <Menu.Item as={Link} className='mobile-item' active={activePage==='blog'} to='/blog' onClick={()=>window.scrollTo(0, 0)} >Blog</Menu.Item>
            <Menu.Item as={Link} className='mobile-item' active={activePage==='contact'} to='/contact' onClick={()=>window.scrollTo(0, 0)} >Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Container>
              <Menu pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle} style={{display: activePage === 'calculator' ? 'none' : ''}}>
                  <Icon name='sidebar' style={{color: 'rgb(140, 140, 140)'}} />
                </Menu.Item>
                {activePage !== 'home' && <Link className='logo-link-container' style={{paddingRight: activePage==='calculator' ? 0 : ''}} to={activePage === 'calculator' ? '/blog' : '/'}><Image src="/images/logo/logo-side-text.png" className='header-menu-logo-mobile' alt='logo'/></Link>}
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