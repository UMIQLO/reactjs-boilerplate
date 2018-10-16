export const DROP_FILES = 'DROP_FILES'
export const dropFile = (files) => {
    return {type: DROP_FILES, draggedFiles: files}
}
