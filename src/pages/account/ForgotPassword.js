import React from 'react';
import { Link } from 'react-router-dom';



const ForgotPassword = () => {
    return (
         <div className="account-wallpaper d-flex flex-column justify-content-center">
            <div className="container div-with-bg">
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Forgot Password</b>
                        <h5>Enter your email below to recover your password</h5>
                        <br />
                        <br />
                        {/* Input Email Form */}
                        <form>
                            <input type="email" className="input-email" name="email" placeholder="Enter Email"></input>
                            <br />
                            <br />
                            <Link className="btn btn-login" to="/account/signup">Continue</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;