import React from 'react';
import {
    AddPostActionCreator,
    UpdateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";


type PropsForContainerType = {
    state: RootStateType
    dispatch: (action: any) => void
}

const MyPostsContainer: React.FC<PropsForContainerType> = (props) => {

    let addPost = () => {
        props.dispatch(AddPostActionCreator());
    }
    let onPostChange = (text: string) => {
        let action = props.dispatch(UpdateNewPostTextActionCreator(text))
        props.dispatch(action)
    }
    return (
        <MyPosts
            UpdateNewPostText={onPostChange}
            addPost={addPost}
            posts={props.state.profilePage.posts}
            newPostText={props.state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;
// передача стора и его типизация,
// addPost and UpdateNewPostText передавать аж до верхушки к index.tsx
// Димыч вызывает в Profile.tsx контейнерную компоненту
// и передает туда только store.tsx которая сидит в пропсах, а я не передавал, что делать?
// В Profile компонента Dialogs принимает весь стейт только
