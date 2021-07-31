import React from 'react';
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


export class HeaderContainer extends React.Component<TProps> {
    componentDidMount() {
      this.props.getAuthUserData()
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
export const connector = connect(mapStateToProps, {getAuthUserData});

export type TProps = ConnectedProps<typeof connector>

export default connector(HeaderContainer)