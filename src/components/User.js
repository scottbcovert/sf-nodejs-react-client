import React, { Component } from 'react';
import './User.css';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            firstname: props.firstname || '',
            lastname: props.lastname || '',
            email: props.email,
            profileName: props.profile?.Name
        };
    }

    isAdmin = () => {
        return this.state.profileName === 'System Administrator' ? 'Sys Admin' : 'Not Sys Admin';
    }

    render() {
        return (
            <div className="user">
                <div>{this.state.firstname + ' ' + this.state.lastname}</div>
                <div>{this.isAdmin()}</div>
            </div>
        )
    }
}

export default User;