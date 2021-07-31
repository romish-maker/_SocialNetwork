import React, {ChangeEvent, KeyboardEvent} from 'react';
import {RootStateType} from "../../../redux/redux-store";

export type ProfileStatusPropsType = {
    status: string | null
    updateStatusProfile: (status: string) => void
}

type LocalStateType = {
    editMode: boolean
    status: string | null
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.state.status && this.props.updateStatusProfile(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.deactivateEditMode()
        }
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: LocalStateType,) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        type="text"
                        value={this.state.status || ''}
                        onChange={this.onStatusChange}
                        onKeyPress={this.onPressEnter}
                        placeholder={'Что расскажете нового?'}
                    />
                </div>
                }
            </div>
        );
    }
}

