import React from 'react';

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import './Login.css'

const Signup = () => {
    return (
        <>
            <div class="container div-with-bg" >
                <div class="row">
                    <div class="card rounded bg-info" id="formLogin" >
                        <b>Signup</b>
                        <form>
                            <input type="text" name="username" placeholder="Enter Username"></input>
                            <br />
                            <input type="email" name="email" placeholder="Enter Email"></input>
                            <br />
                            <input type="password" name="password" placeholder="Enter Password"></input>
                            <br />
                            <input type="password" name="password" placeholder="Enter Request Password"></input>
                            <br />
                            <br />
                            <Link class="btn btn-login" to="/"   >Signup</Link>
                            <br />
                            <br />
                            <h5>OR</h5>
                            <br />
                            <Link class="btn btn-login" to="/account/login"  >Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;