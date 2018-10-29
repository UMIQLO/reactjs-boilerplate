import _ from 'lodash'
import {INIT_OFFER_TO_LIST, SELECT_OFFER} from '../_actions/offerList.action'

const initalState = {
    offerList: '',
    selectedOffer: ''
}

const offerList = (state = initalState, action) => {
    switch (action.type) {
        case INIT_OFFER_TO_LIST:
            {
                return {
                    ...state,
                    offerList: action.payload
                }
            }
        case SELECT_OFFER:
            {
                return {
                    ...state,
                    selectedOffer: action.offerNo
                }
            }
        default:
            return state
    }
}

export default offerList
