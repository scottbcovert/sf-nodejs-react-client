import React from 'react';
import User from './User';
import './UserList.css';

function UserList(props) {
    return (
        <div className="container">
            {props.users.map(u => <User key={u.Id} id={u.Id} firstname={u.FirstName} lastname={u.LastName} email={u.Email} profile={u.Profile}/>)}
        </div>
    )
}

export default UserList;