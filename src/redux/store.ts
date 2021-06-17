import {AddPostActionType, PostsType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {dialogsReducer, SendBodyMessageActionCreator, UpdateNewBodyMessageActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _CallSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    UpdateNewPostTextActionType
    | AddPostActionType
    | UpdateNewBodyMessageActionCreator
    | SendBodyMessageActionCreator


let store: any = {
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
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._CallSubscriber()
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

type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}


export default store;