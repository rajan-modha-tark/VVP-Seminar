import React from 'react';

function getUserName(user) {
    if (user) {
        return user.firstName + " " + user.lastName;
    }
    return "Stranger";
}

const UserName = ({ user, customClass }) => {
    return (
        <div className={customClass}>{getUserName(user)}</div>
    );
}

export default UserName;