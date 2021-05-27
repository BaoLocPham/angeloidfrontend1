import React, { useState } from "react";

import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = ({ isLogin, handleLogout }) => {
    // Show mobile nav when user click hamburger
    const [showMobileNav, setShowMobileNav] = useState(false);

    const navStyle = {
        backgroundColor: "rgba(25, 41, 59, 0.3)",
        position: "fixed",
        width: "100vw",
        zIndex: "69",
        top: 0
    }

    const mobileNavStyle = {
        backgroundColor: "rgba(25, 41, 59, 0.3)",
        position: "fixed",
        width: "100vw",
        zIndex: "68"
    }

    const handleToggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-between p-3 p-md-2" style={navStyle}>

                {/* The left of NavBar */}
                <ul className="navbar-nav d-flex flex-row justify-content-between col-5 px-2 px-md-5 mx-md-5">
                    <li className="nav-item">
                        <Link to="/" className="nav-white-text">Home</Link>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <Link to="/search" className="nav-white-text">Search</Link>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <Link to="/thread" className="nav-white-text">Thread</Link>
                    </li>
                </ul>

                {/* The right of NavBar */}
                {/* On PC: */}
                <ul className="navbar-nav d-flex flex-row justify-content-end justify-content-md-center col-3 mx-0 ms-md-5 me-md-1">
                    {/* If Logged in, show avatar & logout button */}
                    {isLogin ? <>
                        <li className="nav-item d-none d-md-inline-block me-2">
                            <Link to="/setting/profile" className="shadow-sm">
                                <img className="img-fluid rounded-circle img-thumbnail" style={{ width: "40px", height: "40px" }} src="https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-Anime-c%C3%B4-b%C3%A9-%C4%91eo-k%C3%ADnh-cute.jpg" alt="Avatar" />
                            </Link>
                        </li>
                        <li className="nav-item px-3 d-none d-md-inline-block">
                            <Link onClick={handleLogout} to="/" className="btn shadow-sm text-center" style={{ backgroundColor: "#14A38B", color: "#FFF" }}>Logout</Link>
                        </li>
                    </> : <>
                        {/* If not Logged in, show sign up & login button */}
                        <li className="nav-item d-none d-md-inline-block me-2">
                            <Link to="/account/signup" className="shadow-sm text-center btn" style={{ backgroundColor: "#FFF", color: "#14A38B" }}>Sign Up</Link>
                        </li>
                        <li className="nav-item px-3 d-none d-md-inline-block">
                            <Link to="/account/login" className="btn shadow-sm text-center" style={{ backgroundColor: "#14A38B", color: "#FFF" }}>Login</Link>
                        </li>
                    </>
                    }
                    {/* On Mobile: display Hamburger */}
                    <li className="nav-item d-md-none">
                        <div onClick={handleToggleMobileNav} className={showMobileNav ? "icon hamburger-active" : "icon"}>
                            <div className="hamburger-top"></div>
                            <div className="hamburger"></div>
                            <div className="hamburger-bottom"></div>
                        </div>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav, only shown when toggle Hamburger */}
            <div className={showMobileNav ? "nav-mobile show" : "nav-mobile"} style={mobileNavStyle}>
                <div className="d-md-none py-4 px-5 d-flex flex-column">
                    <Link to="/search" className="btn shadow-sm my-2" style={{ backgroundColor: "#FFF", color: "#14A38B" }}>Search</Link>
                    <Link to="/thread" className="btn shadow-sm my-2" style={{ backgroundColor: "#14A38B", color: "#FFF" }}>Thread</Link>
                    {/* If Logged in, show Profile Setting & Logout button */}
                    {isLogin ? <>
                        <Link to="/setting/profile" className="btn shadow-sm my-2" style={{ backgroundColor: "#FFF", color: "#14A38B" }}>Account Setting</Link>
                        <Link onClick={handleLogout} to="/" className="btn shadow-sm my-2" style={{ backgroundColor: "#14A38B", color: "#FFF" }}>Logout</Link>
                    </> : <>
                        {/* If not Logged in, show Sign up & Log in button */}
                        <Link to="/account/signup" className="btn shadow-sm my-2" style={{ backgroundColor: "#FFF", color: "#14A38B" }}>Sign up</Link>
                        <Link to="/account/login" className="btn shadow-sm my-2" style={{ backgroundColor: "#14A38B", color: "#FFF" }}>Login</Link>
                    </>
                    }
                </div>
            </div>
        </>
    );
};

export default Nav;
