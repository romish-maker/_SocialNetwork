export type UsersPageType = {
    users: UsersType[]
}
export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
const initialState: UsersPageType = {
    users: []
}


export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export type UsersReducerType = FollowActionType | UnFollowActionType | SetUsersActionType

export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
