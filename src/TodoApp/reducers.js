// init global state
const initalState = [
    {
        "title": 'Test 1',
        isFinish: true
    }
]


const todoAppReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    title: action.tmpTodoInput,
                    isFinish: false,
                }
            ]

        case 'TOGGLE_ITEM':
            state[action.id].isFinish = !state[action.id].isFinish
            return [...state]
        default:
            return state
    }
}
export default todoAppReducer
