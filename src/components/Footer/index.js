import React from 'react'
import { 
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

const Footer = (props) => (
  <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: 'black', bottom: 0, position: 'absolute', width: '100%' }} textAlign={props.mobile ? 'center' : 'left'}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image height='50' src='/images/logo/logo-side-text.png' style={{margin: '0 auto'}}/>
            <p style={{textAlign: 'center', marginTop: 20}}>© {new Date().getFullYear()} Viam Technologies</p>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Viam Technologies' />
            <List link inverted>
              <List.Item as='a' href='mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#118;&#105;&#097;&#109;&#045;&#116;&#101;&#099;&#104;&#046;&#099;&#111;&#109;'>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#118;&#105;&#097;&#109;&#045;&#116;&#101;&#099;&#104;&#046;&#099;&#111;&#109;</List.Item>
              <List.Item as='a' href='tel:&#049;&#045;&#056;&#053;&#056;&#045;&#050;&#057;&#053;&#045;&#056;&#052;&#050;&#054;'>(&#056;&#053;&#056;)&#032;&#050;&#057;&#053;&#045;&#056;&#052;&#050;&#054;</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer