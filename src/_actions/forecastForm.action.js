import axios from 'axios'

export const ON_CUST_SELECT = 'ON_CUST_SELECT'
export const onCustSelect = (index) => {
  return { type: ON_CUST_SELECT, payload: index }
}

export const FETCH_CUST_LIST = 'FETCH_CUST_LIST'
const getCustomerList = async () => {
  let res = await axios.get('http://localhost:8000/api/forecast/customer/list')
  res = res.data
  res.forEach((obj) => {
    obj.isSelected = false
  })
  return res
}
export const fetchCustList = () => {
  return (dispatch) => {
    return getCustomerList().then((data) => {
      dispatch(initCustToList(data))
    })
  }
}

export const INIT_CUST_TO_LIST = 'INIT_CUST_TO_LIST'
export const initCustToList = (custList) => {
  return { type: INIT_CUST_TO_LIST, payload: custList }
}

export const LIST_FORM_SUBMIT = 'LIST_FORM_SUBMIT'
export const onListFormSubmit = () => {
  return { type: LIST_FORM_SUBMIT }
}

export const UPDATE_SELECT_CUST_QTY = 'UPDATE_SELECT_CUST_QTY'
export const updateCustQTY = (customer_id, qty) => {
  return {
    type: UPDATE_SELECT_CUST_QTY,
    payload: {
      customer_id: customer_id,
      qty: qty
    }
  }
}
