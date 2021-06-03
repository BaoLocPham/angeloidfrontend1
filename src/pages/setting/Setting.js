// Import Libraries
import React, { useState } from "react";
import {
    Switch,
    Route
} from 'react-router-dom';
// Import Components
import SettingNav from './SettingNav';
import Profile from './Profile';
import PasswordSetting from './PasswordSetting';
import FavoriteList from './FavoriteList';
import Error from '../error/Error';
import AnimeForm from './AnimeForm';
import './Setting.css';

const Setting = () => {
    const [showLeftNav, setShowLeftNav] = useState(false);

    const handleToggleLeftNavButton = () => setShowLeftNav(!showLeftNav);

    return (
        <div className="row setting-container">

            {/* Left content */}
            <div className="setting-left">
                <SettingNav showLeftNav={showLeftNav} />

                {/* Button to show Setting Left Nav on Mobile */}
                <button
                    className={showLeftNav ? "btn btn-left-nav left-nav-active text-white p-0" : "btn btn-left-nav text-white p-0"}
                    style={{ backgroundColor: "#76899C" }}
                    onClick={handleToggleLeftNavButton}
                ><b>{showLeftNav ? "<<" : ">>"}</b></button>
            </div>

            {/* Right content */}
            <div className="setting-right d-flex flex-row">
                {/* Choose pages to render */}
                <Switch>
                    <Route path="/setting/profile">
                        <Profile />
                    </Route>

                    <Route path="/setting/change">
                        <PasswordSetting />
                    </Route>

                    <Route path="/setting/favorite">
                        <FavoriteList />
                    </Route>

                    <Route path="/setting/anime/form">
                        <AnimeForm />
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
