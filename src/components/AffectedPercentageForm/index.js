import React, { Component } from 'react'
import {
  Form,
  Grid
} from 'semantic-ui-react'
import './AffectedPercentageForm.css'

const spreadFactors = [
  {
    label: "System Configuration Management Tools",
    key: "sys_conf_mgmt",
    percentageChange: 8
  },{
    label: "Automated Software Patch Management Tools",
    key: "automated_sftwr_ptchng",
    percentageChange: 8
  },{
    label: "Security Awareness Training (within last 3 months)",
    key: "sec_training",
    percentageChange: 6
  },{
    label: "Phishing Campaign Testing (within last 3 months)",
    key: "phish_testing",
    percentageChange: 6
  },{
    label: "Incident Response Team and Plan",
    key: "inc_resp_capable",
    percentageChange: 10
  },{
    label: "Centralized Logging and Regular Log Auditing",
    key: "cntrl_logging",
    percentageChange: 6
  },{
    label: "Network Intrusion Detection System (NIDS)",
    key: "nids",
    percentageChange: 6
  },{
    label: "Security Information and Event Management (SIEM)",
    key: "siem",
    percentageChange: 6
  },{
    label: "Network Segmentation",
    key: "net_segm",
    percentageChange: 20
  }
]

class AffectedPercentageForm extends Component {
  state = {
    value: 0,
    labelText: '0%'
  }

  componentDidMount(){
    const {factors, updateParent} = this.props

    spreadFactors.forEach((factor)=>{
      factors[factor.key] = factors[factor.key] || false
    })
    const value = 85
    setTimeout(()=>{
      this.setMeter(value)
      this.setState({value})
      updateParent({value})
    }, 300)
  }

  itemChecked = (checked, factor) => {
    const value = checked ? this.state.value - factor.percentageChange : this.state.value + factor.percentageChange
    const {factors, updateParent} = this.props
    this.setState({
      value
    })
    updateParent({
      value
    })
    factors[factor.key] = checked
    this.setMeter(value)
  }

  setText(nextVal){
    const startVal = this.state.value
    let stepVal = +startVal
    let stepSize = (nextVal-startVal)/10
    
    const intvl = setInterval(()=>{
      this.setState({labelText: `${Math.trunc(stepVal)}%`})
      stepVal += stepSize
      if(stepSize > 0 && stepVal >= nextVal){
        clearInterval(intvl)
        this.setState({labelText: `${Math.trunc(nextVal)}%`})
      }else if(stepSize <= 0 && stepVal <= nextVal){
        clearInterval(intvl)
        this.setState({labelText: `${Math.trunc(nextVal)}%`})
      }
      //failsafe
      setTimeout(()=>{
        clearInterval(intvl)
        this.setState({labelText: `${Math.trunc(nextVal)}%`})
      },600)
    },45)
  }

  setMeter = (val) => {
    const r = 150
    const circleArea = (2 * Math.PI * r)
    const semiCircleArea = circleArea / 2
    const meterVal = semiCircleArea - (( val * semiCircleArea) / 100)
    document.getElementById('mask').setAttribute("stroke-dasharray", meterVal + "," + circleArea)
    document.getElementById('needle').style.transform = `rotate(${270+ ((val*180)/100)}deg)`
    this.setText(val)
  }

  sliderChange = (e) => {
    const value = e.target.value
    this.setMeter(value)
    this.setState({
      value
    })
  }

  render () {
    const {labelText, value} = this.state
    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <p>Please select each of the following which apply to your organization:</p>
          <Form.Group>
            {spreadFactors.map((fctr, ind)=>{
              return <Form.Checkbox key={`sprd_fctr_${ind}`} label={fctr.label} onChange={(e,{checked})=>{
                this.itemChecked(checked, fctr)
              }} style={{marginTop: 10}}/>
            })}
          </Form.Group>
          <i style={{position: 'absolute', bottom: 2, fontSize: '.85em', width: '95%'}}>The estimated effect of these items are based on assumptions about your environment. Please reach out to us about conducting a Risk Assessment to get a more accurate estimate.</i>
        </Grid.Column>
        <Grid.Column style={{textAlign: 'center', height: 350}}>
          {/*USE PERCENTAGE METER COMPONENT WHEN REBUILDING THIS*/}
          {/*<div id="wrapper">
            <svg id="meter">        
              <circle id="low" r="150" cx="50%" cy="45%" stroke="yellow" strokeWidth="30" fill="none" strokeDasharray="471, 943"></circle>

              <circle id="med" r="150" cx="50%" cy="45%" stroke="orange" strokeWidth="30" strokeDasharray="314, 943" fill="none"></circle>

              <circle id="high" r="150" cx="50%" cy="45%" stroke="red" strokeWidth="30" strokeDasharray="157, 943" fill="none"></circle>

              <circle id="mask" r="150" cx="50%" cy="45%" stroke="#f6f6f6" strokeWidth="32" strokeDasharray="471, 943" fill="none"></circle>
            </svg>
            <h4 id="meter-header">Percentage of Computers Infected</h4>
            <img id="needle" src="/images/loss-calc/meter-needle.svg" alt="affected percentage meter needle" />
            <input id="slider" type="range" min="0" max="100" value={value} onChange={this.sliderChange} />
            <label id="lbl">{labelText}</label>
          </div>*/}
        </Grid.Column>
      </Grid>
    )
  }
}

export default AffectedPercentageForm