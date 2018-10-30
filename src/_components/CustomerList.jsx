import React, {Component} from 'react'
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import {onCustSelect, updateCustQTY} from '../_actions/customerList.action'

class CustomerList extends React.Component {
    constructor(props) {
        super(props)

    }

    onChange = (index) => (event) => {
        const {onEditQTY} = this.props
        onEditQTY(index, event.target.value)
    }

    render() {
        const {onItemClick, onSubmit} = this.props
        const customerList = Array.from(this.props.customerList)
        const selectedCustList = Array.from(this.props.selectedCustList)
        return (<div>
            <Row noGutters={true}>
                {
                    customerList.map((item, index) => {
                        const itemIndex = selectedCustList.findIndex(data => data.customer_id == item.customer_id)
                        return (<Col xs="1" key={item.customer_id} onClick={onItemClick(item.customer_id)}>
                            <Alert color={itemIndex !== -1
                                    ? 'success'
                                    : 'dark'}>
                                {item.cust_prefix}
                                <div className='float-right'>
                                    {
                                        itemIndex !== -1
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
                    selectedCustList.map((item, index) => {
                        const itemIndex = customerList.findIndex(data => data.customer_id == item.customer_id)
                        return itemIndex !== -1
                            ? (<Col xs="2" key={item.customer_id}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>{customerList[itemIndex].cust_prefix}</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="number" min="1" onInput={this.onChange(item.customer_id)}/>
                                </InputGroup>
                            </Col>)
                            : ''
                    })
                }
            </Row>
        </div>)
    }
}

const mapStateToProps = state => {
    return {customerList: state.customerList.customerList, selectedCustList: state.customerList.selectedCustList}
}

const mapDispatchToProps = dispatch => {
    return {
        onItemClick: (index) => (event) => {
            dispatch(onCustSelect(index))
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
