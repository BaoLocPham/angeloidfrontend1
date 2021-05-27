//dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookR from './Login/FacebookR';

//local dependencies
import './Login.css'

const Login = () => {
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
                        <form>
                            <input type="text" className="input-username" name="username" placeholder="Enter Username"></input>
                            <br />
                            <input type="password" className="input-password" name="password" placeholder="Enter Password"></input>
                            <br />
                            <br />
                            <Link className="btn btn-login" to="/"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg> Login</Link>
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