import React, { useState } from 'react';
import ProfileEdit from './ProfileEdit';
import Avatar from './Avatar';

const Profile = ({ user }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [base64Img, setBase64Img] = useState('');

    useState(
        () => {
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/${user.userId}`)
            .then(res => res.json())
            .then(res => {
                setCurrentUser(res);
                setBase64Img('data:image/*;base64,' + res.avatar);
            });
        }, []
    );

    return (
        <div className="row d-flex flex-column-reverse flex-md-row w-100 justify-content-center align-items-center">
            <div className="col-12 col-md-8 ps-5 py-5">
                <ProfileEdit currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
            <div className="col-12 col-md-4 py-5">
                <Avatar currentUser={currentUser} base64Img={base64Img} setBase64Img={setBase64Img} />
            </div>
        </div>
    );
}

export default Profile;