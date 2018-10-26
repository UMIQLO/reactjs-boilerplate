import React, { Component } from 'react'
import { CustomerList } from './CustomerList'
import { Container, Alert, Collapse } from 'reactstrap'

export default class ForecastQTYForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: true
    }
    this.onToggle = this.onToggle.bind(this)
  }

  onToggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (<Container fluid={true}>
      <Alert color="primary" onClick={this.onToggle}>Please Select Customer</Alert>
      <Collapse isOpen={this.state.isOpen}>
        <CustomerList/>
      </Collapse>
    </Container>)
  }
}
