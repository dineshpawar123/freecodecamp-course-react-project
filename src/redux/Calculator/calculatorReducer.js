import { DISPLAYTEXT, lASTINPUT, lASTCLICKED } from './calculatorType.js';

const INITIAL_STATE = {
    displayText: '',
    lastInput: '0',
    lastClicked: ''
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case DISPLAYTEXT:
            return {
                ...state, displayText: action.payload,
            };

        case lASTINPUT:
            return {
                ...state, lastInput: action.payload,
            };

        case lASTCLICKED:
            return {
                ...state, lastClicked: action.payload,
            };
        default: return state;
    }
};

export default reducer;