import {combineReducers} from 'redux'
import yearSelect from './yearSelect.reducer'
import officeSelect from './officeSelect.reducer'
import countrySelect from './countrySelect.reducer'

const rootReducer = combineReducers({yearSelect: yearSelect, officeSelect: officeSelect, countrySelect: countrySelect});
export default rootReducer;
