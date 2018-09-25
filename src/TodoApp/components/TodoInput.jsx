import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class TodoInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            todoInput: ''
        }
    }

    handleAdd() {
        this.props.onAddTodo(this.state.todoInput)
        this.setState({todoInput: ''})
    }

    handleInputChange(event) {
        this.setState({todoInput: event.target.value})
    }

    render() {
        return (<div>
            <p><input type="text" onChange={this.handleInputChange} value={this.state.todoInput}/>
                <input type="button" value="Add" onClick={this.handleAdd}/></p>
        </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (todoInput) => {
            dispatch(addTodo(todoInput))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoInput)
