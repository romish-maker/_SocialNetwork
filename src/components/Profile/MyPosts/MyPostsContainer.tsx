import React from 'react';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import {RootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        UpdateNewPostText: (text: string) => {
            let action = dispatch(UpdateNewPostTextActionCreator(text))
            dispatch(action)
        },
        addPost: () => {
            dispatch(AddPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
