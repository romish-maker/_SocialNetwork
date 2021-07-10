import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
        debugger
        let userId = this.props.match.params.userId
        !userId && (userId = '2');
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
}

type PathParamsType = {
    userId: string
}
type mapStateToProps = {
    profile: any
}
type mapDispatchToProps = {
    setUserProfile: (profile: ProfileResponseType) => void
}
type OwnPropsType = mapStateToProps & mapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);

