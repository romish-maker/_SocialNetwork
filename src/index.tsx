import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    dispatch={store.dispatch.bind(store)}
                    posts={store._state.profilePage.posts}
                    dialogs={store._state.dialogsPage.dialogs}
                    messages={store._state.dialogsPage.messages}
                    newPostText={store._state.profilePage.newPostText}
                    newMessageBody={store._state.dialogsPage.newMessageBody}
                />,
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireThree()
store.subscriber(rerenderEntireThree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();