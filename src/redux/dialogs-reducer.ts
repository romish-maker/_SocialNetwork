import {DialogPageType} from "./store";
const initialState = {
        dialogs: [
            {id: 1, name: 'Archi'},
            {id: 2, name: 'Kot'},
            {id: 3, name: 'Kirill'},
            {id: 4, name: 'Andrey'},
            {id: 5, name: 'Igor'}
        ],
        messages: [
            {id: 1, message: 'Это я'},
            {id: 2, message: 'Kotik-pirozhochek)'},
            {id: 3, message: 'bla bla blaaa'},
            {id: 4, message: 'yooo'},
            {id: 5, message: 'hey'},
        ],
        newMessageBody: ''
    }



export const dialogsReducer = (state: DialogPageType = initialState, action: dialogsReducerType) => {

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