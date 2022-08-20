
import { PROJECTNAME } from './projectType.js';

export const setOpenProjectName = (payload) => {
    return {
        type: PROJECTNAME,
        payload
    };
};
