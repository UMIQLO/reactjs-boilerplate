import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodoStatus} from '../actions'

const mapStateToProps = state => {
  return {todoList: state.todoApp, counter: state.counterApp.counter}
}
const mapDispatchToProps = dispatch => {
  return {
    onChangeStatus: (id) => {
      dispatch(toggleTodoStatus(id))
    }
  }
}
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer
