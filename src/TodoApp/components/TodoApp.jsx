import React from 'react'

import TodoInputContainer from '../containers/TodoInputContainer'
import TodoListContainer from '../containers/TodoListContainer'
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <TodoListContainer/>
      <TodoInputContainer/>
    </div>)
  }
}

export default TodoApp
