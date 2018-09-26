import {ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM, MARK_ALL_AS_DONE} from './actions'
// init global state
const initalState = []

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
        return state.splice(action.id, 1)
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
    default:
      return state
  }
}
export default todoAppReducer
