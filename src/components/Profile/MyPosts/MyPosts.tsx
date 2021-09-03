import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../redux/profile-reducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";


type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void;
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postsElements =
        props.posts.map((p, i) => <Post key={i} message={p.postMessage} likesCount={p.likesCount}/>);

    const onSubmit = (formData: AddPostsMessagePropsType) => {
        props.addPost(formData.newMessagePostBody)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMessageFormRedux onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type AddPostsMessagePropsType = {
    newMessagePostBody: string
}

export const AddPostsMessage: React.FC<InjectedFormProps<AddPostsMessagePropsType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="newMessagePostBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<AddPostsMessagePropsType>({form: "myPostAddPostsMessage"})
(AddPostsMessage)

export default MyPosts;