import {INIT_OFFICE_LIST, ON_CHANGE_OFFICE} from '../_actions/officeSelect.action'

const initalState = {
    officeList: [],
    selectedOffice: ''
}

const officeSelect = (state = initalState, action) => {
    switch (action.type) {
        case INIT_OFFICE_LIST:
            {
                return {
                    ...state,
                    officeList: action.officeList
                }
            }
        case ON_CHANGE_OFFICE:
            {
                return {
                    ...state,
                    selectedOffice: action.officeName
                }
            }
        default:
            return state
    }
}

export default officeSelect
