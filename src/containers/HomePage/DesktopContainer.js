import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Image,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Heading from './Heading'

export default class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    // const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        > 
          {/*<Menu
            fixed={fixed ? 'top' : null}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
            style={{"marginBottom": 0}}
          > 
            <Container>
              <Menu.Item as='a' active>Home</Menu.Item>
              <Menu.Item as='a'>Services</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>
            </Container>
          </Menu>*/}
          <Image src="/images/logo-side-text.png" className="header-logo-desktop" alt='abstract architecture'/>
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', 'backgroundColor': '#666', 'backgroundImage': 'url(/images/hero-img.jpg)', 'backgroundRepeat': 'no-repeat', backgroundSize: 'cover' }}
            vertical
          >
            <Heading />
          </Segment>
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