import React from 'react'
import Navbar from './components/Navbar'
import CounterContainer from '../Counter/containers/CounterContainer'
import TodoApp from '../TodoApp/components/TodoApp'
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import {Container, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class MainApp extends React.Component {
    render() {
        return (<Router>
            <div>
                <Navbar/>
                <Container>
                    <Switch>
                        <Route exact={true} path='/' component={home}/>
                        <Route path='/todo' component={TodoApp}/>
                        <Route path='/counter' component={CounterContainer}/>
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
