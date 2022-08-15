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

const ResponsiveContainer = ({ activePage, children }) => {
  return <div>
    <DesktopContainer activePage={activePage}>{children}</DesktopContainer>
    <MobileContainer activePage={activePage}>{children}</MobileContainer>
  </div>
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Form = ({activePage, form}) => (
  <ResponsiveContainer activePage={activePage}>
    <Helmet>
      <title>{form.name} | Viam Technologies</title>
      <meta property="og:title" content={`${form.title} | Viam Technologies`} />
    </Helmet>
    <Segment vertical>
      <Container>
        <iframe frameborder="0" style={{height:`${form.height || "1000px"}`, width:"100%", border: "none"}} src={form.form_url}></iframe>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Form