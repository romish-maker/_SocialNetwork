import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {compose} from "redux";

type AppPropsType = {
    isFetching: boolean
}
function App(props:AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            {props.isFetching ? <Preloader/> : (
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           render={() =>
                               <ProfileContainer  />
                           }/>
                    <Route
                        path={'/dialogs'}
                        render={() =>
                            <DialogsContainer/>
                        }
                    />
                    <Route
                        path={'/users'}
                        render={() =>
                            <UsersContainer />
                        }
                    />
                    <Route
                        path={'/login'}
                        render={() =>
                            <Login />
                        }
                    />
                </div>
            )}
        </div>
    );
}
const MapStateToPropsType = (state: RootStateType) => ({
    isFetching: state.auth.isFetching
})
export default compose<React.ComponentType>(
    connect(MapStateToPropsType)
)(App)
