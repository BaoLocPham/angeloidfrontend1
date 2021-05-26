import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./SettingNav.css";

const SettingNav = () => {
    const settingActiveStyle = {
        backgroundColor: "#131E2A"
    }

    const [settingActive, setSettingActive] = useState("profile");

    const handleSettingActive = (value) => {
        setSettingActive(value);
    }

    return (
        <nav className="navbar navbar-expand-lg setting-nav bg-dark-content d-flex flex-column justify-content-center px-3">
            <Link to="/setting/profile"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("profile")}
                style={ settingActive === "profile" ? settingActiveStyle : {} }
            >
                <i className="fa fa-user fa-lg p-2"></i>
                <span className="p-2">Profile</span>
            </Link>
            <Link to="/setting/change"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("password")}
                style={ settingActive === "password" ? settingActiveStyle : {} }
            >
                <i className="fa fa-shield fa-lg p-2"></i>
                <span className="p-2">Password</span>
            </Link>
            <Link to="/setting/favorite"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("favorite")}
                style={ settingActive === "favorite" ? settingActiveStyle : {} }
            >
                <i className="fa fa-heart fa-lg p-2"></i>
                <span className="p-2">Favorite</span>
            </Link>
        </nav>
    );
};

export default SettingNav;
