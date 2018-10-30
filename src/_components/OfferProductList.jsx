import React from 'react'
import {Row, Col} from 'reactstrap'
import Select from 'react-select'
import {connect} from 'react-redux'
import {fetchCustList} from '../_actions/customerList.action'
import {selectOfferProd} from '../_actions/offerProductList.action'

class OfferProductList extends React.Component {
    constructor(props) {
        super(props)
        this.onSelectChange = this.onSelectChange.bind(this)
    }

    onSelectChange(selectedOption) {
        const {fetchCustList, selectOfferProd} = this.props
        const offerProdNo = selectedOption.value
        if (offerProdNo !== '') {
            selectOfferProd(offerProdNo)
            fetchCustList()
        }
    }

    render() {
        const offerProdList = Array.from(this.props.offerProdList)
        const {selectedOfferProd} = this.props

        const options = offerProdList.map((item, index) => {
            const label = `${item.offer_product_id} | ${item.sap_eng_name} | ${item.sap_jp_name}`
            const value = item.offer_product_id
            return {label: label, value: value}
        })
        return (<Row>
            <Col xs='12'>
                <Select onChange={this.onSelectChange} options={options} value={options.filter(item => item.value === selectedOfferProd)}/>
            </Col>
        </Row>)
    }
}
const mapStateToProps = state => ({offerProdList: state.offerProductList.offerProdList, selectedOfferProd: state.offerProductList.selectedOfferProd})
const mapDispatchToProps = dispatch => ({
    fetchCustList: () => {
        dispatch(fetchCustList())
    },
    selectOfferProd: (offerProdNo) => {
        dispatch(selectOfferProd(offerProdNo))
    }
})
const connected = connect(mapStateToProps, mapDispatchToProps)(OfferProductList)
export {
    connected as OfferProductList
}
