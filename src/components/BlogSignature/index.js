import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Image,
  Header,
  Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const signatureContent = {
  'Michael Wetherald': {
    image: '/images/blog/michael.png',
    title: 'Security Engineer and Co-Founder',
    signatureText: 'Michael is the inventor of a patent pending next generation web proxy technology and brings to Viam his expertise in web and Linux security. Outside of work he enjoys carpentry, having built a dog mansion for his spoiled boy.'
  },
  'Jose Barrientos': {
    image: '/images/blog/jose.png',
    title: 'Security Engineer and Co-Founder',
    signatureText: ''
  }
}

const BlogSignature = ({author}) => (
  <Segment vertical>
    <Container>
      <Divider />
      <Grid style={{textAlign: 'left'}}>
        <Grid.Column computer={2} mobile={8}>
          <Image src={signatureContent[author].image}/>
        </Grid.Column>
        <Grid.Column computer={12} mobile={16}>
          <Header>
            {author}
            <Header.Subheader>{signatureContent[author].title}</Header.Subheader>
          </Header>
          <p>{signatureContent[author].signatureText}</p>
          <p>When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services.<br/><Link to='/contact' onClick={()=>window.scrollTo(0, 0)}>Contact us</Link> today to be prepared.</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
)

export default BlogSignature