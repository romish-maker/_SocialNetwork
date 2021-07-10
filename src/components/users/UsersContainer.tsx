import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unFollow,
    UsersType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UserAPIPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

export class UsersContainer extends React.Component<UserAPIPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

       usersAPI.getUsers()
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>
    }
}


type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    const {pageSize} = state.usersPage
    const {totalUsersCount} = state.usersPage
    const {users} = state.usersPage
    const {currentPage} = state.usersPage
    const {isFetching} = state.usersPage
    return {
        users: users,
        pageSize: pageSize,
        totalUsersCount: totalUsersCount,
        currentPage: currentPage,
        isFetching: isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)


