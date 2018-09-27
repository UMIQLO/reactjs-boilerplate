export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const MARK_ALL_AS_DONE = 'MARK_ALL_AS_DONE'
export const SORTING = 'SORTING'

export const addTodo = todoInput => {
    return {type: ADD_ITEM, todoInput: todoInput}
}

export const deleteTodo = id => {
    return {type: DELETE_ITEM, id: id}
}

export const toggleTodoStatus = id => {
    return {type: TOGGLE_ITEM, id: id}
}

export const markAllAsDone = () => {
    return {type: MARK_ALL_AS_DONE}
}

export const changeSorting = sortType => {
    return {type: SORTING, sortType: sortType}
}
