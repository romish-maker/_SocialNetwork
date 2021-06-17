import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styles from './users.module.css'

type PropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers?: (users: UsersType[]) => void
}
export const Users = (props: PropsType) => {
    if (props.users.length === 0) {
        if (props.setUsers) {
            props.setUsers([
                    {
                        id: 1,
                        photoURL: 'https://bipbap.ru/wp-content/uploads/2017/10/Prikolnye-i-smeshnye-kartinki-na-avatarku-skachat-besplatno-13.jpg',
                        followed: false,
                        fullName: 'Romish',
                        status: 'I am a boss',
                        location: {
                            city: 'Almaty',
                            country: 'Kazakhstan'
                        }
                    },
                    {
                        id: 2,
                        photoURL: 'https://bipbap.ru/wp-content/uploads/2017/10/Prikolnye-i-smeshnye-kartinki-na-avatarku-skachat-besplatno-13.jpg',
                        followed: true,
                        fullName: 'Behruz',
                        status: 'I am alone',
                        location: {
                            city: 'Moscow',
                            country: 'Russia'
                        }
                    },
                    {
                        id: 3,
                        photoURL: 'https://bipbap.ru/wp-content/uploads/2017/10/Prikolnye-i-smeshnye-kartinki-na-avatarku-skachat-besplatno-13.jpg',
                        followed: false,
                        fullName: 'Ramil',
                        status: 'Bitcoin',
                        location: {city: 'Dushanbe', country: 'Tajikistan'}
                    }

                ]
            )
        }
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.image} src={u.photoURL}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

