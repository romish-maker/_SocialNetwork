import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {
    DialogsType,
    MessagesType,
} from "./redux/store";
import {Route} from 'react-router-dom';
import {PostsType} from "./redux/profile-reducer";


type PropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newPostText: string
    dispatch: (action: any) => void
    newMessageBody: string
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
                                    dispatch={props.dispatch}
                                    newPostText={props.newPostText}
                           />
                       }/>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs
                            dialogs={props.dialogs}
                            messages={props.messages}
                            dispatch={props.dispatch}
                            newMessageBody={props.newMessageBody}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default App;
