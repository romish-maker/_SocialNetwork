import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileResponseType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import github from '../../../assets/img/github.png';
import facebook from '../../../assets/img/facebook.png';
import instagram from '../../../assets/img/instagram.jpg';
import twitter from '../../../assets/img/twitter.jpg';
import vk from '../../../assets/img/vk.png';
import youtube from '../../../assets/img/youtube.png';
import website from '../../../assets/img/website.png';
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div>
                <img src={props.profile.photos.large
                    ? props.profile.photos.large
                    : undefined
                } alt="ava"/>
                <ProfileStatus status={"hello my name's romish"}/>
            </div>
            <div>
                <span>
                    В поиске работы:
                    {props.profile.lookingForAJob ? '✅ ': '❌' }
                </span>
                {
                    props.profile.lookingForAJobDescription && <span>{props.profile.lookingForAJobDescription}</span>
                    }
                <div className={s.contacts}>
                    {props.profile.contacts.github && <a href={props.profile.contacts.github}><img className={s.contactsIcon} src={github} alt="github"/></a>}
                    {props.profile.contacts.facebook &&
                    <a href={props.profile.contacts.facebook}><img className={s.contactsIcon} src={facebook} alt="facebook"/></a>}
                    {props.profile.contacts.instagram &&
                    <a href={props.profile.contacts.instagram}><img className={s.contactsIcon} src={instagram} alt="instagram"/></a>}
                    {props.profile.contacts.twitter &&
                    <a href={props.profile.contacts.twitter}><img className={s.contactsIcon} src={twitter} alt="twitter"/></a>}
                    {props.profile.contacts.vk && <a href={props.profile.contacts.vk}><img className={s.contactsIcon} src={vk} alt="twitter"/></a>}
                    {props.profile.contacts.youtube &&
                    <a href={props.profile.contacts.youtube}><img className={s.contactsIcon} src={youtube} alt="youtube"/></a>}
                    {props.profile.contacts.website &&
                    <a href={props.profile.contacts.website}><img className={s.contactsIcon} src={website} alt="website"/></a>}
                </div>
            </div>
        </div>
    )

}
export default ProfileInfo;