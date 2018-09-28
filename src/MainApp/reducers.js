const initalState = {
    username: ''
}

const mainAppReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}

export default mainAppReducer
