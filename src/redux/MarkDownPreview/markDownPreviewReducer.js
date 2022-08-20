import { placeholder } from '../../constants/markDownPreview';
import { HANDLEMESSAGE } from './markDownPreviewType'

const initialState = {
    markdown: placeholder
}

export const markDownPreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLEMESSAGE: return { ...state, markdown: action.payload }
        default: return state;
    }
}