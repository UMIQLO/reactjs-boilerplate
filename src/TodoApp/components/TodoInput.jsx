import React from 'react'
import {connect} from 'react-redux'
class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    this.props.dispatch({TYPE: 'ADD_ITEM'})
  }

  render() {
    return (<div>
      <p><input type="text" name='todoInput'/>
        <input type="button" value="Add" onClick={this.handleAdd}/></p>
    </div>)
  }
}

export default connect()(TodoInput)
