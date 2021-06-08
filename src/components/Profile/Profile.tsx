import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, PostsType, UpdateNewPostTextActionType} from "../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.main}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    );
}
export default Profile;