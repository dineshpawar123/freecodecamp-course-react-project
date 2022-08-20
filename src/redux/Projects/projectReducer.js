import { PROJECTNAME } from './projectType';

const INITIAL_STATE = {
    name: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case PROJECTNAME:
            return {
                ...state, name: action.payload,
            };
        default: return state;
    }
};

export default reducer;