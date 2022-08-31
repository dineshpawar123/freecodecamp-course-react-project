import { ISUSERLOGIN } from './authType.js';
import { USEREMAIL } from './authType.js';

const INITIAL_STATE = {
    isUserLogin: false,
    userEmail: ''
};

const reducer = (state = INITIAL_STATE, action) => {
    console.log("=>", action.type, action.payload)
    switch (action.type) {

        case ISUSERLOGIN:
            return {
                ...state, isUserLogin: action.payload,
            };

        case USEREMAIL:
            return {
                ...state, userEmail: action.payload,
            };

        default: return state;
    }
};

export default reducer;