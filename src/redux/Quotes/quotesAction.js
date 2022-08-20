
import { INCREMENTINDEX } from './quotesType.js';

export const setIncrementIndex = (payload) => {
    return {
        type: INCREMENTINDEX,
        payload
    };
};
