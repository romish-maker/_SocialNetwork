import React from 'react';
import {AddPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import {RootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        addPost: (post: string) => {
            dispatch(AddPostActionCreator(post))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
