import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../redux/profile-reducer";


type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    UpdateNewPostText: (text: string) => void;
    addPost: () => void;
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postsElements =
        props.posts.map((p, i) => <Post key={i} message={p.postMessage} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
         if (newPostElement.current) {
             let text = newPostElement.current.value
             props.UpdateNewPostText(text)
         }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;