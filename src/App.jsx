import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import CounterContainer from './Counter/containers/CounterContainer'
import TodoApp from './TodoApp/components/TodoApp'

class App extends React.Component {
  render() {
    return (<Router>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={'/todo'}>TodoApp</Link>
          </li>
          <li>
            <Link to={'/counter'}>Counter</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/todo' component={TodoApp}/>
          <Route path='/counter' component={CounterContainer}/>
        </Switch>
      </div>
    </Router>)
  }
}

const home = () => (<div>
  <h5>Welcome to React.js</h5>
</div>)

export default App;
