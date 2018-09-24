import React from 'react'
import {connect} from 'react-redux'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const todo = this.props.todoList
    return (<div>
      <p>This value is from CounterApp: {this.props.counter}</p>
      <fieldset>
        <legend>TodoList</legend>
        <table>
          <tbody>
            {
              todo.map((item, index) => {
                return (<tr key={index}>
                  <td>{item.title}</td>
                  <td><input type="checkbox" checked={item.isFinish}/></td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </fieldset>
    </div>)
  }
}

const mapStateToProps = state => {
  return {todoList: state.todoApp.todoList, counter: state.counterApp.counter}
}

export default connect(mapStateToProps)(TodoList)
