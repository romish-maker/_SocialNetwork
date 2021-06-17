import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/redux-store";

type PropsType = {
    state: RootStateType
    dispatch: (action: any) => void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.main}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;