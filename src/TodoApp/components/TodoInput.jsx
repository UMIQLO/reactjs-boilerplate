import React from 'react'
export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: ''
    }
    this.btnAddClick = this.btnAddClick.bind(this)
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this)
  }

  btnAddClick() {
    this.props.onAddTodo(this.state.todoInput)
    this.setState({todoInput: ''})
  }

  handleTodoInputChange(event) {
    this.setState({todoInput: event.target.value})
  }

  render() {
    return (<form onSubmit={(event) => (event.preventDefault())}>
      <input type="text" name="todoInput" value={this.state.todoInput} onChange={this.handleTodoInputChange}/>
      <input type="submit" onClick={this.btnAddClick} value="Add"/>
    </form>)
  }
}
