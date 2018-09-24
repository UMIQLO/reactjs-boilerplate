import {combineReducers} from 'redux'
import todoAppReducer from './TodoApp/reducers'
import counterReducer from './Counter/reducers'

const rootReducer = combineReducers({counterApp: counterReducer, todoApp: todoAppReducer})

export default rootReducer
