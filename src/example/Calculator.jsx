import React from 'react'
import ReactDOM from 'react-dom'
import LengthInput from './LengthInput'

class Calculator extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<div>
      <LengthInput scale="CM"></LengthInput>
      <LengthInput scale="M"></LengthInput>
    </div>)
  }
}
export default Calculator
