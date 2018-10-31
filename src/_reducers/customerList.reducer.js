import {ON_CUST_SELECT, INIT_CUST_TO_LIST, LIST_FORM_SUBMIT, UPDATE_SELECT_CUST_QTY} from '../_actions/customerList.action';
// init global state
const initalState = {
    customerList: '',
    selectedCustList: []
};

const forecastForm = (state = initalState, action) => {
    switch (action.type) {
        case INIT_CUST_TO_LIST:
            {
                return {
                    ...state,
                    customerList: action.payload
                };
            }
        case ON_CUST_SELECT:
            {
                const {selectedCustList} = state
                const tmpValue = {
                    customer_id: action.payload,
                    qty: 0
                }
                const itemIndex = selectedCustList.findIndex(item => item.customer_id == action.payload)
                if (itemIndex === -1) {
                    selectedCustList.push(tmpValue)
                } else {
                    selectedCustList.splice(itemIndex, 1)
                }
                return {
                    ...state,
                    selectedCustList: [...selectedCustList]
                }
            }
        case UPDATE_SELECT_CUST_QTY:
            {
                const {selectedCustList} = state
                const itemIndex = selectedCustList.findIndex(item => item.customer_id == action.payload.customer_id);
                selectedCustList[itemIndex].qty = action.payload.qty;
                return {
                    ...state,
                    selectedCustList: [...selectedCustList]
                };
            }
        default:
            return state;
    }
};

export default forecastForm;
