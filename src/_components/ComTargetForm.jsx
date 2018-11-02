import React, {Component} from 'react'
import {Row, Col, Label} from 'reactstrap'
import Select from 'react-select'
import {connect} from 'react-redux'
import {YearSelect} from './YearSelect'
import {OfficeSelect} from './OfficeSelect'
import {CountrySelect} from './CountrySelect'

class ComTargetForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Row>
            <Col lg='4'>
                <Label>Year</Label>
                <YearSelect/>
            </Col>
            <Col lg='4'>
                <Label>Office</Label>
                <OfficeSelect/>
            </Col>
            <Col lg='4'>
                <Label>Country</Label>
                <CountrySelect/>
            </Col>
        </Row>)
    }
}

const connected = connect()(ComTargetForm)

export {
    connected as ComTargetForm
}
