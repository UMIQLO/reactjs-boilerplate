import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter/components/Counter'
import TodoApp from './TodoApp/TodoApp'

class App extends React.Component {
  render() {
    return (<div>
      <TodoApp/>
      <hr/>
      <Counter/>
    </div>)
  }
}

export default App;
