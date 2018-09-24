// init global state
const initalState = {
  todoList: [
    {
      "title": 'Test 1',
      isFinish: false
    }
  ]
}

const todoAppReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todoList: [
          ...state.todoList, {
            title: action.tmpTodoInput,
            isFinish: false
          }
        ]
      }
    case 'TOGGLE_ITEM':
      console.log(action.id)
      return {
        ...state
      }
    default:
      return state
  }
}
export default todoAppReducer
