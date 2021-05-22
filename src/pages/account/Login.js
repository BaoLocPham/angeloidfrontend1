import React from 'react';

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import './Login.css'
import FacebookR from './Login/FacebookR'


const Login = () => {
    return (
        <>
            <div class="container div-with-bg" >
                <div class="row">
                    <div class="card rounded bg-info" id="formLogin" >
                        <b>Login</b>
                        < FacebookR />
                        <br />
                        <h5>OR</h5>
                        <form>
                            <input type="text" name="username" placeholder="Enter Username"></input>
                            <br />
                            <input type="password" name="password" placeholder="Enter Password"></input>
                            <br />
                            <br />
                            <Link class="btn btn-login" to="/"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg> Login</Link>
                            <br />
                            <br />
                            <h5>OR</h5>
                            <br />
                            <Link class="btn btn-login" to="/account/signup"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;