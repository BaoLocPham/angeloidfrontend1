// Import Libraries
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
// Import Pages
import SettingNav from './SettingNav';
import Profile from './Profile';
import PasswordSetting from './PasswordSetting';
import FavoriteList from './FavoriteList';
import Error from '../error/Error';
import './Setting.css';

const Setting = () => {
    return (
        <div className="row">

            {/* Left content */}
            <div className="col-12 col-md-2 setting-left">
                <SettingNav />
            </div>

            {/* Right content */}
            <div className="col-12 col-md-10 setting-right">
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
