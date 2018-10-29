import React from 'react'
import {Input, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import {fetchCustList} from '../_actions/customerList.action'
import {selectOfferProd} from '../_actions/offerProductList.action'

class OfferProductList extends React.Component {
    constructor(props) {
        super(props)
        this.onSelectChange = this.onSelectChange.bind(this)
    }

    onSelectChange(event) {
        const {fetchCustList, selectOfferProd} = this.props
        const offerProdNo = event.target.value
        if (offerProdNo !== '') {
            selectOfferProd(offerProdNo)
            fetchCustList()
        }
    }

    render() {
        const offerProdList = Array.from(this.props.offerProdList)
        return (<Row>
            <Col xs='12'>
                <Input type='select' onChange={this.onSelectChange}>
                    <option value=''>=== Please Select ===</option>
                    {
                        offerProdList.map((item, index) => {
                            const desc = `${item.offer_product_id} | ${item.sap_eng_name} | ${item.sap_jp_name}`
                            return (<option key={index} value={item.offer_product_id}>{desc}</option>)
                        })
                    }
                </Input>
            </Col>
        </Row>)
    }
}
const mapStateToProps = state => ({offerProdList: state.offerProductList.offerProdList})
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
