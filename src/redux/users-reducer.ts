export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null    | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
};


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
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export type UsersReducerType =
    FollowActionType |
    UnFollowActionType |
    SetUsersActionType |
    SetCurrentActionType |
    ToggleIsFetching |
    SetUsersTotalCount

export type FollowActionType = ReturnType<typeof follow>
export type UnFollowActionType = ReturnType<typeof unFollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCount = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        count: totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}
