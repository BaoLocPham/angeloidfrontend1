import React from 'react';




const ChangePassword = () => {
    return (
        <>
        <div className="account-wallpaper d-flex flex-column justify-content-center">
            <div className="container div-with-bg">
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Change Password</b>
                        <h5>Enter your new password in the form below</h5>
                        <br />
                        <br />
                        <form>
                            <input type="password" className="input-password" name="password" placeholder="Enter Password"></input>
                            <br />
                            <input type="password" className="input-password" name="re-password" placeholder="Re-Enter Password"></input>
                            <br />
                            <br />
                            <br />
                            <button type="submit" className="btn btn-login" to="/account/signup">Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ChangePassword;