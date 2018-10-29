import React, {Component} from 'react'
import {CustomerList} from './CustomerList'
import {OfferList} from './OfferList'
import {OfferProductList} from './OfferProductList'
import {
    Container,
    Alert,
    Collapse,
    Row,
    Col,
    Button
} from 'reactstrap'
import {connect} from 'react-redux'

class ForecastQTYForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {selectedOffer, selectedOfferProd} = this.props
        return (<Container fluid={true}>
            <Alert color="primary">Step 1. Select Offer</Alert>
            <Collapse isOpen={true}>
                <OfferList/>
                <Row>
                    <Col xs='12'><hr/></Col>
                </Row>
            </Collapse>
            <Collapse isOpen={selectedOffer !== ''}>
                <Alert color="primary">Step 2. Select Offer Product</Alert>
                <OfferProductList/>
                <Row>
                    <Col xs='12'><hr/></Col>
                </Row>
            </Collapse>
            <Collapse isOpen={selectedOfferProd !== ''}>
                <Alert color="primary">Step 3. Please Select Customer</Alert>
                <CustomerList/>
                <Row>
                    <Col xs='6'>{JSON.stringify(this.props)}</Col>
                    <Col xs='6'>
                        <Button color='primary' className='float-right'>Submit</Button>
                    </Col>
                </Row>
            </Collapse>
        </Container>)
    }
}

const mapStateToProps = state => ({selectedOffer: state.offerList.selectedOffer, selectedOfferProd: state.offerProductList.selectedOfferProd, selectedCustList: state.customerList.selectedCustList})
const connected = connect(mapStateToProps)(ForecastQTYForm)
export {
    connected as ForecastQTYForm
}
