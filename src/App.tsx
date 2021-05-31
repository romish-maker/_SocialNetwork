import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {DialogsType, MessagesType, PostsType} from "./redux/state";
import {Route} from 'react-router-dom';


type PropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}


function App(props: PropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() =>
                           <Profile posts={props.posts}
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}
                                    newPostText={props.newPostText}
                           />
                       }/>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs
                            dialogs={props.dialogs}
                            messages={props.messages}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default App;
