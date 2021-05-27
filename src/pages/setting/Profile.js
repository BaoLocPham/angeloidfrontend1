import React from 'react';
import ProfileEdit from './ProfileEdit';
import Avatar from './Avatar';

const Profile = () => {
    return (
        <div className="row d-flex flex-column-reverse flex-md-row w-100 justify-content-center align-items-center">
            <div className="col-8 p-5">
                <ProfileEdit />
            </div>
            <div className="col-4 py-5">
                <Avatar />
            </div>
        </div>
    );
}

export default Profile;