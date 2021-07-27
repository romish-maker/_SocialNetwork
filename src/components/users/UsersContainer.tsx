import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {follow, getUsers, setCurrentPage, unfollow, UsersType} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type UserContainerType = MapDispatchToProps & MapStateToProps

export class UsersContainer extends React.Component<UserContainerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   unfollow={this.props.unfollow}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}


type MapStateToProps = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
const mapStateToProps = (state: RootStateType): MapStateToProps => {
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
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPageAC: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer));


