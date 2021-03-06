import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Card,
  Container,
  Header,
  Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import DesktopContainer from '../Desktop'
import MobileContainer from '../Mobile'
import './BlogFeed.css'
import blogs from '../../content/blogs'

const entries = blogs.map(blog=>{
  return {
    meta: blog.date,
    header: blog.title,
    description: blog.snippet,
    link: true,
    as: Link,
    to: blog.path,
    onClick: ()=>{window.scrollTo(0, 0)}
  }
})


const ResponsiveContainer = ({ activePage, children }) => {
  return <div>
    <DesktopContainer activePage={activePage}>{children}</DesktopContainer>
    <MobileContainer activePage={activePage}>{children}</MobileContainer>
  </div>
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const BlogFeed = ({activePage}) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>Cyber Security Blog | Viam Technologies</title>
      <meta property="og:title" content="Cyber Security Blog | Viam Technologies" />
      <meta name="description" content="Read about why preparing for cyber security incidents is critical for your organization. Our hacking explained articles walk you through how common attacks work." />
      <meta name="og:description" content="Read about why preparing for cyber security incidents is critical for your organization. Our hacking explained articles walk you through how common attacks work." />
    </Helmet>
    <Segment id='blog-feed' vertical>
      <Container>
        <Header id='blog-header' as='h1'>Cyber Security Blog</Header>
        <Card.Group items={entries} itemsPerRow={1} centered />
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default BlogFeed