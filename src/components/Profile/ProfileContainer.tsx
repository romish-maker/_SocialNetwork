import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfile, getUserProfile, updateStatusProfile} from "../../redux/profile-reducer";
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
        let userId = this.props.match.params.userId
        !userId && (userId = '17740');
        this.props.getUserProfile(Number(userId));
        this.props.getStatusProfile(Number(userId));
    }


    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatusProfile={this.props.updateStatusProfile}
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
    status: string
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatusProfile: (userId: number) => void
    updateStatusProfile: (status: string) => void
}
type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
