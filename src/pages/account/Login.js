//dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookR from './Login/FacebookR';

//local dependencies
import './Login.css'

import { Redirect } from 'react-router-dom';

import md5 from 'md5';

const Login = ({ setUser, isLogin }) => {
    // States for input data
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // States for response error
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isWrong, setIsWrong] = useState(false);


    // Only contains alphanumeric characters, underscore and dot.
    // Underscore and dot can't be at the end or start of a username (e.g _username / username_ / .username / username.).
    // Underscore and dot can't be next to each other (e.g user_.name).
    // Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).
    // Number of characters must be between 8 to 20
    const regex = new RegExp("^(?=[a-zA-Z0-9._]{5,32}$)(?!.*[_.]{2})[^_.].*[^_.]$");

    const handleChange = (event) => {
        var input = event.target.value;
        var inputName = event.target.name;

        if (inputName == "username") {// check if username input is changing
            setUsernameError(regex.test(input));
            setUsername(input);
        } else {// password input is changing
            setPasswordError(regex.test(input));
            setPassword(input);
        }
    }

    const submitLogin = () => {
        if (usernameError && passwordError) {// if username and password is valid
            // create object for send to api
            const loginInput =
            {
                username: username,
                // md5 encryption for password
                password: md5(password)
            }
            console.log(loginInput);
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
                        setUser(res);
                    } else {// feedback to user username or password is wrong
                        setIsWrong(true);
                    }
                });
        }
    }
    if (isLogin) {// if login success->homepage
        return (
            <Redirect to='/' />
        );
    }
    return (
        <div className="account-wallpaper d-flex flex-column justify-content-center">
            <div className="container div-with-bg" >
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Login</b>
                        <div className="p-2">
                            <FacebookR />
                        </div>

                        <br />
                        <h5>OR</h5>
                        <form >
                            <input type="text" className="input-username" onChange={handleChange} name="username" placeholder="Enter Username" ></input>
                            <br />
                            {/*if username is invalid or wrong input usernanme or password*/}
                            {!usernameError ? <span style={{ color: "red" }}>UserName is invalid<br /></span> : ''}
                            {isWrong ? <span style={{ color: "red" }}>Wrong UserName or Password</span> : ''}
                            <br />
                            <input type="password" className="input-password" onChange={handleChange} name="password" placeholder="Enter Password"></input>
                            <br />
                            {/*if password is invalid*/}
                            {!passwordError ? <span style={{ color: "red" }}>Password is invalid</span> : ''}
                            <br />
                            <button type="button"
                                onClick={submitLogin} className="btn btn-login" ><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg> Login</button>
                            <br />
                            <br />
                            <h5>OR</h5>
                            <br />
                            <Link className="btn btn-login" to="/account/signup"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;