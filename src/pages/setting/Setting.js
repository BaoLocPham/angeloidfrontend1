// Import Libraries
import React, { useState, useEffect } from "react";
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
// Import Components
import SettingNav from './SettingNav';
import Profile from './Profile';
import PasswordSetting from './PasswordSetting';
import FavoriteList from './FavoriteList';
import Error from '../error/Error';
import AnimeForm from './AnimeForm';
import AnimeManage from './AnimeManage';
import UserManage from './UserManage';
import './Setting.css';

const Setting = ({ user, setUser, isLogin }) => {
    const [showLeftNav, setShowLeftNav] = useState(false);

    const handleToggleLeftNavButton = () => setShowLeftNav(!showLeftNav);

    const [currentUser, setCurrentUser] = useState({});
    const [base64Img, setBase64Img] = useState('');

    useEffect(
        () => {
            window.scrollTo(0, 0);
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/${user.userId}`)
                .then(res => res.json())
                .then(res => {
                    setCurrentUser(res);
                    setBase64Img('data:image/*;base64,' + res.avatar);
                });
        }, []
    );

    if (!isLogin) {
        return <Redirect to="/error" />
    }

    return (
        <div className="row setting-container">

            {/* Left content */}
            <div className="setting-left">
                <SettingNav showLeftNav={showLeftNav} user={user} />

                {/* Button to show Setting Left Nav on Mobile */}
                <button
                    className={showLeftNav ? "btn btn-left-nav left-nav-active text-white p-0" : "btn btn-left-nav text-white p-0"}
                    style={{ backgroundColor: "#76899C" }}
                    onClick={handleToggleLeftNavButton}
                ><b>{showLeftNav ? "<<" : ">>"}</b></button>
            </div>

            {/* Right content */}
            <div className="setting-right d-flex flex-row justify-content-center align-items-center">
                {/* Choose pages to render */}
                <Switch>
                    <Route path="/setting/profile">
                        <Profile
                            user={user}
                            setUser={setUser}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            base64Img={base64Img}
                            setBase64Img={setBase64Img}
                        />
                    </Route>

                    <Route path="/setting/change">
                        <PasswordSetting
                            user={user}
                        />
                    </Route>

                    <Route path="/setting/favorite">
                        <FavoriteList />
                    </Route>

                    { user.isAdmin ?
                        <>
                            <Route path="/setting/anime" exact>
                                <AnimeManage />
                            </Route>

                            <Route path="/setting/anime/form" exact>
                                <AnimeForm />
                            </Route>

                            <Route path="/setting/anime/form/*">
                                <AnimeForm />
                            </Route>
                        </>
                        : ""
                    }

                    <Route path="/setting/user">
                        <UserManage />
                    </Route>

                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Setting;
