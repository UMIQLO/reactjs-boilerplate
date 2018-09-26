import {ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM} from './actions'
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
        ...state, {
          title: action.todoInput,
          isFinish: false
        }
      ]
    case DELETE_ITEM:
      state.splice(action.id, 1)
      return [...state]
    case TOGGLE_ITEM:
      state[action.id].isFinish = !state[action.id].isFinish
      return [...state]
    default:
      return state
  }
}
export default todoAppReducer
