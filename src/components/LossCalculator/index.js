import React, { Component } from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'
import './lossCalculator.css'
import LossCalcQuestionModal from '../LossCalcQuestionModal'
import ExpenseTable from '../ExpenseTable'

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

class LossCalculator extends Component {
  state = {
    estimates: {},
    factors: {
      //user provided
      employee_count: 100,
      endpoint_count: 100,
      server_count: 5,
      annual_revenue: 40000000,
      median_salary: 80000,
      it_outsourced: true,
      it_sec_outsourced: true,
      sys_conf_mgmt: false,
      automated_sftwr_ptchng: false,
      sec_training: false,
      phish_testing: false,
      inc_resp_capable: false,
      cntrl_logging: false,
      nids: false,
      siem: false,
      net_segm: false,
      auto_backups: false,
      key_system_backups: false,

      //about org inferred
      avg_employee_rev_gen: 90,
      avg_employee_hrly: 40,
      it_hrly_rate: 65,
      sec_hrly_rate: 210,
      backup_freq: 7,
      
      //attack model
      affected_percentage: .45,
      it_staff_count: 2,
      downtime: 64,
      rnsm_amt: 600,
      sec_resolve_time: 32,

      //indirect costs
      acct_loss: 0,
      data_loss: 0,
      rep_damage: 0,
    },
    sum: 0
  }

  componentDidMount(){
    const {estimates} = this.calculateEstimates(this.state.factors)
    if(this.props.isMobile)
      document.querySelector('.ui.dimmer').classList.add('mobile')
    this.setState({
      estimates
    })
  }

  animateResults = () => {
    //uncomment this to skip animations
    // this.setState({
    //   showScenario: true,
    //   showTable: true,
    //   visibleIndex: 9
    // })

    // return

    this.setState({
      showScenario: true
    })

    setTimeout(()=>{
      this.setState({
        showCount: true,
        visibleIndex: 9
      })
    },600)

    setTimeout(()=>{
      this.setState({showDowntime: true})
    },2400)


    setTimeout(()=>{
      this.setState({showTotal: true})
    },4200)

    // setTimeout(this.animateTable,6000)
    setTimeout(()=>{
      this.setState({
        showTable: true
      })
      document.querySelector('#scenario_details').scrollIntoView({ behavior: 'smooth' })
    },6000)
    
  }

  animateTable = () => {
    const {estimates} = this.state
    this.setState({
      showTable: true,
      visibleIndex: 0,
      sum: estimates[expenseTypes[0].id]
    })

    let i = 1;
    const intvl = setInterval(()=>{
      if(i < expenseTypes.length){
        this.setState({
          visibleIndex: i,
          sum: this.state.sum + estimates[expenseTypes[i].id]
        })
      }else{
        clearInterval(intvl)
      }
      i++
    },2400)
  }

  calculateEstimates = (factors)=>{
    const newEstimates = {}
    let newSum = 0
    expenseTypes.forEach((expense)=>{
      newEstimates[expense.id] = expense.compute(factors)
      newSum += newEstimates[expense.id]
    })

    return {
      estimates: newEstimates,
      sum: newSum
    }
  }

  setRange = (factor, range) => {
    const newRangeEstimates = {...this.state.range_estimates}
    newRangeEstimates[factor] = range
    this.setState({
      range_estimates: newRangeEstimates
    })
  }

  updateFactors = (name, val)=>{
    if(name === 'factors'){
      this.setState({
        factors: Object.assign({},this.state.factors,val)
      })
    }else if(name === 'done' && val === true){
      this.setState({done: true})
      this.animateResults()
    }else{
      const newFactors = {...this.state.factors}
      newFactors[name] = val
      if(val !== ''){
        const {estimates, sum} = this.calculateEstimates(newFactors)
        this.setState({
          factors: newFactors,
          estimates,
          sum
        })
      }else{
        this.setState({
          factors: newFactors
        })
      }
    }
  }

  render () {
    const { done } = this.state
    const { isMobile } = this.props
    return (
      <div className={`${done ? "loss-calc-done" : "loss-calc"} ${isMobile?'mobile':''}`}>
        <Header as='h2' className={`section-header ${isMobile?'mobile':''}`} >What Would A Ransomware Attack Cost Your Organization?</Header>
        <Container>
          <LossCalcQuestionModal
            isMobile={isMobile}
            setRange={this.setRange.bind(this)}
            updateFactor={this.updateFactors.bind(this)}
          />

          {/*<Header as='h3' style={{fontSize: '2em', textAlign: 'left'}}>Loss Expectancy Calculator</Header>*/}

          {/*<FactorAdjuster factors={factors} done={done} updateFactor={this.updateFactors.bind(this)} showTable={this.animateResults} />*/}
          
          <ExpenseTable isMobile={isMobile} expenseTypes={expenseTypes} {...this.state} />
        </Container>
      </div>
    )
  }
}


export default LossCalculator