import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {RootStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    dispatch={store.dispatch.bind(store)}
                    posts={state.profilePage.posts}
                    dialogs={state.dialogPage.dialogs}
                    messages={state.dialogPage.messages}
                    newPostText={state.profilePage.newPostText}
                    newMessageBody={state.dialogPage.newMessageBody}
                />,
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireThree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();