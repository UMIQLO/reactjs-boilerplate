import axios from 'axios'

export const INIT_OFFER_TO_LIST = 'INIT_OFFER_TO_LIST'
export const initOfferToList = offerList => ({type: INIT_OFFER_TO_LIST, payload: offerList})

export const FETCH_OFFER_LIST = 'FETCH_OFFER_LIST';
const getOfferList = async () => {
    let res = await axios.get('http://localhost:8000/api/forecast/offer/list')
    res = res.data
    return res
}
export const fetchOfferList = () => dispatch => getOfferList().then((data) => {
    dispatch(initOfferToList(data))
})

export const SELECT_OFFER = 'SELECT_OFFER'
export const selectOffer = offerNo => ({type: SELECT_OFFER, offerNo: offerNo})
