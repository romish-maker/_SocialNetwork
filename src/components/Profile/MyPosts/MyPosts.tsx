import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostActionType, PostsType, UpdateNewPostTextActionType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postsElements =
        props.posts.map((p, i) => <Post key={i} message={p.postMessage} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        if (newPostElement.current){
            let text = newPostElement.current.value
            // props.updateNewPostText(text)
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;