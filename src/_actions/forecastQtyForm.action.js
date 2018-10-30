import axios from 'axios'

export const postSubmitForm = async (data) => {
    let request = await axios.post('http://localhost:8000/api/forecast/qtyForm/submit', data)
    return request.data
}
