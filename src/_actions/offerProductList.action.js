import axios from 'axios'

export const INIT_OFFER_PROD_TO_LIST = 'INIT_OFFER_PROD_TO_LIST'
export const initOfferProdToList = offerProductList => ({type: INIT_OFFER_PROD_TO_LIST, payload: offerProductList})

export const FETCH_OFFER_PROD_LIST = 'FETCH_OFFER_PROD_LIST';
const getOfferProdList = async (offerNo) => {
    let res = await axios.get(`http://localhost:8000/api/forecast/offer/product/${offerNo}`)
    res = res.data
    return res
}
export const fetchOfferProdList = (offerNo) => dispatch => getOfferProdList(offerNo).then((data) => {
    dispatch(initOfferProdToList(data))
})

export const SELECT_OFFER_PROD = 'SELECT_OFFER_PROD'
export const selectOfferProd = offerProdId => ({type: SELECT_OFFER_PROD, offerProdId: offerProdId})
