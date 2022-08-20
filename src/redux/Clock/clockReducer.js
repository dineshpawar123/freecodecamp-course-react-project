import { PLAYPAUSE, RESET, BREAKDECREMENT, BREAKINCREMENT, SESSIONDECREMENT, SESSIONINCREMENT, SECONDMINUTE } from './clockType';

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    minute: 25,
    second: 60,
    PlayPause: false,
    flage: true
}

export const clockReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case PLAYPAUSE: return { ...state, PlayPause: !action.payload };
        case RESET: return { ...state, second: '0', sessionLength: '25', minute: '25', breakLength: '5' };
        case BREAKDECREMENT: return { ...state, breakLength: action.payload - 1 }
        case BREAKINCREMENT: return { ...state, breakLength: action.payload + 1 }
        case SESSIONDECREMENT: return { ...state, sessionLength: action.payload - 1 }
        case SESSIONINCREMENT: return { ...state, sessionLength: action.payload + 1 }
        case SECONDMINUTE: return { ...state, minute: action.payload.minute, second: action.payload.second }
        default: return state;
    }
}

