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
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        style={{minHeight: '100vh', position: 'relative'}}
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          {
            activePage === 'calculator' ?
              <Menu
                fixed={fixed ? 'top' : null}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                className="calc-header-menu"
              >
                <a href='/#/blog' target="_blank"><Image src="/images/logo/logo-header-desktop.png" className='header-menu-logo-desktop' alt='logo'/></a>
              </Menu>
            :
              <Menu
                fixed={fixed ? 'top' : null}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                style={{backgroundColor: 'black', padding: '5px'}}
              >
                <Link to='/'><Image src="/images/logo/logo-header-desktop.png" className='header-menu-logo-desktop' alt='logo'/></Link>
                <Container>
                  <Menu.Item as={Link} active={activePage==='home'} to='/' onClick={jumpToTop} >Home</Menu.Item>
                  <Menu.Item as={Link} active={activePage==='services'} to='/services' onClick={jumpToTop} >Services</Menu.Item>
                  <Menu.Item as={Link} active={activePage==='blog'} to='/blog' onClick={jumpToTop} >Blog</Menu.Item>
                  <Menu.Item as={Link} active={activePage==='contact'} to='/contact' onClick={jumpToTop} >Contact</Menu.Item>
                </Container>
              </Menu>
          }
        </Visibility>
        <div style={{minHeight: 1000}}>
          {children}
        </div>
        <Footer />
      </Responsive>
    )
  }
}

function jumpToTop(){
  window.scrollTo(0, 0)
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}