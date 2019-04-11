import React, { Component } from 'react'
import {
  Grid
} from 'semantic-ui-react'
import './PercentageMeter.css'

class PercentageMeter extends Component {
  state = {
    value: 0,
    labelText: '0%'
  }

  componentDidUpdate(prevProps){
    const newVal = this.props.val
    if(prevProps.val !== newVal){
      this.setMeter(newVal)
      this.setState({value: newVal})
    }
  }

  setText(nextVal){
    const startVal = this.state.value
    let stepVal = +startVal
    let stepSize = (nextVal-startVal)/50
    
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
      },3500)
    },60)
  }

  setMeter = (val) => {
    const r = 130
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
    const {headerText, isMobile} = this.props
    return (
      <Grid columns={1}>
        <Grid.Column style={{minHeight: 350}}>
          <div id="wrapper">
            <svg id="meter">        
              <circle id="low" r="130" cx="50%" cy="45%" stroke="yellow" strokeWidth="30" strokeDasharray="408, 817" fill="none"></circle>

              <circle id="med" r="130" cx="50%" cy="45%" stroke="orange" strokeWidth="30" strokeDasharray="325, 817" fill="none"></circle>

              <circle id="high" r="130" cx="50%" cy="45%" stroke="red" strokeWidth="30" strokeDasharray="238, 817" fill="none"></circle>

              <circle id="mask" r="130" cx="50%" cy="45%" stroke="#f6f6f6" strokeWidth="32" strokeDasharray="408, 817" fill="none"></circle>
            </svg>
            <h4 id="meter-header">{headerText}</h4>
            <img id="needle" src="/images/loss-calc/meter-needle.svg" alt="affected percentage meter needle" />
            <input id="slider" type="range" min="0" max="100" value={value} onChange={this.sliderChange} />
            <label id="lbl" className={isMobile?"mobile":""}>{labelText}</label>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default PercentageMeter