import {ON_CHANGE_YEAR} from '../_actions/yearSelect.action'

const initalState = {
    selectedYear: ''
}

const yearSelect = (state = initalState, action) => {
    switch (action.type) {
        case ON_CHANGE_YEAR:
            {
                return {
                    ...state,
                    selectedYear: action.year
                }
            }
        default:
            return state
    }
}

export default yearSelect
