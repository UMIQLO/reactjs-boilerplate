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
      let todoList = state.todoList
      todoList.forEach((element, index) => {
        if (index == action.id) {
          todoList[index].isFinish = !todoList[index].isFinish;
        }
      });
      return {
        ...state,
        todoList: todoList
      }
    default:
      return state
  }
}
export default todoAppReducer
