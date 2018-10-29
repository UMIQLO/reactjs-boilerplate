import {combineReducers} from 'redux'
import demo from './demo.reducer'
import customerList from './customerList.reducer'
import offerList from './offerList.reducer'
import offerProductList from './offerProductList.reducer'

const rootReducer = combineReducers({demo: demo, customerList: customerList, offerList: offerList, offerProductList: offerProductList});
export default rootReducer;
