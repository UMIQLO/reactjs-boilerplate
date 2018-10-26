import React, { Component } from 'react'
import {
  Row,
  Col,
  Button,
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { fetchCustList, onCustSelect, onListFormSubmit, updateCustQTY } from '../_actions/forecastForm.action'

class CustomerList extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    const { fetchList } = this.props
    fetchList()
  }

  onChange (event) {
    const { onEditQTY } = this.props
    onEditQTY(event.target.name, event.target.value)
  }

  render () {
    const { onItemClick, onSubmit, onEditQTY } = this.props
    const customerList = Array.from(this.props.customerList)
    const selectedList = Array.from(this.props.selectedList)
    return (<div>
      <Row noGutters={true}>
        {
          customerList.map((item, index) => {
            return (<Col xs="1" key={item.customer_id} onClick={onItemClick.bind(this, item.customer_id)}>
              <Alert color={item.isSelected
                ? 'success'
                : 'dark'}>
                {item.cust_prefix}
                <div className='float-right'>
                  {
                    item.isSelected
                      ? <FontAwesomeIcon icon={faCheck}/>
                      : ''
                  }
                </div>
              </Alert>
            </Col>)
          })
        }
      </Row>
      <Row>
        <Col xs='12'><hr/></Col>
      </Row>
      <Row>
        {
          selectedList.map((item, index) => {
            return item.isSelected
              ? (<Col xs="2" key={item.customer_id}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>{item.cust_prefix}</InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={this.onChange} name={item.customer_id}/>
                </InputGroup>
              </Col>)
              : ''
          })
        }
      </Row>
      <Row>
        <Col xs='12'><hr/></Col>
      </Row>
      <Row>
        <Col xs='12'>
          <Button color='primary' className='float-right' disabled={selectedList < 1} onClick={onSubmit}>Submit</Button>
        </Col>
      </Row>
    </div>)
  }
}

const mapStateToProps = state => {
  return { customerList: state.forecastForm.customerList, selectedList: state.forecastForm.selectedList }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => {
      dispatch(fetchCustList())
    },
    onItemClick: (index) => {
      dispatch(onCustSelect(index))
    },
    onSubmit: () => {
      dispatch(onListFormSubmit())
    },
    onEditQTY: (customer_id, qty) => {
      dispatch(updateCustQTY(customer_id, qty))
    }
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(CustomerList)
export {
  connected as CustomerList
}
