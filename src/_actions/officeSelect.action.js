import axios from 'axios'

export const INIT_OFFICE_LIST = 'INIT_OFFICE_LIST'
export const initOfficeList = officeList => ({type: INIT_OFFICE_LIST, officeList: officeList})

const getOfficeList = async () => {
    let response = await axios.get('http://localhost:8000/api/master/office')
    return response.data
}

export const fetchOfficeList = () => dispatch => getOfficeList().then(data => (dispatch(initOfficeList(data))))

export const ON_CHANGE_OFFICE = 'ON_CHANGE_OFFICE'
export const onChangeOffice = (officeName) => {
    return {type: ON_CHANGE_OFFICE, officeName: officeName}
}
