import React, { Component } from 'react'
import {
  Form
} from 'semantic-ui-react'
import './Checklist.css'

class Checklist extends Component {
  state = {
  }

  itemChecked = (checked, question) => {
    const {factors} = this.props
    //factors stored on parent
    factors[question.key] = checked
  }

  render () {
    const {} = this.state
    const {factors, isMobile, questions} = this.props
    return (
      <Form.Group style={{textAlign: 'left'}}>
        {questions.map((q, ind)=>{
          return <Form.Checkbox key={`chklst_q_${ind}`} label={q.label} defaultChecked={factors[q.key] || false} onChange={(e,{checked})=>{
            this.itemChecked(checked, q)
          }} style={{margin: `${isMobile ? '5px': '10px'} auto`}} />
        })}
      </Form.Group>
    )
  }
}

export default Checklist