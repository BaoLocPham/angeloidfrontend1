// Import Libraries
import React from "react";
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
import './Setting.css';

const Setting = () => {
    return (
        <div className="row setting-container">

            {/* Left content */}
            <div className="setting-left">
                <SettingNav />
            </div>

            {/* Right content */}
            <div className="setting-right d-flex flex-row justify-content-center align-items-center">
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

                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Setting;
