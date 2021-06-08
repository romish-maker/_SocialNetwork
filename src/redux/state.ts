export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _CallSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscriber: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

let store: StoreType = {
    _state:  {
    profilePage: {
        posts: [
            {id: 1, postMessage: 'Это я 1st post', likesCount: 12},
            {id: 1, postMessage: 'Heeey yooo', likesCount: 42},
            {id: 1, postMessage: 'интересная новость', likesCount: 992},
            {id: 2, postMessage: 'Kotik 2d post', likesCount: 43}
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
        ]
    },
    sidebar: {}
},
    getState() {
        return this._state
    },
    _CallSubscriber() {
        console.log("state changed")
    },
    addPost() {
        const newPost: PostsType = {
            id: new Date().getTime(),
            postMessage: store._state.profilePage.newPostText,
            likesCount: 0
        }
        store._state.profilePage.posts.push(newPost)
        store._state.profilePage.newPostText = '';
        this._CallSubscriber()
    },
    updateNewPostText(newText: string) {
        store._state.profilePage.newPostText = newText
        this._CallSubscriber()
    },
    subscriber(observer: () => void ) {
        this._CallSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                postMessage: store._state.profilePage.newPostText,
                likesCount: 0
            }
            store._state.profilePage.posts.push(newPost)
            store._state.profilePage.newPostText = '';
            this._CallSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            store._state.profilePage.newPostText = action.newText
            this._CallSubscriber()
        }
    }
}


export type MessagesType ={
    id:number
    message:string
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
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar: SidebarType
}



export default store;