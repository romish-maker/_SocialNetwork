import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/users/UsersContainer";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() =>
                           <Profile/>
                       }/>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <DialogsContainer/>
                    }
                /><Route
                    path={'/users'}
                    render={() =>
                        <UserContainer />
                    }
                />
            </div>
        </div>
    );
}

export default App;
