import {DialogPageType} from "./store";

export const dialogsReducer = (state: DialogPageType, action: dialogsReducerType) => {

    switch (action.type) {
        case 'UPDATE-NEW-BODY-MESSAGE':
            state.newMessageBody = action.newBody
            return state;
        case 'SEND-BODY-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}
export type dialogsReducerType = UpdateNewBodyMessageActionCreator | SendBodyMessageActionCreator

export type UpdateNewBodyMessageActionCreator = ReturnType<typeof UpdateNewBodyMessageActionCreator>
export type SendBodyMessageActionCreator = ReturnType<typeof SendBodyMessageActionCreator>

export const UpdateNewBodyMessageActionCreator = (newBody: string) => {
    return {
        type: 'UPDATE-NEW-BODY-MESSAGE',
        newBody: newBody
    } as const
}
export const SendBodyMessageActionCreator = () => {
    return {
        type: 'SEND-BODY-MESSAGE',
    } as const
}