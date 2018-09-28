import _ from 'lodash'
import {ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM, MARK_ALL_AS_DONE, SORTING} from './actions'
// init global state
const initalState = [
    {
        title: 'M',
        isFinish: false
    }, {
        title: 'I',
        isFinish: false
    }, {
        title: 'Z',
        isFinish: false
    }, {
        title: 'G',
        isFinish: false
    }, {
        title: 'U',
        isFinish: false
    }
]

const todoAppReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            {
                return [
                    {
                        title: action.todoInput,
                        isFinish: false
                    },
                    ...state
                ]
            }
        case DELETE_ITEM:
            {
                state.splice(action.id, 1)
                return [...state]
            }
        case TOGGLE_ITEM:
            {
                state[action.id].isFinish = !state[action.id].isFinish
                return [...state]
            }
        case MARK_ALL_AS_DONE:
            {
                state.map((item, index) => {
                    return item.isFinish = true
                })
                return [...state]
            }
        case SORTING:
            {
                switch (action.sortType) {
                    case 'aToz':
                        return _.orderBy(state, ['title'], ['asc'])
                    case 'zToa':
                        return _.orderBy(state, ['title'], ['desc'])
                    default:
                        return state
                }
            }
        default:
            return state
    }
}

export default todoAppReducer
