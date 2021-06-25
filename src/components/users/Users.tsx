import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import avatar from './../../assets/img/images.png';

type PropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}
export const Users = (props: PropsType) => {
    function getUsers() {
        if (props.users.length === 0) {
            console.log('props.setUsers')
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.image}
                                 src={u.photos.large ? u.photos.large : avatar}/>
                            </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
                            <div>{"u.location.cisty"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default React.memo(Users)

