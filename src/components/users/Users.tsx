import React from "react";
import styles from "./users.module.css";
import avatar from "../../assets/img/images.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";


type UsersPropsType = {
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    followingProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {
                pages.map((p,i) => {
                    return <span key={i}
                        className={props.currentPage === p ? `${styles.selectedPage}` : `${styles.selected}`}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={styles.image}
                                 src={u.photos.large ? u.photos.large : avatar} alt="users img"/>
                            </NavLink>
                            </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.unFollow(u.id)
                                    props.toggleFollowingProgress(true, u.id)
                                    followAPI.unFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                }}>UnFollow</button>

                                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                    props.toggleFollowingProgress(true, u.id)
                                   followAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>

};

