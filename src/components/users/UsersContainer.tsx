import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unFollow,
    UsersType, toggleFollowingProgress
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export class UsersContainer extends React.Component<TProps> {
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
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingProgress={this.props.followingProgress}
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
    followingProgress: number[]
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    const {pageSize} = state.usersPage
    const {totalUsersCount} = state.usersPage
    const {users} = state.usersPage
    const {currentPage} = state.usersPage
    const {isFetching} = state.usersPage
    const {followingProgress} = state.usersPage
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingProgress
    }
}

const connector = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})
type TProps = ConnectedProps<typeof connector>

export default connector(UsersContainer)


