import { DISPLAYTEXT, lASTINPUT, lASTCLICKED } from './calculatorType.js';

export const setdisplayText = (payload) => {
    return {
        type: DISPLAYTEXT,
        payload
    };
};

export const setLastInput = (payload) => {
    return {
        type: lASTINPUT,
        payload
    };
};

export const setLastClicked = (payload) => {
    return {
        type: lASTCLICKED,
        payload
    };
};