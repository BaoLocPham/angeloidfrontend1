//dependencies
import React, { useEffect, useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import FacebookS from './Login/FacebookS';
import md5 from 'md5';

// for user response when input worng format or wrong username password. credit Bắp.
import CustomedPopover from '../components/Popover';
import CustomedModal from '../components/Modal';

//local dependencies
import './Login.css'

// Only contains alphanumeric characters, underscore and dot.
// Underscore and dot can't be at the end or start of a username (e.g _username / username_ / .username / username.).
// Underscore and dot can't be next to each other (e.g user_.name).
// Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).
// Number of characters must be between 8 to 20
const REGEX_USERNAME = new RegExp("^(?=[a-zA-Z0-9._]{5,32}$)(?!.*[_.]{2})[^_.].*[^_.]$");
const REGEX_PASSWORD = new RegExp("^[a-zA-Z0-9!@#$%^&*]{5,32}$");
const USERNAME_FORMAT = `Only contains alphanumeric characters, underscore and dot`;
const PASSWORD_FORMAT = `Password length is between 5 to 32 and can only contains lowercase/uppercase alphabet characters, number and some special characters: !@#$%^&*`;

const Login = ({ setUser, isLogin, setCookie, BackGround, Author, AuthorLink }) => {
    // Form States
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });
    const handleLoginFormChange = (obj) => {
        setLoginForm(Object.assign({}, loginForm, obj))
    }

    // Popover States
    const [loginPopover, setLoginPopover] = useState({
        username: false,
        password: false,
        isWrong: false
    });
    const toggleLoginPopover = (obj) => {
        setLoginPopover(Object.assign({}, loginPopover, obj));
    }

    // Modal state
    const [loginModalShow, setLoginModalShow] = useState(false);
    const toggleLoginModal = () => {
        setLoginModalShow(!loginModalShow);
    }

    // Ref to disable btn when user submit data
    let loginSubmitBtn = useRef();

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        if (!REGEX_USERNAME.test(loginForm.username)) {
            toggleLoginPopover({ username: true });// if username input is wrong format->show popup
            return;
        }
        if (!REGEX_PASSWORD.test(loginForm.password)) {
            toggleLoginPopover({ password: true });// if password input is wrong format->show popup
            return;
        }
        // create object for send to api
        const loginInput =
        {
            username: loginForm.username,
            // md5 encryption for password
            password: md5(loginForm.password)
        }

        // Prevent too many request to the server
        loginSubmitBtn.current.setAttribute("disabled", "disabled");

        fetch(
            `${process.env.REACT_APP_BACKEND_URL}api/loginout`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginInput)
            }
        )
            .then(res => res.json())
            .then(res => {
                if (res.status != 404) {// if login success
                    let expires = new Date()
                    expires.setTime(expires.getTime() + (1000000000));
                    setUser(res);
                    setCookie("user", { userId: res.userId, isAdmin: res.isAdmin }, { path: "/", expires: expires });
                } else {// feedback to user username or password is wrong
                    toggleLoginModal();
                }
            });
        // Enable submit btn
        loginSubmitBtn.current.removeAttribute("disabled");
    }

    if (isLogin) {// if login success->homepage
        return (
            <Redirect to='/' />
        );
    }

    return (
        <div style={BackGround} className="account-wallpaper d-flex flex-column justify-content-center">
            <div className="container div-with-bg" >
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Login</b>
                        <div className="p-2">
                            <FacebookS setUser={setUser} isLogin={isLogin} setCookie={setCookie}
                            />
                        </div>
                        <br />
                        <h5>OR</h5>
                        <form >
                            <CustomedPopover
                                show={loginPopover.username}
                                popoverTitle="Invalid username Format"
                                popoverContent={USERNAME_FORMAT}
                            >
                                <label for="username"></label>
                            </CustomedPopover>
                            <input type="text" className="input-username"
                                onChange={(event) => handleLoginFormChange({ username: event.target.value })}
                                onClick={() => toggleLoginPopover({ username: false })}
                                id="username" name="username" placeholder="Enter Username" ></input>
                            <br />
                            <br />
                            <CustomedPopover
                                show={loginPopover.password}
                                popoverTitle="Invalid password Format"
                                popoverContent={PASSWORD_FORMAT}
                            >
                                <label for="password"></label>
                            </CustomedPopover>
                            <input type="password" className="input-password"
                                onChange={(event) => handleLoginFormChange({ password: event.target.value })}
                                onClick={() => toggleLoginPopover({ password: false })}
                                id="password" name="password" placeholder="Enter Password"></input>
                            <br />
                            <br />
                            <button type="submit" ref={loginSubmitBtn}
                                onClick={handleSubmitLogin} className="btn btn-login" >Login</button>
                            <br />
                            <br />
                            <h5 className="the-or" >OR</h5>
                        </form>
                        <br />
                        <Link className="btn btn-login" to="/account/signup">Register</Link>
                        <br />
                        <br />
                        <Link className="btn btn-forgot" to="/account/forgot">Forgot Password ?</Link>
                    </div>
                </div>
            </div>
            <CustomedModal
                modalHeader="Attention"
                modalBody="Your username or password is incorrect!!!"
                handleToggle={toggleLoginModal}
                show={loginModalShow}
            />

            {/* Reference to author's background image */}
            <div style={{
                position: "absolute",
                left: "2%",
                bottom: "3%"
            }}>
                <span className="fw-bolder" style={{ color: "#76899C" }}>Artwork by <a target="_blank" href={AuthorLink} style={{ textDecoration: "none" }}>{Author}</a></span>
            </div>
        </div>
    );
}

export default Login;