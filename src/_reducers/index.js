import {combineReducers} from 'redux'
import demo from './demo.reducer'

const rootReducer = combineReducers({demo: demo})
export default rootReducer
