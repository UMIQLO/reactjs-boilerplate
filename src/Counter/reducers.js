// init global state
const initalState = {
  counter: 0
}

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        // stateName : stateNewValue
        counter: state.counter + 1
      }
    case 'DECREASE':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}
export default counterReducer
