export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _CallSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = ReturnType<typeof AddPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>
type UpdateNewBodyMessageActionCreator = ReturnType<typeof UpdateNewBodyMessageActionCreator>
type SendBodyMessageActionCreator = ReturnType<typeof SendBodyMessageActionCreator>

export const AddPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const UpdateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
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


export type ActionsTypes =
    UpdateNewPostTextActionType
    | AddPostActionType
    | UpdateNewBodyMessageActionCreator
    | SendBodyMessageActionCreator

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'Это я 1st post', likesCount: 12},
                {id: 2, postMessage: 'Heeey yooo', likesCount: 42},
                {id: 3, postMessage: 'интересная новость', likesCount: 992},
                {id: 4, postMessage: 'Kotik 2d post', likesCount: 43},
            ],
            newPostText: 'qwe;qwr'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _CallSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._CallSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                postMessage: store._state.profilePage.newPostText,
                likesCount: 25
            }
            store._state.profilePage.posts.push(newPost)
            store._state.profilePage.newPostText = '';
            this._CallSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._CallSubscriber()
        } else if (action.type === 'UPDATE-NEW-BODY-MESSAGE') {
            this._state.dialogsPage.newMessageBody = action.newBody
            this._CallSubscriber()
        } else if (action.type === 'SEND-BODY-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._CallSubscriber()
        }
    }
}


export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    postMessage: string
    likesCount: number
}
type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}


export default store;