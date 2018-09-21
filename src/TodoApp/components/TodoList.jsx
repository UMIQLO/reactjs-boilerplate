import React from 'react'
const colorStyle = {
  isFinish: {
    color: "green",
    textDecoration: "line-through"
  },
  notFinish: {
    color: "red"
  }
}
class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.toggleChange = this.toggleChange.bind(this)
  }

  toggleChange(event) {
    this.props.onChangeTodoStatus(event.target.id)
  }

  render() {
    const todoList = this.props.todoList
    return (<table>
      <tbody>
        {
          todoList.map((item, index) => (<tr key={index} style={(
              item.isFinish)
              ? colorStyle.isFinish
              : colorStyle.notFinish}>
            <td>{item.todo}</td>
            <td>
              <input type="checkbox" checked={item.isFinish} id={index} onChange={this.toggleChange}/>
            </td>
          </tr>))
        }
      </tbody>
    </table>)
  }
}
export default TodoList
