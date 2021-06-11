import React, { useState } from 'react';
import ProfileEdit from './ProfileEdit';
import Avatar from './Avatar';

const Profile = ({ user, setUser, currentUser, setCurrentUser, base64Img, setBase64Img }) => {

    return (
        <div className="row d-flex flex-column-reverse flex-md-row w-100 justify-content-center align-items-center">
            <div className="col-12 col-md-8 ps-5 py-5">
                <ProfileEdit currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
            <div className="col-12 col-md-4 py-5">
                <Avatar currentUser={currentUser} base64Img={base64Img} setBase64Img={setBase64Img} user={user} setUser={setUser} />
            </div>
        </div>
    );
}

export default Profile;