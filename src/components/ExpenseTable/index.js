import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Icon,
  Popup,
  Table
} from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import template from '../../content/ransomwarePDFTemplate'

class ExpenseTable extends Component {

  download = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4'
    })


    template.forEach((item)=>{
      doc[item.method].apply(doc, item.generate ? this[item.generate]() : item.args)
    })

    doc.save('Ransomware Cost Report.pdf')
  }

  expenseCalcs(){
    const margin = {top: 25}
    const columnStyles = {0: {cellWidth: 50}, 1:{cellWidth: 160}, 2:{cellWidth: 25, textColor: 'red', halign:'right'}}
    const columns = [{header:'Expense',  dataKey:'name'},{header:'Equation', dataKey:'equation_text'}]
    const body = this.props.expenseTypes.map((expense)=>{
      const {name, equation_text} = expense
      return {name,equation_text}
    })
    return [{margin, columnStyles, columns, body}]
  }

  variableValues(){
    const {factors} = this.props
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
    const margin = {top: 70}
    const columnStyles = {0: {cellWidth: 50}, 1: {cellWidth: 160}}
    const columns = [{header:'Variable',  dataKey:'name'}, {header:'Value', dataKey:'val'}]
    const body = variables.map((v)=>{
      const {name, key, unit} = v
      const val = `${factors[key]} ${unit}`
      return {name,val}
    })
    return [{margin, columnStyles, columns, body}]
  }

  render () {
    const { expenseTypes, estimates, factors, showScenario, showCount, showDowntime, showTable, sum, visibleIndex } = this.props

    return (
      <Container>
        <div style={ showScenario ? {display: '', opacity: 1, textAlign: 'left'} : {height: 0, display: 'inline-block', opacity: 0, overflow: 'hidden'} }>
          <p>Your organization was hit with a ransomware attack.</p>
          <p style={{opacity: showCount ? 1 : 0, fontSize: 18, transition: '.5s ease-in-out'}}><b style={{fontSize: 20}}>{factors.endpoint_count * factors.affected_percentage}</b> endpoints were infected.</p>
          <p style={{opacity: showDowntime ? 1 : 0, fontSize: 18, transition: '.5s ease-in-out'}}>It has taken <b style={{fontSize: 20}}>{factors.downtime/8} business days</b> to recover business operations.</p>
        </div>
        <Table id="expense_table" celled striped style={ showTable ? {display: '', opacity: 1, transition: '.5s ease-in-out'} : {height: 0, display: 'inline-block', opacity: 0, overflow: 'hidden'} }>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={3}>Expense</Table.HeaderCell>
              <Table.HeaderCell width={11}>Description</Table.HeaderCell>
              <Table.HeaderCell width={2}>Estimate</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body> 
            {expenseTypes.map((expense, ind)=>{
              return <Table.Row className='expense_row' key={'expense_'+expense.id} style={visibleIndex >= ind ? {display: '', opacity: 1} : {height: 0, display: 'inline-block', opacity: 0}}>
                <Table.Cell>{expense.name}</Table.Cell>
                <Table.Cell>{expense.description}</Table.Cell>
                <Table.Cell style={{color: 'red'}}>{formatToDollars(estimates[expense.id])}<Popup trigger={<Icon style={{color: 'black', marginLeft: 5}} name='question circle outline' />} content={expense.equation_text} /></Table.Cell>
              </Table.Row>
            })}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell style={{textAlign: 'right'}}>Total:</Table.Cell>
              <Table.Cell style={{color: 'red'}}>{formatToDollars(sum)}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div style={visibleIndex >= expenseTypes.length -1 && showTable ? {opacity: 1, transition: '.5s ease-in-out'} : {opacity: 0}}>
          <i style={{marginRight: 5}}>Download the PDF report for additional details.</i>
          <Button onClick={this.download}>Download Report</Button>
        </div>
      </Container>
    )
  }
}

function formatToDollars(val){
  return '$' + Number(val).toLocaleString('en')
}

export default ExpenseTable