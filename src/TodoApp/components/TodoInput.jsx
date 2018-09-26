import React from 'react'
import ReactDOM from 'react-dom'

const TodoInput = ({onAddTodo}) => {
  let todoInput
  return (<div>
    <p><input type="text" ref={node => todoInput = node}/>
      <input type="button" value="Add" onClick={() => {
          onAddTodo(todoInput.value)
          todoInput.value = ''
        }}/></p>
  </div>)
}

export default TodoInput
