import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input, Row, Col} from 'reactstrap'
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

    onSelectChange(event) {
        const {selectOffer, fetchOfferProdList} = this.props
        const offerNo = event.target.value
        selectOffer(offerNo)
        if (offerNo !== '') {
            fetchOfferProdList(offerNo)
        }
    }

    render() {
        const offerList = Array.from(this.props.offerList)
        return (<Row>
            <Col xs='12'>
                <Input type='select' onChange={this.onSelectChange}>
                    <option value=''>=== Please Select ===</option>
                    {
                        offerList.map((item, index) => {
                            const desc = `${item.offer_no} | ${item.offer_description}`
                            return (<option key={index} value={item.offer_no}>{desc}</option>)
                        })
                    }
                </Input>
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
