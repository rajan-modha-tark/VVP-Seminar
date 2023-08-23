import React, { useState } from 'react';
import APP_CONSTANTS from '../../app-constants';
import UserName from '../user-name';
import "./style.css";

const UsersList = () => {
    const users = APP_CONSTANTS.USERS_LIST;
    const [isVisibleUsers, setIsVisibleUsers] = useState(true);
    const handleToggleButtonClick = (event, data) => {
        setIsVisibleUsers(!isVisibleUsers);
    }
    return (
        <div className="users-wrapper">
            <h3><span className="user-count">{users.length} users</span> visited our website.</h3>

            <div className="visiblity-link" onClick={handleToggleButtonClick}>
                {isVisibleUsers ? "Hide All" : "Show All"}
            </div>
            {isVisibleUsers && <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index}>
                            <UserName key={index} user={user} />
                        </li>
                    );
                })}
            </ul>}
        </div>
    );
}

export default UsersList;