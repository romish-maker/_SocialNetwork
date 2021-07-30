import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "./ProfileContainer";


export type ProfilePropsType = {
    profile: ProfileResponseType  | null
    status: string
    updateStatusProfile: (status: string) => void
}
export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.main}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatusProfile={props.updateStatusProfile}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;