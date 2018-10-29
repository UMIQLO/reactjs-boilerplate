import _ from 'lodash'
import {INIT_OFFER_PROD_TO_LIST, SELECT_OFFER_PROD} from '../_actions/offerProductList.action'

const initalState = {
    offerProdList: '',
    selectedOfferProd: ''
}

const offerProductList = (state = initalState, action) => {
    switch (action.type) {
        case INIT_OFFER_PROD_TO_LIST:
            {
                return {
                    ...state,
                    offerProdList: action.payload
                }
            }
        case SELECT_OFFER_PROD:
            {
                return {
                    ...state,
                    selectedOfferProd: action.offerProdId
                }
            }
        default:
            return state
    }
}

export default offerProductList
