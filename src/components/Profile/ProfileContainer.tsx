import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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

type mapStateToPropsType = {
    profile: ProfileResponseType | null
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
