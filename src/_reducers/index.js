import {combineReducers} from 'redux'
import demo from './demo.reducer'
import dragNdrop from './dragNdrop.reducer'

const rootReducer = combineReducers({demo: demo, dragNdrop: dragNdrop})
export default rootReducer
