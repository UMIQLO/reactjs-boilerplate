import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Container, Alert} from 'reactstrap'
import {clickCount} from '../_actions/demo.action'

class Demo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {clickCount, addClickCount} = this.props
        return (<Container>
            <Alert>Click Count: {clickCount}</Alert>
            <Button onClick={addClickCount}>Click Me!</Button>
        </Container>)
    }
}

const mapStateToProps = state => {
    return {clickCount: state.demo.clickCount}
}

const mapDispatchToProps = dispatch => {
    return {
        addClickCount: () => {
            dispatch(clickCount())
        }
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Demo)
export {
    connected as Demo
}
