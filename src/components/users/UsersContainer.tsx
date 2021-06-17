import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";

type mapStateToPropsType = {
    users: UsersType[]
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
type mapDispatchToProps = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

