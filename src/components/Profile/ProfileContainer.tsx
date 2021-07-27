import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type ProfileResponseType = {
    userId: number
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | undefined
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId
        !userId && (userId = '2');
        this.props.getUserProfile(Number(userId))
    }


    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </>
        )
    };
}

type PathParamsType = {
    userId: string
}

type mapStateToProps = {
    profile: ProfileResponseType | null
}
type mapDispatchToProps = {
    getUserProfile: (userId: number) => void
}
type OwnPropsType = mapStateToProps & mapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: RootStateType): mapStateToProps => ({
    profile: state.profilePage.profile,
})

export default withRouter(
    withAuthRedirect(
        connect<mapStateToProps, mapDispatchToProps, {}, RootStateType>(
            mapStateToProps, {getUserProfile}
        )
        (ProfileContainer)
    ));

