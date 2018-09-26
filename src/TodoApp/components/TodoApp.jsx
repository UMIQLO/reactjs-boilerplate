import React from 'react'

import TodoInputContainer from '../containers/TodoInputContainer'
import TodoList from './TodoList'
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <TodoList/>
      <TodoInputContainer/>
    </div>)
  }
}

export default TodoApp
