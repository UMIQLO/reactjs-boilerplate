import React from 'react'
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const TodoList = ({counter, todoList, onChangeStatus, onDelete, markAllAsDone}) => {
  return (<div>
    <p>This value is from CounterApp: {counter}</p>
    <fieldset>
      <legend>TodoList (Total: {todoList.length})
        <button onClick={markAllAsDone}>Mark All As Done</button>
      </legend>
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
                <td><FontAwesomeIcon icon={faTimes} onClick={() => onDelete(index)}/></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </fieldset>
  </div>)
}

export default TodoList
