import { ON_CUST_SELECT, INIT_CUST_TO_LIST, LIST_FORM_SUBMIT, UPDATE_SELECT_CUST_QTY } from '../_actions/forecastForm.action'
import _ from 'lodash'
// init global state
const initalState = {
  customerList: '',
  selectedList: ''
}

const forecastForm = (state = initalState, action) => {
  switch (action.type) {
    case INIT_CUST_TO_LIST:
    {
      return {
        ...state,
        customerList: action.payload
      }
    }
    case ON_CUST_SELECT:
    {
      const custList = state.customerList
      const tmpCustItem = _.find(custList, (item) => {
        return item.customer_id === action.payload
      })
      tmpCustItem.isSelected = !tmpCustItem.isSelected

      const selectedList = _.filter(custList, (item) => {
        item.qty = 0
        return item.isSelected == true
      })
      return {
        ...state,
        customerList: [...custList],
        selectedList: [...selectedList]
      }
    }
    case UPDATE_SELECT_CUST_QTY:
    {
      const selectedList = state.selectedList
      const itemIndex = selectedList.findIndex(item => item.customer_id == action.payload.customer_id)
      selectedList[itemIndex].qty = action.payload.qty
      return {
        ...state,
        selectedList: [...selectedList]
      }
    }
    default:
      return state
  }
}

export default forecastForm
