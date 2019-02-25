import React, { Component } from 'react'
import {
  Container,
  Form,
  Header,
  Label,
  Table
} from 'semantic-ui-react'

import LossCalcQuestionModal from '../LossCalcQuestionModal'

const expenseTypes = [
  {
    id: 'emp_down_hrly',
    name: 'Employee Downtime - Hourly Rate',
    description: 'Employee systems cannot be accessed or used while they are being held for ransom. This results in employees being paid for no, or severely impaired work.',
    formula: 'downtime * avg_employee_hrly * employee_count * affected_percentage',
    formula_text: 'Downtime x Average Hourly Rate x Number of Affected Employees'
  },
  {
    id: 'emp_down_rev',
    name: 'Employee Downtime - Lost Revenue',
    description: 'Employee systems cannot be accessed or used while they are being held for ransom. This results in employees being unable to generate additional revenue.',
    formula: 'downtime * avg_employee_rev_gen * employee_count * affected_percentage',
    formula_text: 'Downtime x Average Hourly Revenue Generation Rate x Number of Affected Employees'
  },
  {
    id: 'rnsm_pymnt',
    name: 'Ransom Payment',
    description: 'The total sum of ransom being demanded to regain access to the systems.',
    formula: 'rnsm_amt * endpoint_count * affected_percentage',
    formula_text: 'Ransom Amount Per Endpoint x Number of Affected Endpoints'
  },
  {
    id: 'it_resp',
    name: 'IT Staff Response',
    description: 'The cost of your IT team first addressing the issue and following through to resolution',
    formula: 'downtime * it_staff_count * it_hrly_rate',
    formula_text: 'Business Hours to Recover x IT Staff Count x IT Staff Hourly Cost'
  },
  {
    id: 'inc_rsp',
    name: 'Incident Response',
    description: 'Cost of dispatching security professionals to assess what happened, contain the problem, eradicate it, and prevent it from happening again.',
    formula: 'sec_resolve_time * sec_hrly_rate',
    formula_text: 'Incident Response Hours * Hourly Security Staff Rate'
  },
  {
    id: 'rep_damage',
    name: 'Reputation Damage',
    description: 'What kind of impact would this security incident have on your brand or reputation? What is the financial impact from your customers, partners, investors, shareholders learning of a security incident?',
    formula: 'rep_damage',
    formula_text: 'User estimated value'
  },
  {
    id: 'acct_loss',
    name: 'Major Account Loss',
    description: 'If you could lose a major account from a missed deadline, what kind of financial damage could that cause?',
    formula: 'acct_loss',
    formula_text: 'User estimated value'
  },
  {
    id: 'data_loss',
    name: 'Unrecoverable Data',
    description: 'Criminals have made poor quality ransomware, lost the keys, or refuse to provide them. You have no backups, or the backups have been compromised as well. What would this loss of data cost your organization?',
    formula: 'acct_loss',
    formula_text: 'User estimated value'
  },
  // {
  //   id: '',
  //   name: 'Time To Recreate Lost Work',
  //   description: '',
  //   formula: '',
  //   formula_text: ''
  // },
  // {
  //   id: '',
  //   name: 'System Reinstallation',
  //   description: '',
  //   formula: '',
  //   formula_text: ''
  // }
]

class ContactForm extends Component {
  state = {
    estimates: {},
    range_estimates: {},
    factors: {
      acct_loss: 0,
      affected_percentage: .45,
      avg_employee_rev_gen: 90,
      avg_employee_hrly: 40,
      data_loss: 0,
      downtime: 16,
      employee_count: 100,
      endpoint_count: 100,
      rnsm_amt: 600,
      it_staff_count: 2,
      it_hrly_rate: 65,
      sec_hrly_rate: 210,
      sec_resolve_time: 32,
      rep_damage: 0,
      '*': '*',
      '+': '+',
      '-': '-',
      '/': '/',
    }
  }

  componentDidMount(){
    this.setState({
      estimates: this.calculateEstimates(this.state.factors)
    })
  }


