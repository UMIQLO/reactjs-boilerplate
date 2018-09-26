import {connect} from 'react-redux'
import TodoInput from '../components/TodoInput'
import {addTodo} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todoInput) => {
      dispatch(addTodo(todoInput))
    }
  }
}
const TodoInputContainer = connect(null, mapDispatchToProps)(TodoInput)
export default TodoInputContainer
