import React, { Component } from 'react'
import {
  Form,
  Grid
} from 'semantic-ui-react'

const downtimeFactors = [
  {
    key: 'auto_backups',
    label: "Regular Automated Data Backups"
  },
  {
    key: "key_system_backups",
    label: "Complete System Backups on Key Systems"
  },
  {
    key: "inc_resp_capable",
    label: "Incident Response Team and Plan"
  },
]

class DowntimeForm extends Component {
  state = {
    value: 0,
    labelText: '0+ Days',
    checkedFactors: {
      'auto_backups': this.props.factors.auto_backups,
      'key_system_backups': this.props.factors.key_system_backups,
      'inc_resp_capable': this.props.factors.inc_resp_capable
    }
  }

  componentDidMount(){
    const {updateParent, factors} = this.props
    downtimeFactors.forEach((factor)=>{
      factors[factor.key] = factors[factor.key] || false
    })
    setTimeout(()=>{
      const value = this.compute(this.state.checkedFactors)
      this.setText(value)
      this.setState({value})
      updateParent({value})
    }, 300)
  }

  compute = (factors)=>{
    const {auto_backups,key_system_backups,inc_resp_capable} = factors
    let sum = 0
    sum += auto_backups ? 1 : 3
    sum += key_system_backups ? 1 : 3
    sum += inc_resp_capable ? 1 : 4
    return sum
  }

  itemChecked = (checked, factor) => {
    const {updateParent, factors} = this.props
    const {checkedFactors} = this.state
    const newFactors = Object.assign({},checkedFactors,{[factor.key]: checked})
    let value = this.compute(newFactors)
    this.setState({
      value,
      checkedFactors: newFactors
    })
    this.setText(value)
    updateParent({value})
    //factors stored on parent
    factors[factor.key] = checked
    checkedFactors[factor.key] = checked
  }

  setText(nextVal){
    const startVal = this.state.value
    let stepVal = +startVal
    let stepSize = (nextVal-startVal)/10
    
    const intvl = setInterval(()=>{
      this.setState({labelText: `${Math.trunc(stepVal)}+ Days`})
      stepVal += stepSize
      if(stepSize > 0 && stepVal >= nextVal){
        clearInterval(intvl)
        this.setState({labelText: `${Math.trunc(nextVal)}+ Days`})
      }else if(stepSize <= 0 && stepVal <= nextVal){
        clearInterval(intvl)
        this.setState({labelText: `${Math.trunc(nextVal)}+ Days`})
      }
      //failsafe
      setTimeout(()=>{
        clearInterval(intvl)
        this.setState({labelText: `${Math.trunc(nextVal)}+ Days`})
      },600)
    },45)
  }

  render () {
    const {labelText} = this.state
    const {factors} = this.props
    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <Form.Group>
            {downtimeFactors.map((fctr, ind)=>{
              return <Form.Checkbox key={`sprd_fctr_${ind}`} label={fctr.label} defaultChecked={factors[fctr.key] || false} onChange={(e,{checked})=>{
                this.itemChecked(checked, fctr)
              }} style={{marginTop: 10}} />
            })}
          </Form.Group>
          <i style={{position: 'absolute', bottom: 2, fontSize: '.85em', width: '95%'}}>The estimated effect of these items are based on assumptions about your environment. Please reach out to us about conducting a Risk Assessment for a more accurate estimate.</i>
        </Grid.Column>
        <Grid.Column style={{textAlign: 'center', height: 175}}>
          <h4>Business Days To Recover</h4>
          <label style={{fontSize: '3.5em'}}>{labelText}</label>
        </Grid.Column>
      </Grid>
    )
  }
}

export default DowntimeForm