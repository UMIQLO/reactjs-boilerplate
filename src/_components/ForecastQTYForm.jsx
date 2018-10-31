import React, {Component} from 'react'
import {CustomerList} from './CustomerList'
import {OfferList} from './OfferList'
import {OfferProductList} from './OfferProductList'
import {postSubmitForm} from '../_actions/forecastQtyForm.action'
import {
    Container,
    Alert,
    Collapse,
    Row,
    Col,
    Button
} from 'reactstrap'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'

class ForecastQTYForm extends Component {
    constructor(props) {
        super(props)
        this.btnSubmitOnClick = this.btnSubmitOnClick.bind(this)
    }

    btnSubmitOnClick() {
        const {selectedOffer, selectedOfferProd, selectedCustList, customerList} = this.props
        if (selectedOffer !== '' && selectedOfferProd !== '' && selectedCustList !== '') {
            const data = ({offer_no: selectedOffer, offer_product_id: selectedOfferProd, customer_list: selectedCustList})
            let confirmMsg = ''
            let errorMsg = ''
            selectedCustList.map((item) => {
                const itemIndex = customerList.findIndex(data => data.customer_id == item.customer_id)
                const custPrefix = customerList[itemIndex].cust_prefix
                confirmMsg += `${custPrefix}: ${item.qty}<br/>`
                if (item.qty === 0 || item.qty === '') {
                    errorMsg += `${custPrefix} is error<br/>`
                }
            })
            const MySwal = withReactContent(Swal)

            if (errorMsg !== '') {
                MySwal.fire('Error!', errorMsg, 'error')
            } else {
                MySwal.fire({
                    title: 'Submit?', html: `Offer ID: ${selectedOffer}</br>Offer Product ID: ${selectedOfferProd}</br></br>Customer List QTY:<br/>${confirmMsg}`, type: 'warning', showCancelButton: true,
                    // confirmButtonColor: '#3085d6',
                    // cancelButtonColor: '#d33',
                    confirmButtonText: 'Submit'
                }).then((result) => {
                    if (result.value) {
                        postSubmitForm(data).then(response => {
                            MySwal.fire('OK!', 'Your form has been saved.', 'success')
                            console.log(response)
                        })
                    }
                })
            }

        }
    }

    render() {
        const {selectedOffer, selectedOfferProd, selectedCustList} = this.props
        return (<Container fluid={true}>
            <Row>
                <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                    <Alert color="primary">
                        <span>Step 1. Select Offer</span>
                        <FontAwesomeIcon className='float-right' icon={faSync}/>
                    </Alert>
                    <Collapse isOpen={true}>
                        <OfferList/>
                        <hr/>
                    </Collapse>
                </Col>
                <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                    <Collapse isOpen={selectedOffer !== ''}>
                        <Alert color="primary">Step 2. Select Offer Product</Alert>
                        <OfferProductList/>
                        <hr/>
                    </Collapse>
                </Col>
            </Row>
            <Collapse isOpen={selectedOfferProd !== ''}>
                <Alert color="primary">Step 3. Please Select Customer</Alert>
                <CustomerList/>
                <Row>
                    <Col xs='12'>
                        <Button color='primary' className='float-right' onClick={this.btnSubmitOnClick} disabled={selectedOffer !== '' && selectedOfferProd !== '' && selectedCustList.length <= 0}>Submit</Button>
                    </Col>
                </Row>
            </Collapse>
        </Container>)
    }
}

const mapStateToProps = state => ({selectedOffer: state.offerList.selectedOffer, selectedOfferProd: state.offerProductList.selectedOfferProd, selectedCustList: state.customerList.selectedCustList, customerList: state.customerList.customerList})
const connected = connect(mapStateToProps)(ForecastQTYForm)
export {
    connected as ForecastQTYForm
}
