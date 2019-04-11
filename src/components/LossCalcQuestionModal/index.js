import React, { Component } from 'react'
import {
  Button,
  Container,
  Form,
  Modal
} from 'semantic-ui-react'
import Checklist from '../Checklist'
import PercentageMeter from '../PercentageMeter'
import './LossCalcQuestionModal.css'

const antispam = 'J6psq7ErWuVZ_aU7LyOwEa3YOOKzStCJ';

const securityFactors = [
  {
    label: "Regular Automated Data Backups",
    key: 'auto_backups'
  },
  {
    label: "Automated Software Patching",
    key: "automated_sftwr_ptchng"
  },
  {
    label: "Incident Response Team and Plan",
    key: "inc_resp_capable"
  },
  {
    label: "Security Awareness Training & Phishing Campaign Testing (within last 3 months)",
    key: "sec_training"
  },
  {
    label: "Network Intrusion Detection System (NIDS)",
    key: "nids"
  }
]

class LossCalcQuestionModal extends Component {
  state = {
    done: false,
    questionIndex: 0,
    validInput: false
  }

  factors = {}

  questions = [
    {
      header: '',
      q: 'How many employees are in your organization?',
      validate: (value)=>{
        return /(^\d+$)|(^$)/.test(value)
      },
      factor: 'employee_count',
      inputType: 'number',
      icon: 'users',
      percent: 12,
      pattern: "[0-9]*",
      showInput: true
    },
    {
      q: 'How many computers are in your organization?',
      validate: (value)=>{
        return /(^\d+$)|(^$)/.test(value)
      },
      factor: 'endpoint_count',
      inputType: 'number',
      icon: 'computer',
      percent: 23,
      showInput: true
    },
    {
      q: 'What is your annual company revenue?',
      description: '',
      validate: (value)=>{
        return /(^\d+$)|(^$)/.test(value)
      },
      factor:'annual_revenue',
      compute: function(val, factors, update){
        factors['annual_revenue'] = val
        update('avg_employee_rev_gen', Math.trunc(.6*(val/factors.employee_count/52/40)))
      },
      inputType: 'number',
      icon: 'dollar',
      percent: 34,
      showInput: true
    },
    {
      q: 'What is the median salary at your company?',
      description: 'Consider their total compensation (payroll taxes, benefits, etc.).',
      validate: (value)=>{
        return /(^\d+$)|(^$)/.test(value)
      },
      factor: 'median_salary',
      compute: function(val, factors, update){
        factors['median_salary'] = val
        update('avg_employee_hrly', Math.trunc(val/52/40))
      },
      inputType: 'number',
      icon: 'dollar',
      percent: 45,
      showInput: true
    },
    {
      q: 'Do you outsource your IT services?',
      factor: 'it_outsourced',
      options: [{
        label: 'Yes',
        value: true
      },
      {
        label: 'No',
        value: false
      }],
      compute: function(val, factors, update){
        const computedVal = val ? 150 : Math.trunc(95000/52/40)
        factors['it_hrly_rate'] = computedVal
        factors['it_outsourced'] = val
        update('it_hrly_rate', computedVal)
        if(val){
          factors['sec_hrly_rate'] = 210
          factors['it_sec_outsourced'] = true
          update('sec_hrly_rate', 210)
          return true
        }
        return false
      },
      percent: 55,
      showInput: false
    },
    {
      q: 'Does your IT staff have security training and expertise?',
      factor: 'it_sec_outsourced',
      options: [{
        label: 'Yes',
        value: false
      },
      {
        label: 'No',
        value: true
      }],
      compute: function(val, factors, update){
        const computedVal = val ? 210 : factors.it_hrly_rate
        factors['sec_hrly_rate'] = computedVal
        factors['it_sec_outsourced'] = val
        update('sec_hrly_rate', computedVal)
      },
      percent: 65,
      showInput: false
    },
    {
      q: 'Select all that apply to your organization:',
      customComponent: ()=>{
        return <div>
          <Checklist questions={securityFactors} factors={this.factors} isMobile={this.props.isMobile} />
          {/*<p>Please select each of the following which apply to your organization:</p>
          <DowntimeForm updateParent={this.setState.bind(this)} factors={this.factors}/>*/}
        </div>
      },
      preCompute: () => {
        setTimeout(()=>{
          this.setState({
            validInput: true
          })
        },500)
      },
      compute: function(val, factors, update){
        const orgFactors = ['auto_backups', 'sec_training', 'nids', 'automated_sftwr_ptchng', 'inc_resp_capable']
        const factorWeights = {
          auto_backups: {
            downtime: 16,
            percentage: 0
          },
          sec_training: {
            downtime: 8,
            percentage: 5
          },
          automated_sftwr_ptchng: {
            downtime: 16,
            percentage: 15
          },
          nids: {
            downtime: 16,
            percentage: 10
          },
          inc_resp_capable: {
            downtime: 16,
            percentage: 15
          }
        }

        let downtime = 16
        let affected_percentage = 15
        orgFactors.forEach((fctr)=>{
          if(!factors[fctr]){
            downtime += factorWeights[fctr].downtime
            affected_percentage += factorWeights[fctr].percentage
          }
        })

        factors.downtime = downtime
        update('downtime', downtime)

        factors.affected_percentage = affected_percentage/100
        update('affected_percentage', affected_percentage/100)
      },
      percent: 75,
      showInput: false
    },
    {
      q: '',
      customComponent: () => {
        //returning component this way will properly bind state
        return <div style={{marginBottom: -50, marginTop: -60}}>
          <PercentageMeter val={this.state.value} headerText='Simulating Percentage of Computers Infected...' isMobile={this.props.isMobile}/>
        </div>
        /*<AffectedPercentageForm updateParent={this.setState.bind(this)} factors={this.factors}/>*/
      },
      preCompute: (factors) => {
        this.setState({value: 0})
        setTimeout(() => {
          this.setState({value: factors.affected_percentage*100})
        }, 300)
        setTimeout(()=>{
          this.setState({validInput: true})
        }, 3400)
      },
      compute: function(val, factors, update){
        //this is set in the previous question
        // factors['affected_percentage'] = val/100
        // update('affected_percentage', val/100)
      },
      percent: 85,
      showInput: false
    },
    {
      q: 'Where would you like us to email your report?',
      factor: 'email',
      placeholder: 'email address',
      inputType: 'email',
      top: '3%',
      percent: 90,
      pattern:"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/",
      allowInput: true,
      validate: (value)=>{
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
      },
      showInput: true
    },
    {
      q: 'What is your name?',
      factor: 'name',
      top: '3%',
      percent: 95,
      validate: (value)=>{
        return true
      },
      showInput: true
    },
    {
      q: 'What is your phone number? Next you will see your report',
      factor: 'phone_number',
      inputType: 'tel',
      validate: (value)=>{
        return /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$|(^$)/.test(value)
      },
      percent: 100,
      showInput: true
    },
    {
      customComponent: ()=>{
        return <p style={{marginTop: 100, marginBottom: 150, transition: 'opacity .5s ease-in-out', fontWeight: 'bold', fontSize: '2em', opacity: this.state.showLoadingText ? 1 : 0, minHeight: 20}}>{this.state.loadingText}</p>
      },
      preCompute: ()=>{
        //use this to skip to expense table
        // setTimeout(this.next, 500)

        const timeline = [
          {
            loadingText: 'Estimating employee time lost...',
            time: 100
          },
          {
            fadeOut: true,
            time: 1300
          },
          {
            loadingText: 'Estimating lost revenue...',
            time: 1900
          },
          {
            fadeOut: true,
            time: 3200
          },
          {
            loadingText: 'Estimating IT response costs...',
            time: 3700
          },
          {
            fadeOut: true,
            time: 4700
          },
          {
            loadingText: 'Estimating ransom payment...',
            time: 5200
          },
          {
            fadeOut: true,
            time: 6200
          },
          {
            loadingText: 'Generating report...',
            time: 6700
          }
        ]

        for(let i = 0; i<timeline.length; i++){
          let {fadeOut, loadingText, time} = timeline[i]
          setTimeout(()=>{
            if(fadeOut){
              this.setState({
                showLoadingText: false
              })
            }else{
              this.setState({
                loadingText,
                showLoadingText: true
              })
            }
          },time)
        }
        setTimeout(this.next, 8500)
      },
      percent: 100
    }
  ]

