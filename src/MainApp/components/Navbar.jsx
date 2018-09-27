import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import {Menu, Segment} from 'semantic-ui-react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'home'
        }
        this.onMenuItemClick = this.onMenuItemClick.bind(this)
    }
    onMenuItemClick(event, {name, test}) {
        this.setState({activeItem: name})
    }
    render() {
        const {activeItem} = this.state
        return (<Menu stackable={true} inverted={true} pointing={true}>
            <Menu.Item as={NavLink} exact={true} to='/' name='Home' active={activeItem === 'Home'} onClick={this.onMenuItemClick}/>
            <Menu.Item as={NavLink} to='/todo' name='TodoApp' active={activeItem === 'TodoApp'} onClick={this.onMenuItemClick}/>
            <Menu.Item as={NavLink} to='/counter' name='Counter' active={activeItem === 'Counter'} onClick={this.onMenuItemClick}/>
            <Menu.Item as={NavLink} to='/login' name='Login' active={activeItem === 'Login'} position='right'/>
        </Menu>)
    }
}

export default Navbar
