import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'reactstrap'
import Select from 'react-select'
import {fetchOfferList, selectOffer} from '../_actions/offerList.action'
import {fetchOfferProdList} from '../_actions/offerProductList.action'

class OfferList extends Component {
    constructor(props) {
        super(props)
        this.onSelectChange = this.onSelectChange.bind(this)
    }

    componentDidMount() {
        const {fetchList} = this.props
        fetchList()
    }

    onSelectChange(selectedOption) {
        console.log(`Option selected:`, selectedOption);
        const {selectOffer, fetchOfferProdList} = this.props
        const offerNo = selectedOption.value
        selectOffer(offerNo)
        if (offerNo !== '') {
            fetchOfferProdList(offerNo)
        }
    }

    render() {
        const offerList = Array.from(this.props.offerList)
        const options = offerList.map((item, index) => {
            const label = `${item.offer_no} | ${item.offer_description}`
            const value = item.offer_no
            return {label: label, value: value}
        })
        return (<Row>
            <Col xs='12'>
                <Select onChange={this.onSelectChange} options={options}/>
            </Col>
        </Row>)
    }
}

const mapStateToProps = state => ({offerList: state.offerList.offerList})
const mapDispatchToProps = dispatch => ({
    fetchList: () => {
        dispatch(fetchOfferList())
    },
    selectOffer: (offerNo) => {
        dispatch(selectOffer(offerNo))
    },
    fetchOfferProdList: (offerNo) => {
        dispatch(fetchOfferProdList(offerNo))
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(OfferList)
export {
    connected as OfferList
}
