import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, RootStateType, subcribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={updateNewPostText}
                />,
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireThree()
subcribe(rerenderEntireThree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
