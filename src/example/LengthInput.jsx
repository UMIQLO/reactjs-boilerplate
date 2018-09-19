import React from 'react'
import ReactDOM from 'react-dom'

class LengthInput extends React.Component {
  constructor() {
    super()
    this.state = {
      length: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({length: e.target.value})
  }

  render() {
    const length = this.state.length
    const scale = this.props.scale
    return (<div>
      <fieldset>
        <legend>{scale}</legend>
        <input type="text" name="length" value={length} onChange={this.handleChange}/>
      </fieldset>
    </div>)
  }
}

export default LengthInput
