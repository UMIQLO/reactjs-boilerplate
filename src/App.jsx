import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import TodoInput from './TodoApp/components/TodoInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: ''
    }
  }
  render() {
    return (<div>
      <TodoInput/>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {todoInput: state.todoInput}
}

export default connect(mapStateToProps)(App);
