export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

export const increaseCounter = () => {
    return {
        type: INCREASE
    }
}

export const decreaseCouter = () => {
    return {
        type: DECREASE
    }
}