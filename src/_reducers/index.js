import { combineReducers } from 'redux'
import demo from './demo.reducer'
import forecastForm from './forecastForm.reducer'

const rootReducer = combineReducers({ demo: demo, forecastForm: forecastForm })
export default rootReducer
