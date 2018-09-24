import React, {Component} from 'react'
import {connect} from 'react-redux'
class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.props.dispatch({type: 'INCREASE'})
  }

  decrease() {
    this.props.dispatch({type: 'DECREASE'})
  }

  render() {
    return (<div>
      <p>Counter</p>
      <p>
        <input type="button" value="-1" onClick={this.decrease}/>
        <span>{this.props.counter}</span>
        <input type="button" value="+1" onClick={this.increase}/>
      </p>
    </div>)
  }
}

const mapStateToProps = state => {
  return {counter: state.counterApp.counter}
}

export default connect(mapStateToProps)(Counter)
