import React, {Component} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {
          todo: 'Item 1',
          isFinish: false
        }, {
          todo: 'Item 2',
          isFinish: true
        }, {
          todo: 'Item 3',
          isFinish: false
        }
      ]
    }
    this.onAddTodo = this.onAddTodo.bind(this)
    this.onChangeTodoStatus = this.onChangeTodoStatus.bind(this)
  }

  onAddTodo(todo) {
    if (todo !== '') {
      this.setState({
        todoList: [
          ...this.state.todoList, {
            todo: todo,
            isFinish: false
          }
        ]
      })
    }
  }

  onChangeTodoStatus(index) {
    const todoList = this.state.todoList
    todoList[index].isFinish = !todoList[index].isFinish
    this.setState({todoList: todoList})
  }

  render() {
    return (<div>
      <TodoList todoList={this.state.todoList} onChangeTodoStatus={this.onChangeTodoStatus}></TodoList>
      <TodoInput onAddTodo={this.onAddTodo}/>
    </div>)
  }
}
export default TodoApp
