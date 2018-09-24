import React from 'react'
import {connect} from 'react-redux'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
    }

    toggleTodoStatus(e) {
        this.props.dispatch({type: 'TOGGLE_ITEM', id: e.target.getAttribute('data-id')})
    }

    render() {

        return (<div>
            <p>This value is from CounterApp: {this.props.counter}</p>
            <fieldset>
                <legend>TodoList</legend>
                <table>
                    <tbody>
                    {
                        this.props.todoList.map((item, index) => {
                            return (<tr key={index}>
                                <td>{item.title}</td>
                                <td><input type="checkbox" checked={item.isFinish} onChange={this.toggleTodoStatus}
                                           data-id={index}/></td>
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
    return {todoList: state.todoApp, counter: state.counterApp.counter}
}

export default connect(mapStateToProps)(TodoList)