  submit(){
    return
    fetch('https://viam.dev.with-datafire.io/loss-calc',{
      method:'post',
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        antispam,
        factors: this.factors
      })
    })
  }

  next = () => {
    const {questionIndex, value} = this.state
    const {setRange, updateFactor} = this.props
    const {factors, questions} = this
    const question = questions[questionIndex]
    let skip = false

    if(question.compute){
      skip =question.compute(value, factors, updateFactor)
    }else if(typeof value === 'object'){
      setRange(question.factor, question.options[value])
    }else if(question.factor){
      factors[question.factor] = value
      updateFactor(question.factor, value)
    }

    const nextIndex = skip ? questionIndex+2 : questionIndex+1
    if(nextIndex === questions.length - 1){
      this.submit()
    }

    if(nextIndex === questions.length){
      this.setState({
        done: true
      })
      updateFactor('factors',factors)
      updateFactor('done', true)
    }else{
      this.setState({
        value: factors[questions[nextIndex].factor] || '',
        validInput: !!factors[questions[nextIndex].factor],
        questionIndex: nextIndex
      })
      questions[nextIndex].preCompute && questions[nextIndex].preCompute(factors, updateFactor)
    }
  }

  back = () => {
    const {factors, questions} = this
    const {questionIndex} = this.state

    //save current value
    factors[questions[questionIndex].factor] = this.state.value

    let prevIndex = questionIndex-1
    if(questions[prevIndex].factor === 'it_sec_outsourced' && factors.it_outsourced)
      prevIndex = questionIndex - 2
    const prevValue = factors[questions[prevIndex].factor]
    this.setState({
      questionIndex: prevIndex,
      value: prevValue,
      validInput: !questions[prevIndex].factor || prevValue !== undefined
    })
    if(questions[prevIndex].preCompute)
      questions[prevIndex].preCompute(factors)
  }

  render () {
    const {done, questionIndex, validInput} = this.state
    const {isMobile} = this.props
    const {questions} = this
    const q = questions[questionIndex] || {}

    return (
      <Modal className={`modal ${isMobile?'mobile':''}`} open={!done} size={isMobile ? 'tiny' : 'large'} centered={isMobile} style={{top: q.top || '8%'}}>
        <Modal.Header id="loss-calc-header" className={`modal-header ${isMobile?'mobile':''}`}>
          {questionIndex === 0 ? 
            <p className="modal-initial-heading">Loss Expectancy Calculator</p>
          : 
          <div className="modal-progress-container">
            <p>Your Progress</p>
            <div className={`ui progress ${isMobile?'mobile':''}`} data-percent={q.percent}>
              <div className='bar modal-progress-bar-completed' style={{width: `${q.percent}%`}}></div>
            </div>
          </div>
        }</Modal.Header>

        <Modal.Content className={`modal-content ${isMobile?'mobile':''} ${q.showInput || q.options ?'':'no-input'}`} >
          <Container>
            <b className={`modal-question ${isMobile?'mobile':''}`}>{q.q}</b>
            <div className={`modal-input-container ${isMobile? 'mobile' : ''}`}>
              {q.showInput && 
                <Form.Input
                  autoFocus
                  id="loss-calc-input"
                  icon={q.icon}
                  placeholder={q.placeholder}
                  value={this.state.value||''}
                  onKeyPress={(e)=>{
                    if(e.key==='Enter' && validInput)
                      this.next()
                  }}
                  type={q.inputType || 'text'}
                  pattern={q.pattern || ''}
                  onChange={(e,{value})=>{
                    this.setState({value, validInput: value.length > 0 && q.validate(value)})
                  }}
                />}
              {q.options && <div>
                  {q.options.map((option, ind)=>{
                    return <Form.Radio 
                      checked={this.state.value === option.value}
                      key={ind}
                      label={option.label}
                      onChange={(e,{val})=>{this.setState({value: val, validInput: true})}}
                      val={option.value}
                    />
                  })}
                </div>
              }
              {q.customComponent && q.customComponent()}
            </div>
            <div className={`progress-button-container ${isMobile?'mobile':''}`} style={{display: questionIndex === questions.length-1 ? 'none' : ''}}>
              {questionIndex !== 0 ? <Button className={`back-button ${isMobile ? 'mobile' : ''}`} onClick={this.back}>Back</Button> : <div className="back-button-spacer" />}
              <Button className={`next-button ${isMobile?'mobile':''}`} disabled={!validInput} onClick={this.next}>{questionIndex === questions.length-2 ? 'Get Report' : 'Continue'}</Button>
            </div>
          </Container>
        </Modal.Content>
      </Modal>
    )
  }
}

export default LossCalcQuestionModal