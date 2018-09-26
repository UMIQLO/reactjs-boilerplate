import React from 'react'
import {connect} from 'react-redux'

const TodoList = ({counter, todoList, onChangeStatus}) => {
  return (<div>
    <p>This value is from CounterApp: {counter}</p>
    <fieldset>
      <legend>TodoList (Total: {todoList.length})</legend>
      <table>
        <tbody>
          {
            todoList.map((item, index) => {
              return (<tr key={index} style={(
                  item.isFinish)
                  ? {
                    color: 'green',
                    textDecoration: 'line-through'
                  }
                  : {
                    color: 'red'
                  }}>
                <td>{item.title}</td>
                <td><input type="checkbox" checked={item.isFinish} onChange={() => onChangeStatus(index)}/></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </fieldset>
  </div>)
}

export default TodoList
