import React, { Component } from 'react'
import {
  Table
} from 'semantic-ui-react'

import services from '../../content/services'

import './Result.css'
import '../../fonts/Playfair_Display/PlayfairDisplay-Black.ttf'
import '../../fonts/Playfair_Display/PlayfairDisplay-Bold.ttf'

const expenseTypes = [
  {
    id: 'emp_down_hrly',
    name: 'Employee Downtime - Hourly Rate',
    description: 'Employee systems cannot be accessed or used while they are being held for ransom. This results in employees being paid for no, or severely impaired work.',
    compute: function(factors){
      return factors.downtime * factors.avg_employee_hrly * factors.employee_count * factors.affected_percentage
    },
    equation_text: 'Downtime x Average Hourly Rate x Affected Percentage x Number of Employees'
  },
  {
    id: 'emp_down_rev',
    name: 'Employee Downtime - Lost Revenue',
    description: 'Employee systems cannot be accessed or used while they are being held for ransom. This results in employees being unable to generate additional revenue.',
    compute: function(factors){
      return factors.downtime * factors.avg_employee_rev_gen * factors.employee_count * factors.affected_percentage
    },
    equation_text: 'Downtime x Average Hourly Revenue Generation Rate x Affected Percentage x Number of Employees'
  },
  {
    id: 'rnsm_pymnt',
    name: 'Ransom Payment',
    description: 'The total sum of ransom being demanded to regain access to the systems.',
    compute: function(factors){
      return factors.rnsm_amt * factors.endpoint_count * factors.affected_percentage
    },
    equation_text: 'Ransom Amount Per Endpoint x Affected Percentage x Number of Endpoints'
  },
  {
    id: 'it_resp',
    name: 'IT Staff Response',
    compute: function(factors){
      return factors.downtime * factors.it_staff_count * factors.it_hrly_rate
    },
    description: 'The cost of your IT team first addressing the issue and following through to resolution',
    equation_text: 'Downtime x IT Staff Count x IT Staff Hourly Cost'
  },
  {
    id: 'inc_rsp',
    name: 'Incident Response',
    description: 'Cost of dispatching security professionals to assess what happened, contain the problem, eradicate it, and prevent it from happening again.',
    compute: function(factors){
      return factors.sec_resolve_time * factors.sec_hrly_rate
    },
    equation_text: 'Incident Response Hours x Hourly Security Staff Rate'
  }
]

const variables = [
  {
    name: 'Downtime',
    key: 'downtime',
    unit: 'Business Hours'
  },
  {
    name: 'Average Hourly Rate',
    key: 'avg_employee_hrly',
    unit: '$'
  },
  {
    name: 'Affected Percentage',
    key: 'affected_percentage',
    unit: ''
  },
  {
    name: 'Number of Employees',
    key: 'employee_count',
    unit: ''
  },
  {
    name: 'Average Hourly Revenue Generation Rate',
    key: 'avg_employee_rev_gen',
    unit: '$'
  },
  {
    name: 'Number of Endpoints',
    key: 'endpoint_count',
    unit: ''
  },
  {
    name: 'Ransom Amount Per Endpoint',
    key: 'rnsm_amt',
    unit: '$'
  },
  {
    name: 'IT Staff Count (Handling Incident)',
    key: 'it_staff_count',
    unit: ''
  },
  {
    name: 'IT Staff Hourly Cost',
    key: 'it_hrly_rate',
    unit: '$'
  },
  {
    name: 'Incident Response Hours',
    key: 'sec_resolve_time',
    unit: 'Business Hours'
  },
  {
    name: 'IT Security Hourly Cost',
    key: 'sec_hrly_rate',
    unit: '$'
  }
]

export default class LossCalcResult extends Component {
  state = {
    factors: {},
    estimates: {},
    sum: 0
  }

  calculateEstimates = (factors)=>{
    const newEstimates = {}
    let newSum = 0
    expenseTypes.forEach((expense)=>{
      newEstimates[expense.id] = expense.compute(factors)
      newSum += newEstimates[expense.id]
    })

    this.setState({
      estimates: newEstimates,
      sum: newSum
    })
  }

  componentDidMount(){
    const factors = parseQueryString(this.props.searchString)
    this.setState({
      factors
    })
    this.calculateEstimates(factors)
  }

