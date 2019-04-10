import React, { Component } from 'react'
import {
  Accordion,
  Button,
  Divider,
  Form,
  Grid,
  Label
} from 'semantic-ui-react'

class FactorAdjuster extends Component {
  state = {
    done: false,
    formCategories: {
      asked: {
        counts: [
          {key:'employee_count', text: 'Employee Count', icon: 'users'},
          {key:'endpoint_count', text: 'Endpoint Count', icon: 'desktop'},
          // {key:'server_count', text: 'Server Count', icon: 'server'},
          {key:'annual_revenue', text: 'Annual Revenue', icon: 'dollar'},
          {key:'median_salary', text: 'Median Salary', icon: 'dollar'}
        ],
        conditions: [
          {key:'it_outsourced', text: 'IT Outsourced', icon: 'checkmark'},
          {key:'it_sec_outsourced', text: 'IT Security Outsourced', icon: 'checkmark'},
          {key:'sec_training', text: 'Security Awareness Training (within last 3 months)', icon: 'checkmark'},
          {key:'phish_testing', text: 'Phishing Campaign Testing (within last 3 months)', icon: 'checkmark'},
          {key:'inc_resp_capable', text: 'Incident Response Team and Plan', icon: 'checkmark'},
          {key:'auto_backups', text: 'Regular Automated Data Backups', icon: 'checkmark'},
          {key:'key_system_backups', text: 'Complete System Backups on Key Systems', icon: 'checkmark'}
        ],
        securityConditions: [
          {key:'sys_conf_mgmt', text: 'System Configuration Management Tools', icon: 'checkmark'},
          {key:'automated_sftwr_ptchng', text: 'Automated Software Patch Management Tools', icon: 'checkmark'},
          {key:'cntrl_logging', text: 'Centralized Logging and Regular Log Auditing', icon: 'checkmark'},
          {key:'nids', text: 'Network Intrusion Detection System (NIDS)', icon: 'checkmark'},
          {key:'siem', text: 'Security Information and Event Management (SIEM)', icon: 'checkmark'},
          {key:'net_segm', text: 'Network Segmentation', icon: 'checkmark'},
        ]
      },
      inferred: [
        {key:'avg_employee_rev_gen', text: 'Average Hourly Employee Revenue Generation', icon: 'dollar'},
        {key:'avg_employee_hrly', text: 'Average Hourly Employee Wage', icon: 'dollar'},
        {key:'it_hrly_rate', text: 'IT Staff Hourly Rate', icon: 'dollar'},
        {key:'sec_hrly_rate', text: 'IT Security Hourly Rate', icon: 'dollar'},
        {key:'backup_freq', text: 'Data Backup Frequency (Days)', icon: 'calendar outline'},
        // {key:'it_staff_count', text: 'IT Staff Count', icon: 'users'},
      ],
      attack: [
        {key: 'affected_percentage', text: 'Affected Computer Percentage', icon: 'percent'},
        {key:'rnsm_amt', text: 'Ransom Amount', icon: 'dollar'},
        {key:'downtime', text: 'Downtime (Business Hours)', icon: 'hourglass half'},
        {key:'sec_resolve_time', text: 'Total Incident Response Time (Hours)', icon: 'hourglass half'},
      ]
    }
  }

  simulate = ()=>{
    window.scrollTo(0, 0)
    this.setState({done: true})
    this.props.showTable()
  }

  render () {
    const { done, factors, updateFactor } = this.props
    const {formCategories} = this.state

    return (
      <Form style={done && ! this.state.done ? {textAlign: 'left', display: '', opacity: 1, transition: '.5s ease-in-out'} : {height: 0, display: 'inline-block', opacity: 0, overflow: 'hidden'} }>
        <p>Below you will find the values used to simulate this attack and estimate the costs. Once you are happy with the values click the simulate button to calcualte the costs.</p>
        <Accordion>
          <Accordion.Title><Divider horizontal>Your Organization</Divider></Accordion.Title>
          <Accordion.Content active={!this.state.done}>
            <Label>Values You Provided</Label>
            <Form.Group widths='equal'>
              {formCategories.asked.counts.map((question,ind)=>{
                return <Form.Input fluid label={question.text} key={`question_${ind}`} icon={question.icon} value={factors[question.key]} onChange={(e,{value})=>{if(/(^\d+$)|(^$)/.test(value))updateFactor(question.key, value)}} />
              })}
            </Form.Group>
            <Grid columns={2}>
              <Grid.Column>
                <Form.Group widths='equal' grouped>
                  {formCategories.asked.conditions.map((question,ind)=>{
                    return <Form.Checkbox label={question.text} key={`question_${ind}`} icon={question.icon} checked={factors[question.key]} onChange={(e,{checked})=>{updateFactor(question.key, checked)}}/>
                  })}
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Form.Group widths='equal' grouped>
                  {formCategories.asked.securityConditions.map((question,ind)=>{
                    return <Form.Checkbox label={question.text} key={`question_${ind}`} icon={question.icon} checked={factors[question.key]} onChange={(e,{checked})=>{updateFactor(question.key, checked)}}/>
                  })}
                </Form.Group>
              </Grid.Column>
            </Grid>
          
            <Label>Inferred Values</Label>
            <Form.Group widths='equal'>
              {formCategories.inferred.map((question, ind)=>{
                return <Form.Input fluid label={question.text} key={`question_${ind}`} icon={question.icon} value={factors[question.key]} onChange={(e,{value})=>{if(/(^\d+$)|(^$)/.test(value))updateFactor(question.key, value)}}/>
              })}
            </Form.Group>
          </Accordion.Content>
          <Accordion.Title><Divider horizontal>Attack Model</Divider></Accordion.Title>
          <Accordion.Content active={!this.state.done}>
            <Form.Group widths='equal'>
              {formCategories.attack.map((question, ind)=>{
                if(question.key === 'affected_percentage'){
                  return (
                    <div className="field" key={`question_${ind}`}>
                      <label style={{textAlign:'center'}}>{question.text}</label>
                      <span style={{textAlign: 'center', display: 'block'}}>{(factors[question.key]*100).toFixed(0)}%</span>
                      <Form.Input value={factors[question.key]*100} onChange={(e,{value})=>{if(/(^\d+$)|(^$)/.test(value))updateFactor(question.key,+value/100)}} type='range' min="0" max="100" />
                    </div>
                  )
                }
                return <Form.Input fluid label={question.text} key={`question_${ind}`} icon={question.icon} value={factors[question.key]} onChange={(e,{value})=>{if(/(^\d+$)|(^$)/.test(value))updateFactor(question.key, value)}} />
              })}
            </Form.Group>
          </Accordion.Content>
        </Accordion>
        <Button onClick={this.simulate} size="massive" style={{margin: '75px auto 0px auto',display:'block', backgroundColor: 'red', color: 'white'}}>Simulate</Button>
      </Form>
    )
  }
}

export default FactorAdjuster