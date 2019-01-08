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
            <Image src="/images/logo/logo-side-text.png" className='header-menu-logo-desktop' alt='abstract architecture'/>
            <Container>
              <Menu.Item active={activePage==='home'}>
                <Link style={{color: 'black'}} to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item active={activePage==='contact'}>
                <Link style={{color: 'black'}} to='/contact'>Contact</Link>
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
        {children}
        <Footer />
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}