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
    signatureText: '400 lbs and living in his mother\'s basement, you know he\'s the real deal.'
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
          <p>When criminals compromise your organization will you know? Viam Technologies provides a range of cyber security services.<br/><Link to='/contact'>Contact us</Link> today to be prepared.</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
)

export default BlogSignature