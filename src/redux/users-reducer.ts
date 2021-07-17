import {followAPI, usersAPI} from "../api/api";
import {StoreDispatchType} from "./redux-store";

export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingProgress: []
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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            debugger;
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter(id => id !== action.userID)
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
    ToggleIsFetchingActionType |
    toggleFollowingProgressActionType |
    SetUsersTotalCountActionType

export type FollowActionType = ReturnType<typeof FollowSuccess>
export type UnFollowActionType = ReturnType<typeof UnFollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>
export const FollowSuccess = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const UnFollowSuccess = (userID: number) => {
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
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userID
    } as const
}
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: StoreDispatchType) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
}
export const follow = (userId: number) => (dispatch: StoreDispatchType) => {
    dispatch(toggleFollowingProgress(true, userId))
    followAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(FollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
}
export const unfollow = (userId: number) => (dispatch: StoreDispatchType) => {
    dispatch(toggleFollowingProgress(true, userId))
    followAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(UnFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
}

