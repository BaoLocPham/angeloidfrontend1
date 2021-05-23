//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//local dependencies
import './Login.css'

const Signup = () => {
    return (
        <div className="account-wallpaper d-flex flex-column justify-content-center">
            <div className="container div-with-bg">
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Signup</b>
                        <form>
                            <input type="text" className="input-username" name="username" placeholder="Enter Username"></input>
                            <br />
                            <input type="email" className="input-email" name="email" placeholder="Enter Email"></input>
                            <br />
                            <input type="password" className="input-password" name="password" placeholder="Enter Password"></input>
                            <br />
                            <input type="password" className="input-password" name="re-password" placeholder="Re-Enter Password"></input>
                            <br />
                            <br />
                            <Link className="btn btn-login" to="/"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Signup</Link>
                            <br />
                            <br />
                            <h5>OR</h5>
                            <br />
                            <Link className="btn btn-login" to="/account/login"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;