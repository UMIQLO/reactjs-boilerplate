import React, {Component} from 'react'
import {ComTargetForm} from './_components/ComTargetForm'
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
    render() {
        return (<Container><ComTargetForm/></Container>)
    }
}
