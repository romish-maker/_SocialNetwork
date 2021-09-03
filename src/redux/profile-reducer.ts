import {ProfileResponseType} from "../components/Profile/ProfileContainer";
import {StoreDispatchType} from "./redux-store";
import {profileAPI} from "../api/api";

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileResponseType | null
    status: string
}
export type PostsType = {
    id: number
    postMessage: string
    likesCount: number
}
const initialState: ProfilePageType = {
    posts: [
        {id: 1, postMessage: 'Это я 1st post', likesCount: 12},
        {id: 2, postMessage: 'Heeey yooo', likesCount: 42},
        {id: 3, postMessage: 'интересная новость', likesCount: 992},
        {id: 4, postMessage: 'Kotik 2d post', likesCount: 43},
    ],
    profile: null,
    status: ""
};


export const profileReducer = (state: ProfilePageType = initialState, action: profileReducerType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: new Date().getTime(),
                postMessage: action.newPostText,
                likesCount: 25
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

// generally type for action
export type profileReducerType =
    AddPostActionType
    | setUserProfileActionType
    | setStatusActionType


// action creators
export const AddPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}
export const setStatusActionCreator = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
// thunk creators
export const getUserProfile = (userId: number) => (dispatch: StoreDispatchType) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatusProfile = (userId: number) => (dispatch: StoreDispatchType) =>  {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusActionCreator(response.data))
        })
}
export const updateStatusProfile = (status: string) => (dispatch: StoreDispatchType) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status));
            }
        }).catch(err => alert(err));
}





export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setStatusActionType = ReturnType<typeof setStatusActionCreator>
