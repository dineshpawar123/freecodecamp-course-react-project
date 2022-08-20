import {
    PLAYPAUSE, RESET, BREAKDECREMENT, BREAKINCREMENT, SESSIONDECREMENT,
    SESSIONINCREMENT, SECONDMINUTE
} from './clockType';

export const playPause = (payload) => {
    console.log("in play action")
    return {
        type: PLAYPAUSE,
        payload
    }
}

export const reset = () => {
    return { type: RESET }
}

export const breakDecrement = (payload) => {
    return {
        type: BREAKDECREMENT,
        payload
    }
}

export const breakIncrement = (payload) => {
    return {
        type: BREAKINCREMENT,
        payload
    }
}

export const sessionDecrement = (payload) => {
    return {
        type: SESSIONDECREMENT,
        payload
    }
}

export const sessionIncrement = (payload) => {
    return {
        type: SESSIONINCREMENT,
        payload
    }
}

export const secondMinute = (payload) => {
    return {
        type: SECONDMINUTE,
        payload
    }
}
