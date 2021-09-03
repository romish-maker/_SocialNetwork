export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const initialState: DialogPageType = {
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
}


export const dialogsReducer = (state: DialogPageType = initialState, action: dialogsReducerType): DialogPageType => {
    switch (action.type) {
        case 'SEND-BODY-MESSAGE': {
            let body = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state;
    }
}
export type dialogsReducerType = SendBodyMessageActionCreator

export type SendBodyMessageActionCreator = ReturnType<typeof SendBodyMessageActionCreator>

export const SendBodyMessageActionCreator = (message: string) => {
    return {
        type: 'SEND-BODY-MESSAGE',
        message
    } as const
}