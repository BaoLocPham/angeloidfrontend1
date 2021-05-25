import React from 'react';
import ProfileEdit from './ProfileEdit';
import Avatar from './Avatar';

const Profile = () => {
    return (
        <div className="d-flex flex-column-reverse flex-md-row">
            <ProfileEdit />
            <Avatar />
        </div>
    );
}
 
export default Profile;