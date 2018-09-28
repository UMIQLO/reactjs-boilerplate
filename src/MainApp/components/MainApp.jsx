import React from 'react'
import Navbar from './Navbar'
import CounterContainer from '../../Counter/containers/CounterContainer'
import TodoApp from '../../TodoApp/components/TodoApp'
import LoginForm from '../components/LoginForm'
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import {Container, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class MainApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Router>
            <div>
                <Navbar isLogin={(
                        this.props.username === ''
                        ? false
                        : this.props.username)}/>
                <Container>
                    <Switch>
                        <Route exact={true} path='/' component={home}/>
                        <Route path='/todo' component={TodoApp}/>
                        <Route path='/counter' component={CounterContainer}/>
                        <Route path='/login' component={LoginForm}/>
                    </Switch>
                </Container>
            </div>
        </Router>)
    }
}

const home = () => (<Header size='medium'>
    Semantic UI React App
</Header>)
export default MainApp
