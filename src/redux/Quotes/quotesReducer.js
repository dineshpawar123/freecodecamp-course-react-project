import { INCREMENTINDEX } from './quotesType';

const INITIAL_STATE = {
    index: 1,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case INCREMENTINDEX:
            return {
                ...state, index: action.payload,
            };
        default: return state;
    }
};

export default reducer;