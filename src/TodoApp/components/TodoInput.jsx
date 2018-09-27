import React from 'react'
import ReactDOM from 'react-dom'
import {Input, Button, Grid, Menu, Dropdown} from 'semantic-ui-react'

class TodoInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoInput: ''
        }
        this.onAddTodo = this.onAddTodo.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onAddTodo() {
        this.props.onAddTodo(this.state.todoInput)
        this.setState({todoInput: ''})
    }

    handleChange(event) {
        this.setState({todoInput: event.target.value})
    }

    render() {
        return (<div>
            <Menu fluid={true} vertical={true}>
                <Menu.Item>
                    <Input onChange={this.handleChange} value={this.state.todoInput} label={<Button color='teal' onClick={this.onAddTodo}>Add</Button>} labelPosition='right'/>
                </Menu.Item>
            </Menu>
        </div>)
    }
}

export default TodoInput

/** ref={value => todoInput = value} **/
/** ref={(value) => {todoInput = value}} **/
