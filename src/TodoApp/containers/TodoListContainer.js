import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodoStatus, deleteTodo} from '../actions'

const mapStateToProps = state => {
  return {todoList: state.todoApp, counter: state.counterApp.counter}
}
const mapDispatchToProps = dispatch => {
  return {
    onChangeStatus: (id) => {
      dispatch(toggleTodoStatus(id))
    },
    onDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer
