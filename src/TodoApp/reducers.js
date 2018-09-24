// init global state
const initalState = {
  todoList: [
    {
      "title": 'Test 1'
    }
  ],
  todoInput: "todoInput"
}

const todoAppReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default todoAppReducer
