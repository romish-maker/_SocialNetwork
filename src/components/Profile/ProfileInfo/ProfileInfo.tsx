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
            </div>
            <div>
                <span>
                    В поиске работы:
                    {props.profile.lookingForAJob ? '✅ ': '❌' }
                </span>
                {
                    props.profile.lookingForAJobDescription && <span>{props.profile.lookingForAJobDescription}</span>
                    }
                <div>
                    {props.profile.contacts.github && <a href={props.profile.contacts.github}><img src={github} alt="github"/></a>}
                    {props.profile.contacts.facebook &&
                    <a href={props.profile.contacts.facebook}><img src={facebook} alt="facebook"/></a>}
                    {props.profile.contacts.instagram &&
                    <a href={props.profile.contacts.instagram}><img src={instagram} alt="instagram"/></a>}
                    {props.profile.contacts.twitter &&
                    <a href={props.profile.contacts.twitter}><img src={twitter} alt="twitter"/></a>}
                    {props.profile.contacts.vk && <a href={props.profile.contacts.vk}><img src={vk} alt="twitter"/></a>}
                    {props.profile.contacts.youtube &&
                    <a href={props.profile.contacts.youtube}><img src={youtube} alt="youtube"/></a>}
                    {props.profile.contacts.website &&
                    <a href={props.profile.contacts.website}><img src={website} alt="website"/></a>}
                </div>
            </div>
        </div>
    )

}
export default ProfileInfo;
//
//
//
// <div>{props.profile.contacts?.github && <a href={props.profile.contacts.github}><img src={github} alt=""/></a>}</div>
// <div>{props.profile.contacts?.facebook && <a href={props.profile.contacts.facebook}><img src={facebook} alt=""/></a>}</div>
// <div>{props.profile.contacts?.instagram && <a href={props.profile.contacts.instagram}><img src={instagram} alt=""/></a>}</div>
// <div>{props.profile.contacts?.twitter && <a href={props.profile.contacts.twitter}><img src={twitter} alt=""/></a>}</div>
// <div>{props.profile.contacts?.vk && <a href={props.profile.contacts.vk}><img src={vk} alt=""/></a>}</div>
// <div>{props.profile.contacts?.youtube && <a href={props.profile.contacts.youtube}><img src={youtube} alt=""/></a>}</div>
// <div>{props.profile.contacts?.website && <a href={props.profile.contacts.website}><img src={website} alt=""/></a>}</div>