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
    isAuth: true
};


export const authReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        default:
            return state;
    }
}

export type AuthReducerType = SetUserDataActionType

export type SetUserDataActionType = ReturnType<typeof setAuthUserDate>

export const setAuthUserDate = (id: number, email: string , login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {
            id,
            email,
            login
        } as const
    }
}
