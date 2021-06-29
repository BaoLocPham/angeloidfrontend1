// Import Libraries
import React, { useState, useEffect } from "react";
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
// Import Components
import Error from '../error/Error';
import AnimeForm from './AnimeForm';
import AnimeManage from './AnimeManage';
import UserManage from './UserManage';
import ThreadManage from './ThreadManage';
import Dashboard from "./Dashboard";
import AdminNav from "./AdminNav";

const Admin = ({ user, isLogin }) => {
    const [showLeftNav, setShowLeftNav] = useState(false);
    const handleToggleLeftNavButton = () => setShowLeftNav(!showLeftNav);

    useEffect(
        () => {
            window.scrollTo(0, 0);
        }, []
    );

    if (!isLogin) {
        return <Redirect to="/error" />
    }

    return (
        <div className="row setting-container">

            {/* Left content */}
            <div className="setting-left">
                <AdminNav showLeftNav={showLeftNav} user={user} />

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
                    {user.isAdmin ?
                        <>
                            <Route path="/admin/dashboard">
                                <Dashboard />
                            </Route>
                            
                            <Route path="/admin/anime" exact>
                                <AnimeManage />
                            </Route>

                            <Route path="/admin/anime/form" exact>
                                <AnimeForm />
                            </Route>

                            <Route path="/admin/anime/form/:animeId">
                                <AnimeForm />
                            </Route>
                            
                            <Route path="/admin/user">
                                <UserManage />
                            </Route>

                            <Route path="/admin/thread">
                                <ThreadManage />
                            </Route>
                        </>
                        : ""
                    }

                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Admin;