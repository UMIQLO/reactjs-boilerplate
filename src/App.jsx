import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './Counter/containers/CounterContainer'
import TodoApp from './TodoApp/components/TodoApp'

class App extends React.Component {
  render() {
    return (<div>
      <TodoApp/>
      <hr/>
      <CounterContainer/>
    </div>)
  }
}

export default App;
