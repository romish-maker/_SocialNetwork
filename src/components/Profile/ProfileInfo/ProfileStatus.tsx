import React from 'react';

export type ProfileStatusPropsType = {
    status: any
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    && <div>
                        <span  onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                      </div>
                }
                { this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                    </div>
                }
                </div>
        );
    }
}

