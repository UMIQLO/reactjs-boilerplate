import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'

import CounterContainer from './Counter/containers/CounterContainer'
import TodoApp from './TodoApp/components/TodoApp'

class App extends React.Component {
  render() {
    return (<Router>
      <div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/todo'}>TodoApp</NavLink>
          </li>
          <li>
            <NavLink to={'/counter'}>Counter</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact={true} path='/' component={home}/>
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
