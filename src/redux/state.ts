export let rerenderEntireThree = () => {
    console.log("state changed")
}

export const subcribe = (observer: () => void ) => {
    rerenderEntireThree = observer
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



let state:RootStateType = {
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
}
export const addPost = () => {

    const newPost: PostsType = {
        id: new Date().getTime(),
        postMessage: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireThree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireThree()
}


export default state