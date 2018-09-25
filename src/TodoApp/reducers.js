import {ADD_ITEM, TOGGLE_ITEM} from './actions'
// init global state
const initalState = [
    {
        title: 'TodoItem 1',
        isFinish: false
    }
]

const todoAppReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    title: action.todoInput,
                    isFinish: false,
                }
            ]
        case TOGGLE_ITEM:
            state[action.id].isFinish = !state[action.id].isFinish
            return [...state]
        default:
            return state
    }
}
export default todoAppReducer
