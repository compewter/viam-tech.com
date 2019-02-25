import React, { Component } from 'react'
import {
  Button,
  Form,
  Modal,
} from 'semantic-ui-react'

const counts = {}

const questions = [
  {
    q: 'By answering these 10 questions about your business we can estimate what a ransomware attack could cost your organization.',
    description: 'None of this information is collected or sent to us in any way. After these questions are answered you will be able to adjust values and see how each item is calculated.'
  },
  {
    q: 'How many employees are in your organization?',
    factor: 'employee_count',
    icon: 'users',
    default: 100,
    // options: [
    //   {
    //     low: 1,
    //     high: 10
    //   },
    //   {
    //     low: 11,
    //     high: 50
    //   },
    //   {
    //     low: 51,
    //     high: 100
    //   },
    //   {
    //     low: 101,
    //     high: 500
    //   },
    //   {
    //     low: 501,
    //     high: 1000
    //   }
    // ],
    // default_range: 1
  },
  {
    q: 'How many computers are in your organization?',
    factor: 'endpoint_count',
    icon: 'computer',
    default: 100,
    // options: [
    //   {
    //     low: 1,
    //     high: 10
    //   },
    //   {
    //     low: 11,
    //     high: 50
    //   },
    //   {
    //     low: 51,
    //     high: 100
    //   },
    //   {
    //     low: 101,
    //     high: 500
    //   },
    //   {
    //     low: 501,
    //     high: 1000
    //   }
    // ],
    // default_range: 1
  },
  {
    q: 'What is your annual company revenue?',
    description: '',
    factor: 'avg_employee_rev_gen',
    icon: 'dollar',
    default: 3000000
  },
  // {
  //   q: 'How many people are in your IT staff?',
  //   factor: 'it_staff_count',
  //   icon: 'users',
  //   default: 3,
  //   default_range: 0
  // },
  {
    q: 'What is the average hourly rate of your employees?',//include table of annual salaries to hourly rates
    description: 'Consider their total compensation (payroll taxes, benefits, etc.).',
    factor: 'avg_employee_hrly',
    icon: 'dollar',
    default: 40,
    // options:[],
    // default_range: 0
  },
  {
    q: 'What is the average hourly cost to the company of each IT staff member?',
    description: 'In addition to their hourly rate, consider their total compensation (payroll taxes, benefits, etc.). This is used to estimate a more realistic cost of their efforts in resolving the ransomware attack.',
    factor: 'it_hrly_rate',
    icon: 'dollar',
    default: 65
  },
  {
    q: 'What is the average hourly cost to the company of each IT Security staff member?',
    description: 'Does your current IT staff have the expertise and training to handle incident response? If so, use the same rate as before. Otherwise IT security consulting hourly rates start around $210 per hour.',
    factor: 'sec_hrly_rate',
    icon: 'dollar',
    default: 210
  },
  // {
  //   q: 'Now we will model the details of the potential ransomware attack.',
  //   description: 'We provide typical default values and a description of what factors affect that value to help you pick a value that makes sense. Don\'t worry, you can adjust these values later.',
  // },
  {
    q: 'What percentage of computers were affected in the attack?',
    description: 'Factors which increase this value are a lack of automated patch management, lack of system configuration management, network intrusion detection systems (NIDS), host intrusion detection systems (HIDS), insufficient security awareness training, no phishing campaign tests, no incident response team or plan.',
    factor: 'affected_percentage',
    icon: 'percent',
    default: 45,
    options:[],
    default_range: 0
  },
  // {
  //   q: 'How many man-hours does your security staff put into resolving the incident?',
  //   description: 'Having an incident response plan in place will drastically reduce the number of hours necessary. A proper incident handling procdure will include containing the problem, eradicating it, recover the environment, and provide lessons learned and recommendations to prevent it from happening again.',
  //   factor: 'sec_resolve_time',
  //   icon: 'clock outline',
  //   default: 80
  // },
  // {
  //   q: 'How many business hours until you have recovered?',
  //   description: 'This is the total amount of downtime before your staff has regained access to their systems and data. An incident response plan and trained staff will reduce the amount of time. Typically it will take a few days to recover, but in some cases it may take weeks.',
  //   factor: 'downtime',
  //   icon: 'clock outline',
  //   default: 40
  // },
  // {
  //   q: 'What is the ransom amount?',
  //   description: 'Average ransom demand in 2017 was $544 per endpoint. https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/istr-ransomware-2017-en.pdf',
  //   factor: 'rnsm_amt',
  //   icon: 'dollar',
  //   default: 600
  // },
  // {
  //   q: 'There are some indirect costs to consider.',
  //   description: 'These are very difficult to estimate and some of them really come down to the timing of the attack. But we still want to consider them as possibilities of increasing the cost of the incident.',
  // },
  // {
  //   q: 'What is the estimated reputation damage?',
  //   description: 'What kind of impact would this security incident have on your brand or reputation? What is the financial impact from your customers, partners, investors, shareholders learning of a security incident?',
  //   factor: 'rep_damage',
  //   icon: 'dollar',
  //   default: 15000
  // },
  // {
  //   q: 'Could you lose a major account if a deadline is missed from employee downtime?',
  //   description: 'If you could, what kind of financial damage could that cause?',
  //   factor: 'acct_loss',
  //   icon: 'dollar',
  //   default: 60000
  // },
  // {
  //   q: 'What is the valuation of the data on the machines?',
  //   description: 'In some cases the data becomes unrecoverable even if you pay the ransom. It could be the intention of the criminals to never provide a way to recover the data, or they could have unintentonally improperly implemented the encryption.',
  //   factor: 'data_loss',
  //   icon: 'dollar',
  //   default: 30000
  // }
]

class ContactForm extends Component {
  state = {
    questionIndex: 0,
    value: questions[0].default
  }

  next = ()=>{
    const {questionIndex, value} = this.state
    const {setRange, updateFactor} = this.props
    const question = questions[questionIndex]

    if(!question.factor){
      this.setState({
        value: questions[questionIndex+1].default_range || questions[questionIndex+1].default,
        questionIndex: questionIndex+1
      })
    }else{
      if(typeof value === 'object'){
        setRange(question.factor, question.options[value])
      }else{
        updateFactor(question.factor, value)
      }
      this.setState({
        value: questions[questionIndex+1].default_range || questions[questionIndex+1].default,
        questionIndex: questionIndex+1
      })
    }

    // if(question.factor === 'employee_count'){
    //   counts.employees = question.options[value].high
    //   Object.defineProperty(questions.find((q)=>{
    //     return q.factor === 'it_staff_count'
    //   }), 'options', {
    //     value: [
    //       {low: 0},
    //       {low: 1, high: 2},
    //       {low: 3, high: 5},
    //       {low: 6, high: 10},
    //       {low: 11, high: 20},
    //       {low: 21, high: 50}
    //     ]
    //   })
    // }
  }


  render () {
    const {questionIndex} = this.state
    const question = questions[questionIndex]

    return (
      <Modal defaultOpen={true} dimmer="blurring">
        <Modal.Header>What Would a Ransomware Attack Cost You?</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <b>{question.q}</b><br/>
            <i>{question.description}</i>
            {question.factor && !question.options && <Form.Input type="number" icon={question.icon} value={this.state.value||question.default} onChange={(e,d)=>{this.setState({value:+d.value})}} />}
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
          <i style={{float:'left', marginTop: 10}}>{questionIndex+1}/{questions.length}</i>
          <Button onClick={this.next}>Proceed</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ContactForm