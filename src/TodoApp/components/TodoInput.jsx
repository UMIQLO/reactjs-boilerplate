import React from 'react'
import ReactDOM from 'react-dom'

const TodoInput = ({onAddTodo}) => {
  let todoInput
  return (<div>
    <p><input type="text" ref={value => todoInput = value}/>
      <input type="button" value="Add" onClick={() => {
          (todoInput.value !== '') ? onAddTodo(todoInput.value) : ''
          todoInput.value = ''
        }}/></p>
  </div>)
}

export default TodoInput

/** ref={value => todoInput = value} **/
/** ref={(value) => {todoInput = value}} **/
