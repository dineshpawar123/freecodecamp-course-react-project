import { HANDLEMESSAGE } from './markDownPreviewType'

export const setUserMessage = (payload) => {
    return {
        type: HANDLEMESSAGE,
        payload
    }
}