import React, { useState } from "react";

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./Nav.css"

const Nav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const navStyle = {
        backgroundColor: "rgba(25, 41, 59, 0.3)",
        position: "fixed",
        width: "100%",
        zIndex: "69",
        top: 0
    }

    const mobileNavStyle = {
        backgroundColor: "rgba(25, 41, 59, 0.3)",
        position: "fixed",
        width: "100%",
        zIndex: "68"
    }

    const toggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-between p-3 p-md-2" style={navStyle}>
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
                <ul className="navbar-nav d-flex flex-row justify-content-end justify-content-md-center col-3 mx-0 mx-md-5">
                    <li className="nav-item d-none d-md-inline-block me-2">
                        <Link to="/account/signup" className="shadow-sm text-center btn" style={{backgroundColor: "#FFF", color:"#14A38B"}}>Sign Up</Link>
                    </li>
                    <li className="nav-item px-3 d-none d-md-inline-block">
                        <Link to="/account/login" className="btn shadow-sm text-center" style={{backgroundColor: "#14A38B", color:"#FFF"}}>Login</Link>
                    </li>
                    <li className="nav-item d-md-none">
                        <div onClick={toggleMobileNav} className={ showMobileNav ? "icon active" : "icon" }>
                            <div className="hamburger-top"></div>
                            <div className="hamburger"></div>
                            <div className="hamburger-bottom"></div>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className={showMobileNav ? "nav-mobile-show" : "nav-mobile-hide"} style={mobileNavStyle}>
                <div className="d-md-none py-4 px-5 d-flex flex-column">
                    <Link to="/search" className="btn shadow-sm my-2" style={{backgroundColor: "#FFF", color:"#14A38B"}}>Search</Link>
                    <Link to="/thread" className="btn shadow-sm my-2" style={{backgroundColor: "#14A38B", color:"#FFF"}}>Thread</Link>
                    <Link to="/account/signup" className="btn shadow-sm my-2" style={{backgroundColor: "#FFF", color:"#14A38B"}}>Sign up</Link>
                    <Link to="/account/login" className="btn shadow-sm my-2" style={{backgroundColor: "#14A38B", color:"#FFF"}}>Login</Link>
                </div>
            </div>
        </>
    );
};

export default Nav;
