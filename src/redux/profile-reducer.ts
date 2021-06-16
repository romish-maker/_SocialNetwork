import {ProfilePageType} from "./store";
export type PostsType = {
    id: number
    postMessage: string
    likesCount: number
}
const initialState = {
    posts: [
        {id: 1, postMessage: 'Это я 1st post', likesCount: 12},
        {id: 2, postMessage: 'Heeey yooo', likesCount: 42},
        {id: 3, postMessage: 'интересная новость', likesCount: 992},
        {id: 4, postMessage: 'Kotik 2d post', likesCount: 43},
    ],
    newPostText: 'qwe;qwr'
}


export const profileReducer = (state: ProfilePageType = initialState, action: profileReducerType )  => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: new Date().getTime(),
                postMessage: state.newPostText,
                likesCount: 25
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export type profileReducerType = AddPostActionType | UpdateNewPostTextActionType

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>

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