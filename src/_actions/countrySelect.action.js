import axios from 'axios'

export const INIT_COUNTRY_LIST = 'INIT_COUNTRY_LIST'
export const initCountryList = countryList => ({type: INIT_COUNTRY_LIST, countryList: countryList})

const getCountryList = async () => {
    let response = await axios.get('http://localhost:8000/api/master/country/office/list')
    return response.data
}
export const fetchCountryList = () => dispatch => getCountryList().then((data) => {
    dispatch(initCountryList(data))
})

export const FILTER_COUNTRY_BY_OFFICE = 'FILTER_COUNTRY_BY_OFFICE'
export const filterCountryByOffice = officeName => {
    return {type: FILTER_COUNTRY_BY_OFFICE, officeName: officeName}
}

export const ON_CHANGE_COUNTRY = 'ON_CHANGE_COUNTRY'
export const onChangeCountry = (countryCode) => {
    return {type: ON_CHANGE_COUNTRY, countryCode: countryCode}
}
