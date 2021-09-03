import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../redux/profile-reducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";


type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    UpdateNewPostText: (text: string) => void;
    addPost: () => void;
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postsElements =
        props.posts.map((p, i) => <Post key={i} message={p.postMessage} likesCount={p.likesCount}/>);

    // const newPostElement = React.createRef<HTMLTextAreaElement>()
    //
    // let onAddPost = () => {
    //     props.addPost()
    // }
    // let onPostChange = () => {
    //     if (newPostElement.current) {
    //         let text = newPostElement.current.value
    //         props.UpdateNewPostText(text)
    //     }
    // }
    const onSubmit = (formData: any) => {
        console.log(formData);
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
export const AddPostsMessage: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "myPostAddPostsMessage"})
(AddPostsMessage)

export default MyPosts;