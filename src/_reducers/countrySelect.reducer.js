import {INIT_COUNTRY_LIST, FILTER_COUNTRY_BY_OFFICE, ON_CHANGE_COUNTRY} from '../_actions/countrySelect.action'

const initalState = {
    countryList: [],
    selectedCountry: ''
}

const countryListSelect = (state = initalState, action) => {
    switch (action.type) {
        case INIT_COUNTRY_LIST:
            {
                return {
                    ...state,
                    countryList: action.countryList
                }
            }
        case FILTER_COUNTRY_BY_OFFICE:
            {
                const {countryList} = state
                const newCountryList = countryList.filter((item, index) => (item.office_office_name === action.officeName))
                return {
                    ...state,
                    countryList: newCountryList
                }
            }
        case ON_CHANGE_COUNTRY:
            {
                return {
                    ...state,
                    selectedCountry: action.countryCode
                }
            }
        default:
            return state
    }
}

export default countryListSelect