  render(){
    const {estimates, factors, sum} = this.state
    
    return (
      <div className="result-container">
        {/*Page 1*/}
        <div className="page-container">
          <h1 className="heading">Ransomware Cost Report</h1>
          <img alt="logo" className="heading-logo" src="/images/logo/logo-bottom-text.svg" />
          <p className="heading-signature">From Viam Technologies</p>
          <p className="page-footer">© 2019 Viam Technologies | www.viam-tech.com | contact@viam-tech.com | (858) 295-8426</p>
        </div>

        {/*Page 2*/}
        <div className="page-container">
          <h2 className="item-heading">Executive Summary</h2>
          <p>Below you will find the estimated cost of a simulated ransomware attack on your organization. It uses the values you have provided and is based on assumptions about your environment. For a more accurate report tailored to your organization of this attack and others contact us today for a free consultation.</p>
          <h2 className="item-heading">Direct Expenses</h2>
          <Table id="expense_table" stackable={false} celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={3}>Expense</Table.HeaderCell>
                <Table.HeaderCell width={11}>Description</Table.HeaderCell>
                <Table.HeaderCell width={2}>Estimate</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body> 
              {expenseTypes.map((expense, ind)=>{
                return <Table.Row className='expense_row' key={'expense_'+expense.id}>
                  <Table.Cell><b>{expense.name}</b></Table.Cell>
                  <Table.Cell>{expense.description}</Table.Cell>
                  <Table.Cell style={{color: 'red'}}>{formatToDollars(estimates[expense.id])}</Table.Cell>
                </Table.Row>
              })}
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell style={{textAlign: 'right'}}>Total:</Table.Cell>
                <Table.Cell style={{color: 'red'}}>{formatToDollars(sum)}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <h2 className="item-heading">Indirect Costs</h2>
          <p>There are several indirect costs to consider which are outside the scope of this estimate:</p>
          <ul>
            <li>
              <b>Reputation Damage</b> - What kind of impact would this security incident have on your brand or reputation? What is the financial impact from your customers, partners, investors, shareholders learning of a security incident?
            </li>
            <li>
              <b>Major Account Loss</b> - If you could lose a major account from a missed deadline, what kind of financial damage would that cause?
            </li>
            <li>
              <b>Unrecoverable Data</b> - Criminals have made poor quality ransomware, lost the keys, or refuse to provide them despite payment. You have insufficient or no backups, or the backups have been compromised as well. What would this loss of data cost your organization?
            </li>
          </ul>
          <p className="page-footer">© 2019 Viam Technologies | www.viam-tech.com | contact@viam-tech.com | (858) 295-8426</p>
        </div>

        {/*Page 3*/}
        <div className="page-container">
          <h2 className="item-heading">Is Your Risk Of Ransomware and Other Attacks Appropriately Managed?</h2>
          <p>Risk is an inherent part of any operation. As the leader of your organization, it is your responsibility to recognize where the risks to the organization lie and to mitigate those risks. By determining which risks have the highest likelihood and impact, a risk assessment allows you to intelligently and effectively invest in protecting your organization.</p>
          <p>Viam Technologies provides a range of cyber security services. Contact us today to intelligently manage the risk facing your organization</p>

          <h2 className="item-heading">Services</h2>
          <ul className="service-list">
            {services.map((service, ind)=>{
              return <li className="service-list-item">
                <b>{service.name}</b>
                <p className="service-list-text">{service.description}</p>
              </li>
            })}
          </ul>
          {/*<Table stackable={false} celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={4}>Service</Table.HeaderCell>
                <Table.HeaderCell width={12}>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {services.map((service,ind)=>{
                return <Table.Row className="service_row" key={`service_${ind}`}>
                  <Table.Cell>{service.name}</Table.Cell>
                  <Table.Cell>{service.description}</Table.Cell>
                </Table.Row>
              })}
            </Table.Body>
          </Table>*/}
          <p className="page-footer">© 2019 Viam Technologies | www.viam-tech.com | contact@viam-tech.com | (858) 295-8426</p>
        </div>

        {/*Page 4*/}
        <div className="page-container">
          <h2>Appendix A - Expense Calculations</h2>
          <h3>Equations</h3>
          <Table stackable={false} celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={4}>Expense</Table.HeaderCell>
                <Table.HeaderCell width={12}>Equation</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {expenseTypes.map((expense, ind)=>{
                return <Table.Row className='expense_row' key={'equation_'+expense.id}>
                  <Table.Cell>{expense.name}</Table.Cell>
                  <Table.Cell>{expense.equation_text}</Table.Cell>
                </Table.Row>
              })}
            </Table.Body>
          </Table>

          <h3>Variables</h3>
          <Table stackable={false} celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={10}>Variable</Table.HeaderCell>
                <Table.HeaderCell width={6}>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body> 
              {variables.map((v,i)=>{
                const {name, key, unit} = v
                return <Table.Row className='expense_row' key={'var_'+i}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{`${factors[key]} ${unit}`}</Table.Cell>
                </Table.Row>
              })}
            </Table.Body>
          </Table>

          <p className="page-footer">© 2019 Viam Technologies | www.viam-tech.com | contact@viam-tech.com | (858) 295-8426</p>
        </div>
      </div>
    )
  }
}

function parseQueryString(str){
  console.log(str)
  if(!str.startsWith('?')){
    return {}
  }
  str = str.slice(1)
  const splitArr = str.split('&')
  return splitArr.reduce((pv,arr)=>{
    const [key,val] = arr.split('=')
    pv[key] = val
    return pv
  },{})
}

function formatToDollars(val){
  return '$' + Number(val).toLocaleString('en')
}