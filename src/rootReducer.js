import {combineReducers} from 'redux'
import todoAppReducer from './TodoApp/reducers'
import counterReducer from './Counter/reducers'
import mainAppReducer from './MainApp/reducers'

const rootReducer = combineReducers({counterApp: counterReducer, todoApp: todoAppReducer, mainApp: mainAppReducer})

export default rootReducer
