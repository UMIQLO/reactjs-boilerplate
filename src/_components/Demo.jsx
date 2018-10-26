import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clickCount } from '../_actions/demo.action'

class Demo extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { clickCount, addClickCount } = this.props
    return (<div>
      <p>Click Count: {clickCount}</p>
      <p>
        <button onClick={addClickCount}>Click Me!</button>
      </p>
    </div>)
  }
}

const mapStateToProps = state => {
  return { clickCount: state.demo.clickCount }
}

const mapDispatchToProps = dispatch => {
  return {
    addClickCount: () => {
      dispatch(clickCount())
    }
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Demo)
export {
  connected as Demo
}
