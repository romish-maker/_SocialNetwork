import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {RootStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        dispatch={store.dispatch.bind(store)}
                        state={state}
                    />,
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
// custom connect function ==>
rerenderEntireThree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state)
})

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />,
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();