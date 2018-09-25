import React from 'react'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <TodoList/>
      <TodoInput test='fuck'/>
    </div>)
  }
}

export default TodoApp
