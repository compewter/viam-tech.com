import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Image,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Heading from './Heading'

export default class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          {/*<Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Services</Menu.Item>
            <Menu.Item as='a'>Contact</Menu.Item>
          </Sidebar>
*/}
          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em', 'backgroundColor': '#666', 'backgroundImage': 'url(/images/hero-img.jpg)', 'backgroundRepeat': 'no-repeat', backgroundSize: 'cover' }}
              vertical
            >
              {/*<Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>*/}
              <Image src="/images/logo-side-text.png" className="header-logo-mobile" alt='abstract architecture' />
              <Heading mobile />
            </Segment>

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