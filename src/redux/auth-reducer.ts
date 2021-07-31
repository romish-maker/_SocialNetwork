import {StoreDispatchType} from "./redux-store";
import {authAPI} from "../api/api";

export type DataType = {
    id: number
    email: string
    login: string
}
export type AuthAPIType = {
    data: DataType
    resultCode: number
    messages: []
}
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}
const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
};


export const authReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {
    switch (action.type) {
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: false
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
                isFetching: false
            }
        default:
            return state;
    }
}


export type SetUserDataActionType = ReturnType<typeof setAuthUserDate>
export type SetIsFetchingActionType = ReturnType<typeof setIsFetching>
export type SetAuthUserDateActionType = ReturnType<typeof setAuthUserDate>

export type AuthReducerType = SetUserDataActionType | SetIsFetchingActionType| SetAuthUserDateActionType

export const setAuthUserDate = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {
            id,
            email,
            login
        }
    } as const
}

export const setIsFetching = () => {
    return {
        type: 'SET_IS_FETCHING'
    } as const
}

export const getAuthUserData = () => (dispatch: StoreDispatchType) => {
    authAPI.getAuthMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDate(id, email, login))
            }
        }).finally(() => dispatch(setIsFetching()))
}
