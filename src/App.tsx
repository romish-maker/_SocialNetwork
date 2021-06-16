import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {RootStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    state: RootStateType
    dispatch: (action: any) => void
}

function App(props: PropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() =>
                           <Profile state={props.state}
                                    dispatch={props.dispatch}
                           />
                       }/>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <DialogsContainer
                            state={props.state}
                            dispatch={props.dispatch}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default App;
