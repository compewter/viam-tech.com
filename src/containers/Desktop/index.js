import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Image,
  Menu,
  Responsive,
  Visibility
} from 'semantic-ui-react'
import Footer from '../../components/Footer'
import './Desktop.css'

export default class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, activePage } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        > 
          <Menu
            fixed={fixed ? 'top' : null}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          > 
            <Image src="/images/logo/logo-header-desktop.png" className='header-menu-logo-desktop' alt='logo'/>
            <Container>
              <Menu.Item as={Link} active={activePage==='home'} to='/' onClick={()=>window.scrollTo(0, 0)} >Home</Menu.Item>
              <Menu.Item as={Link} active={activePage==='services'} to='/services' onClick={()=>window.scrollTo(0, 0)} >Services</Menu.Item>
              <Menu.Item as={Link} active={activePage==='blog'} to='/blog' onClick={()=>window.scrollTo(0, 0)} >Blog</Menu.Item>
              <Menu.Item as={Link} active={activePage==='contact'} to='/contact' onClick={()=>window.scrollTo(0, 0)} >Contact</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
        <div style={{minHeight: window.innerHeight-250}}>
          {children}
        </div>
        <Footer />
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}