import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp/TodoApp'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <TodoApp/>
    </div>)
  }
}
export default App
