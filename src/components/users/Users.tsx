import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import avatar from './../../assets/img/images.png';

type UserPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

export class Users extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.image}
                                 src={u.photos.large ? u.photos.large : avatar} alt="users img"/>
                            </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
    }
}

