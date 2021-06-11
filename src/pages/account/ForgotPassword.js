import React, { useState, useRef } from 'react';
import CustomedModal from '../components/Modal';
import CustomedPopover from '../components/Popover';
import { Redirect } from 'react-router-dom';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const ForgotPassword = () => {
    // Modal state
    const [forgotModalShow, setForgotModalShow] = useState(false);
    const [forgotModal, setForgotModal] = useState({
        header: "",
        body: ""
    });
    const toggleForgotModal = (modalConfig) => {
        setForgotModal(modalConfig);
        setForgotModalShow(!forgotModalShow);
    }

    // Popover state
    const [popShow, setPopShow] = useState(false);
    const togglePopover = () => {
        setPopShow(true);
    }
    const dismissPopover = () => {
        setPopShow(false);
    }

    const [email, setEmail] = useState('');

    let submitBtn = useRef();

    const handleSubmitEmail = (event) => {
        event.preventDefault();

        // Validate email
        if (!EMAIL_REGEX.test(email)) {
            togglePopover();
            return;
        }
        // If Profile Submit Button exist, disable it
        // Prevent too many request to the server
        if (submitBtn.current) {
            submitBtn.current.setAttribute("disabled", "disabled");
        }
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/forgot`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(async (res) => {
            if (res.status !== 200) {
                toggleForgotModal({ header: "Error", body: "Email not found" });
            } else {
                toggleForgotModal({ header: "Succeed", body: "We have sent an email to your email address, please check your email!" });
            }
        })
    }

    return (
        <>
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
                                <CustomedPopover
                                    show={popShow}
                                    popoverTitle="Invalid Email"
                                    popoverContent="Please input valid email"
                                >
                                    <label htmlFor="email"></label>
                                </CustomedPopover>
                                <input type="email" className="input-email" name="email" placeholder="Enter Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    onClick={dismissPopover}
                                />
                                <br />
                                <br />
                                <button className="btn btn-login"
                                    ref={submitBtn}
                                    onClick={handleSubmitEmail}
                                ><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <CustomedModal
                modalHeader={forgotModal.header}
                modalBody={forgotModal.body}
                handleToggle={toggleForgotModal}
                show={forgotModalShow}
            />
        </>
    );
}

export default ForgotPassword;