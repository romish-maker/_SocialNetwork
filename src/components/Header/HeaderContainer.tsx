import React from 'react';
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {setAuthUserDate} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component<TProps> {
    componentDidMount() {
       authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data
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