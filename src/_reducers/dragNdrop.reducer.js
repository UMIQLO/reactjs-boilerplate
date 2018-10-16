import {DROP_FILES} from '../_actions/dragNdrop.action'

// init global state
const initalState = {
    files: []
}

const dragNdrop = (state = initalState, action) => {
    switch (action.type) {
        case DROP_FILES:
            return {files: action.draggedFiles}
        default:
            return state
    }
}
export default dragNdrop
