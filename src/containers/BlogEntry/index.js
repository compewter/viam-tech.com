import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Container,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'
import DesktopContainer from '../Desktop'
import MobileContainer from '../Mobile'
import './BlogEntry.css'
import Signature from '../../components/BlogSignature'

const ResponsiveContainer = ({ activePage, children }) => {
  return <div>
    <DesktopContainer activePage={activePage}>{children}</DesktopContainer>
    <MobileContainer activePage={activePage}>{children}</MobileContainer>
  </div>
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const BlogEntry = ({activePage, blog}) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>{blog.title} | Viam Technologies</title>
      <meta name="description" content={blog.snippet} />
    </Helmet>
    <Segment id='blog-entry' vertical>
      <Container>
        <Header as='h1' style={{marginBottom: 40}}>
          {blog.title}
          <Header.Subheader><Icon name='calendar alternate outline' />{blog.date} | <Icon name='user outline' />{blog.author}</Header.Subheader>
        </Header>
        <div style={{fontSize: '1.2rem'}}>
          {blog.content}
        </div>
        <Signature author={blog.author} />
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default BlogEntry