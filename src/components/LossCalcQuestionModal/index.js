import React, { Component } from 'react'
import {
  Button,
  Dropdown,
  Form,
  Modal,
} from 'semantic-ui-react'
import AffectedPercentageForm from '../AffectedPercentageForm'
import DowntimeForm from '../DowntimeForm'

class ContactForm extends Component {
  state = {
    done: false,
    questionIndex: 0
  }

  factors = {}

  questions = [
    {
      header: '',
      q: 'What is Ransomware?',
      description: <div>
        <p>Ransomware is particularly nasty type of malware which prevents users from accessing their system and data and demands a ransom payment in order to regain access.</p>
        <p>The WannaCry Ransomware Attack is an example that managed to infect 70,000 NHS devices costing them an estimated <a href="https://www.zdnet.com/article/this-is-how-much-the-wannacry-ransomware-attack-cost-the-nhs/" target="_blank" rel="noopener noreferrer">$121M</a>.</p>
      </div>,
      showInput: false
    },
    {
      header: '',
      q: 'By answering the following questions we can estimate the cost of a ransomware attack to your organization.',
      description: <div>
        <p>None of this information is collected by us. All information stays on your computer and all calculations are done by your web browser.</p>
        <p>Don't worry too much about being precise with your answers; they are used to calculate a general estimate. Once you're done answering the questions you will be able to adjust values and see how they affect the total cost.</p>
      </div>,
      showInput: false
    },
    {
      header: '',
      q: 'How many employees are in your organization?',
      factor: 'employee_count',
      icon: 'users',
      default: 100,
      showInput: true
    },
    {
      q: 'How many computers are in your organization?',
      factor: 'endpoint_count',
      icon: 'computer',
      default: 100,
      showInput: true
    },
    {
      q: 'What is your annual company revenue?',
      description: '',
      compute: function(val, factors, update){
        factors['annual_revenue'] = val
        update('avg_employee_rev_gen', Math.trunc(.6*(val/factors.employee_count/52/40)))
      },
      icon: 'dollar',
      default: 40000000,
      showInput: true
    },
    {
      q: 'What is the median salary at your company?',
      description: 'Consider their total compensation (payroll taxes, benefits, etc.).',
      compute: function(val, factors, update){
        factors['median_salary'] = val
        update('avg_employee_hrly', Math.trunc(val/52/40))
      },
      icon: 'dollar',
      default: 80000,
      showInput: true
    },
    {
      q: 'Do you outsource your IT services?',
      description: <div>
        <Dropdown options={[{text:'Yes', value: true},{text:'No', value: false}]} defaultValue={true} onChange={(e,d)=>{this.setState({value:+d.value})}}/>
      </div>,
      compute: function(val, factors, update){
        const computedVal = val ? 150 : Math.trunc(95000/52/40)
        factors['it_hrly_rate'] = computedVal
        factors['it_outsourced'] = val
        update('it_hrly_rate', computedVal)
      },
      default: true,
      showInput: false
    },
    {
      q: 'Does your existing IT staff have the expertise neccessary to respond to security incidents?',
      description: <div>

        <Dropdown options={[{text:'Yes', value: false/*defaultValue bug*/},{text:'No', value: true}]} defaultValue={true} onChange={(e,d)=>{this.setState({value:+d.value})}}/>
      </div>,
      compute: function(val, factors, update){
        const computedVal = val ? 210 : factors.it_hrly_rate
        factors['sec_hrly_rate'] = computedVal
        factors['it_sec_outsourced'] = val
        update('sec_hrly_rate', computedVal)
      },
      default: true,
      showInput: false
    },
    {
      q: 'Now we will consider factors which influence the percentage of computers affected by a ransomware attack.',
      description: (<div>
        <p>Please select each of the following which apply to your organization:</p>
        <AffectedPercentageForm updateParent={this.setState.bind(this)} factors={this.factors}/>
      </div>),
      compute: function(val, factors, update){
        factors['affected_percentage'] = val/100
        update('affected_percentage',val/100)
      },
      default: 85,
      showInput: false
    },
    {
      q: 'Now we will consider factors which influence the time it takes to recover from a ransomware attack.',
      description: (<div>
        <p>Please select each of the following which apply to your organization:</p>
        <DowntimeForm updateParent={this.setState.bind(this)} factors={this.factors}/>
      </div>),
      compute: function(val, factors, update){
        factors.downtime = val*8
        update('downtime', val*8)
      },
      default: 40,
      showInput: false
    }
  ]

  next = ()=>{
    const {questionIndex, value} = this.state
    const {setRange, updateFactor} = this.props
    const {factors, questions} = this
    const question = questions[questionIndex]

    if(!question.factor && !question.compute){
      this.setState({
        value: questions[questionIndex+1] ? questions[questionIndex+1].default_range || questions[questionIndex+1].default : '',
        questionIndex: questionIndex+1
      })
    }else if(question.compute){
      question.compute(value, factors, updateFactor)
      this.setState({
        value: questions[questionIndex+1] ? questions[questionIndex+1].default_range || questions[questionIndex+1].default : '',
        questionIndex: questionIndex+1
      })
    }else{
      if(typeof value === 'object'){
        setRange(question.factor, question.options[value])
      }else{
        factors[question.factor] = value
        updateFactor(question.factor, value)
      }
      this.setState({
        value: questions[questionIndex+1] ? questions[questionIndex+1].default_range || questions[questionIndex+1].default : '',
        questionIndex: questionIndex+1
      })
    }

    if(questionIndex + 1 === questions.length){
      this.setState({
        done: true
      })
      updateFactor('factors',factors)
      updateFactor('done', true)
    }
  }

  render () {
    const {done, questionIndex} = this.state
    const {questions} = this
    const question = questions[questionIndex] || {}

    return (
      <Modal open={!done} dimmer="blurring">
        <Modal.Header>{question.header || 'What Would a Ransomware Attack Cost You?'}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <b>{question.q}</b><br/>
            {question.description}
            {question.showInput && <Form.Input type="number" icon={question.icon} value={this.state.value||question.default} onChange={(e,d)=>{this.setState({value:+d.value})}} />}
            {question.options && question.options.map((option, ind)=>{
              return <Form.Radio 
                checked={this.state.value === ind}
                key={ind}
                label={`${option.low}${option.high ? `-${option.high}` : ''}`}
                onChange={(e,{value})=>{this.setState({value})}}
                value={ind}
              />
            })}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <div style={{float:'left', marginTop: 5, textAlign: 'left', display: questionIndex > 1 ? '' : 'none'}}>
            <i>Dont worry, you will be able to adjust values at the end.</i>
            <br/>
            <i>None of this information is collected or sent to us in any way.</i>
          </div>
          <Button onClick={this.next}>Proceed</Button>
          <i>{questionIndex+1}/{questions.length}</i>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ContactForm