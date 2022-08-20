import { DISPLAY, POWER, VOLUME, BANK } from './drumType.js';

export const setDisplay = (payload) => {
    return {
        type: DISPLAY,
        payload
    };
};

export const setPower = (payload) => {
    return {
        type: POWER,
        payload
    };
};

export const setVolume = (payload) => {
    return {
        type: VOLUME,
        payload
    };
};

export const setBank = (payload) => {
    return {
        type: BANK,
        payload
    };
};