  calculateEstimates = (factors)=>{
    const newEstimates = {}
    expenseTypes.forEach((expense)=>{
      newEstimates[expense.id] = eval(expense.formula.split(' ').reduce((acc,arg)=>{ return acc+=factors[arg] },''))
    })
    return newEstimates
  }

  updateFactors = (name, val)=>{
    const newFactors = {...this.state.factors}
    newFactors[name] = val
    this.setState({
      factors: newFactors,
      estimates: this.calculateEstimates(newFactors)
    })
  }

  setRange = (factor, range) => {
    const newRangeEstimates = {...this.state.range_estimates}
    newRangeEstimates[factor] = range
    this.setState({
      range_estimates: newRangeEstimates
    })
  }

  render () {
    const { estimates, factors } = this.state

    return (
      <Container>
        <LossCalcQuestionModal setRange={this.setRange.bind(this)} updateFactor={this.updateFactors.bind(this)} />
        {/*<Form style={{textAlign: 'left'}}>
          <Header as='h3' style={{fontSize:'2em'}}>Loss Expectancy Calculator</Header>
          <Form.Group>
            <Label>Staff and Computer Counts</Label>
            <Form.Input label='Number of Employees' icon='users' name='employee_count' value={factors.employee_count} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Number of Computers' icon='computer' name='endpoint_count' value={factors.endpoint_count} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='IT Staff Count' icon='users' name='it_staff_count' value={factors.it_staff_count} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
          </Form.Group>
          <Form.Group>
            <Label>Employee Rates</Label>
            <Form.Input label='Average Employee Hourly Cost' icon='dollar' name='avg_employee_hrly' value={factors.avg_employee_hrly} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Average Employee Hourly Revenue Generated' icon='dollar' name='avg_employee_rev_gen' value={factors.avg_employee_rev_gen} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='IT Staff Hourly Cost' icon='dollar' name='it_hrly_rate' value={factors.it_hrly_rate} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Security Staff Hourly Rate' icon='dollar' name='sec_hrly_rate' value={factors.sec_hrly_rate} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
          </Form.Group>
          <Form.Group>
            <Label>Ransomware Event Factors</Label>
            <div className="field">
              <label>Percentage Of Affected Computers</label>
              <span style={{textAlign:'center',display:'block'}}>{(factors.affected_percentage*100).toFixed(0)}%</span>
              <Form.Input name='affected_percentage' value={factors.affected_percentage*100} onChange={(e,d)=>{this.updateFactors(d.name,+d.value/100)}} type='range' min="0" max="100" />
            </div>
            <Form.Input label='Incident Response Man-hours to Resolve' icon='clock outline'  name='sec_resolve_time' value={factors.sec_resolve_time} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Business Hours To Recover' icon='clock outline' name='downtime' value={factors.downtime} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Ransom Amount (per endpoint)' icon='dollar' name='rnsm_amt' value={factors.rnsm_amt} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
          </Form.Group>
          <Form.Group>
            <Label>Indirect Cost Estimates</Label>
            <Form.Input label='Reputation Damage'  icon='dollar' name='rep_damage' value={factors.rep_damage} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Major Account Loss'  icon='dollar' name='acct_loss' value={factors.acct_loss} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
            <Form.Input label='Data Loss'  icon='dollar' name='data_loss' value={factors.data_loss} onChange={(e,d)=>{this.updateFactors(d.name,+d.value)}} type='number'/>
          </Form.Group>
        </Form>
        */}
        <Table celled striped style={{opacity:0}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Expense</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Estimate</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body> 
            {expenseTypes.map((expense)=>{
              return <Table.Row key={expense.id}>
                <Table.Cell>{expense.name}</Table.Cell>
                <Table.Cell>{expense.description}</Table.Cell>
                <Table.Cell style={{color: 'red'}}>{formatToDollars(estimates[expense.id])}</Table.Cell>
              </Table.Row>
            })}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell style={{textAlign:'right'}}>Total:</Table.Cell>
              <Table.Cell style={{color: 'red'}}>{formatToDollars(Object.values(estimates).reduce((sum,estimate)=>{return sum+=estimate;},0))}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

function formatToDollars(val){
  return '$' + Number(val).toLocaleString('en')
}

export default ContactForm