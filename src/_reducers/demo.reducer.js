import {CLICK_COUNT} from '../_actions'

// init global state
const initalState = {
    clickCount: 0
}

const demo = (state = initalState, action) => {
    switch (action.type) {
        case CLICK_COUNT:
            return {
                clickCount: state.clickCount + 1
            }
        default:
            return state
    }
}
export default demo
