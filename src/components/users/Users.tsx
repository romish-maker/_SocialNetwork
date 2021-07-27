import React from "react";
import styles from "./users.module.css";
import avatar from "../../assets/img/images.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID:number) => void
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
                                ? <button disabled={props.followingProgress
                                    .some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id) }
                                    }>UnFollow</button>

                                : <button disabled={props.followingProgress
                                    .some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)}
                                    }>Follow</button>}
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
    </div>

};

