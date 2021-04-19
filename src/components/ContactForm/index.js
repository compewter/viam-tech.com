import React, { Component } from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Message,
} from 'semantic-ui-react'

const asp = 'J6psq7ErWuVZ_aU7LyOwEa3YOOKzStCJ';

class ContactForm extends Component {
  state = {name:'', email:'', company: undefined, phone: undefined, message:'', loading: false, success: false, error: {}, antispam: asp}

  componentDidMount(){
    window.setMessage = (message)=>{
      this.setState({message})
    }
    
    if(window.location.href.endsWith('/contact')){
      const messageQueue = 'Hi! I\'m interested in discussing cyber security services for my organization.'.split('');
      let index = -1;
      let speed = 45;
      (function recursiveSet(){
        index++
        if(index <= messageQueue.length){
          window.setMessage(messageQueue.slice(0,index).join(''))
          setTimeout(recursiveSet,speed)
        }
      })()
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  contactSubmit = () => {
    console.log(this.state)
    this.setState({
      loading: true,
      error: false,
      success: false
    });

    try{
      fetch('https://viam.prod.with-datafire.io/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then((response)=>{
        try{
          return response.json()
        }catch(e){
          this.setState({
            loading: false,
            error: {
              field: '',
              header: 'Oops. Something went wrong.',
              content: 'Please send us an email instead contact@viam-tech.com'
            }
          })
        }
      })
      .then((response)=>{
        console.log(response)
        if(response.error){
          this.setState({
            loading: false,
            error: {
              field: response.error.slice(response.error.indexOf('.')+1, response.error.indexOf(' ')),
              header: 'Error in form',
              content: 'Please check the highlighted field'
            }
          })
        }else{
          this.setState({
            loading: false,
            success: true
          })
          
        }
      })
    }catch(e){
      this.setState({
        loading: false,
        error: {
          field: '',
          header: 'Oops. Something went wrong.',
          content: 'Please send us an email instead contact@viam-tech.com'
        }
      })
    }
  }

  render () {
    const { name, email, company, phone, message, loading, success, error } = this.state

    return (
      <Container>
        <Form onSubmit={this.contactSubmit} loading={loading} success={success} error={!!error}>
          <Header as='h3' style={{fontSize:'3em'}}>Contact Us</Header>
          {!success &&
            <div>
              <Form.Input label='Name' name='name' value={name} onChange={this.handleChange} type='text' error={error.field === 'name'} required/>
              <Form.Input label='Email' name='email' value={email} onChange={this.handleChange} type='email' error={error.field === 'email'} required/>
              <Form.Input label='Company' name='company' value={company} onChange={this.handleChange} type='text' error={error.field === 'company'} />
              <Form.Input label='Phone Number' name='phone' value={phone} onChange={this.handleChange} type='tel' error={error.field === 'phone'} />
              <Form.Input type='hidden' name='antispam' onChange={this.handleChange} />
              <Form.TextArea id='contact-message' label='Message' name='message' value={message} onChange={this.handleChange} error={error.field === 'message'} required/>
              <Button>Submit</Button>
            </div>
          }
          <Message success header='Form Submitted' content='Thank you for contacting us. We will reply to you shortly.' />
          <Message error   header={error.header} content={error.content} />
        </Form>
      </Container>
    )
  }
}

export default ContactForm