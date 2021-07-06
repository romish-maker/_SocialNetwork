import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "./ProfileContainer";


type ProfilePropsType = {
    profile: ProfileResponseType  | null
}
export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;