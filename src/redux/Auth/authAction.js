import { ISUSERLOGIN } from './authType.js';
import { USEREMAIL } from './authType.js';

export const setUserLoginLogout = (payload) => {
    console.log("=>", payload, USEREMAIL)
    return {
        type: ISUSERLOGIN,
        payload
    };
};

export const setUserEmail = (payload) => {
    console.log("=>", payload)
    return {
        type: USEREMAIL,
        payload
    };
};

