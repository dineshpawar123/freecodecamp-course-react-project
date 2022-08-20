import { DISPLAY } from './drumType';
import { POWER } from './drumType';
import { VOLUME } from './drumType';
import { BANK } from './drumType';

const INITIAL_STATE = {
    display: '',
    power: true,
    volume: 30,
    bank: 0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY:
            return {
                ...state, display: action.payload,
            };
        case POWER:
            return {
                ...state, power: action.payload,
            };
        case VOLUME:
            return {
                ...state, volume: action.payload,
            };
        case BANK:
            return {
                ...state, bank: action.payload,
            };
        default: return state;
    }
};

export default reducer;