import React from 'react'
import TodoInputContainer from '../containers/TodoInputContainer'
import TodoListContainer from '../containers/TodoListContainer'
import TodoSortContainer from '../containers/TodoSortContainer'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <TodoSortContainer/>
            <TodoListContainer/>
            <TodoInputContainer/>
        </div>)
    }
}

export default TodoApp
