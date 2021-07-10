import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {setAuthUserDate} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<TProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDate(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props}
                       login={this.props.login}
                       isAuth={this.props.isAuth}
        />
    }

}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
const connector = connect(mapStateToProps, {setAuthUserDate});

export type TProps = ConnectedProps<typeof connector>

export default connector(HeaderContainer)