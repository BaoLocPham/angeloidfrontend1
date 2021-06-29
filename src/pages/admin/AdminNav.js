import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./AdminNav.css";

const AdminNav = ({ showLeftNav, user }) => {
    const settingActiveStyle = {
        backgroundColor: "#131E2A",
    };

    const [settingActive, setSettingActive] = useState("profile");

    const handleSettingActive = (value) => {
        setSettingActive(value);
    };

    var leftNavClassName =
        "navbar navbar-expand-lg setting-nav bg-dark-content d-flex flex-column justify-content-center px-3";
    if (showLeftNav) leftNavClassName += " left-nav-active";

    return (
        <nav className={leftNavClassName}>
            {/* Thread Management */}
            <Link
                to="/admin/dashboard"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("dashboard")}
                style={
                    settingActive === "dashboard" ? settingActiveStyle : {}
                }
            >
                {/* <i className="fa fa-folder-open fa-lg p-2"></i> */}
                <i className="fa fa-desktop fa-lg p-2" aria-hidden="true"></i>
                <span className="p-2">Dashboard</span>
            </Link>
            
            {/* Thread Anime */}
            <Link
                to="/admin/anime"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("animetable")}
                style={settingActive === "animetable" ? settingActiveStyle : {}}
            >
                <i className="fa fa-folder-open fa-lg p-2"></i>
                <span className="p-2">Anime</span>
            </Link>

            {/* Thread User */}
            <Link
                to="/admin/user"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("usertable")}
                style={settingActive === "usertable" ? settingActiveStyle : {}}
            >
                <i className="fa fa-users fa-lg p-2"></i>
                <span className="p-2">User</span>
            </Link>

            {/* Thread Management */}
            <Link
                to="/admin/thread"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("threadtable")}
                style={
                    settingActive === "threadtable" ? settingActiveStyle : {}
                }
            >
                {/* <i className="fa fa-folder-open fa-lg p-2"></i> */}
                <i className="fa fa-file-text fa-lg p-2" aria-hidden="true"></i>
                <span className="p-2">Thread</span>
            </Link>
        </nav>
    );
};

export default AdminNav;
