import {connect} from 'react-redux'
import TodoSort from '../components/TodoSort'
import {changeSorting} from '../actions'

const mapDispatchToProps = dispatch => {
    return {
        onChangeSorting: (id) => {
            dispatch(changeSorting(id))
        }
    }
}

const TodoSortContainer = connect(null, mapDispatchToProps)(TodoSort)
export default TodoSortContainer
