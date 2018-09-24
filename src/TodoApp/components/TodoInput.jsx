import React from 'react'
import {connect} from 'react-redux'
class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      tmpTodoInput: ''
    }
  }

  handleAdd() {
    this.props.dispatch({type: 'ADD_ITEM', tmpTodoInput: this.state.tmpTodoInput})
    this.setState({tmpTodoInput: ''})
  }

  handleInputChange(event) {
    this.setState({tmpTodoInput: event.target.value})
  }

  render() {
    return (<div>
      <p><input type="text" name='todoInput' value={this.state.tmpTodoInput} onChange={this.handleInputChange}/>
        <input type="button" value="Add" onClick={this.handleAdd}/></p>
    </div>)
  }
}

export default connect()(TodoInput)
