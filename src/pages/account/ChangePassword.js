import React, { useRef, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CustomedModal from '../components/Modal';
import CustomedPopover from '../components/Popover';
import md5 from 'md5';
import { useEffect } from 'react';

const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*]{5,32}$/;
const PASSWORD_MESSAGE = `Password length is between 5 to 32 and can only contains lowercase/uppercase alphabet characters, number and some special characters: !@#$%^&*`;

const ChangePassword = ({ BackGround, Author, AuthorLink }) => {
    // Check Loading
    const [isLoading, setIsLoading] = useState('loading');

    // Get guid from parameters
    let { guid } = useParams();
    // Ref to disable btn when user submit data
    let passwordSubmitBtn = useRef();
    // Popover States
    const [passwordPopover, setPasswordPopover] = useState({
        newPass: false,
        confirmPass: false
    });
    const togglePasswordPopover = (obj) => {
        setPasswordPopover(Object.assign({}, passwordPopover, obj));
    }

    // Modal state
    const [passwordModalShow, setPasswordModalShow] = useState(false);
    const [passwordModal, setPasswordModal] = useState({
        header: "",
        body: ""
    });
    const togglePasswordModal = (modalConfig) => {
        setPasswordModal(modalConfig);
        setPasswordModalShow(!passwordModalShow);
    }

    // Form State
    const [passwordForm, setPasswordForm] = useState({
        newPass: '',
        confirmPass: ''
    });
    const handlePasswordFormChange = (obj) => {
        setPasswordForm(Object.assign({}, passwordForm, obj))
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/token`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tokenName: guid
            })
        })
            .then(res => {
                if (res.status === 200) {
                    setIsLoading('done');
                } else {
                    setIsLoading('error');
                }
            })
    }, []);

    // Before submit: validate form
    const handleSubmitPasswordForm = (event) => {
        event.preventDefault();

        if (!PASSWORD_REGEX.test(passwordForm.newPass)) {
            togglePasswordPopover({ newPass: true });
            return;
        }
        if (passwordForm.confirmPass !== passwordForm.newPass) {
            togglePasswordPopover({ confirmPass: true });
            return;
        }

        // If Password Submit Button exist, disable it
        // Prevent too many request to the server
        if (passwordSubmitBtn.current) {
            passwordSubmitBtn.current.setAttribute("disabled", "disabled");
        }

        // Request PUT Action to change Password
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/reset`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newPassword: md5(passwordForm.newPass),
                token: guid
            })
        }).then(async res => {
            // Updated successfully
            if (res.status === 200) {
                setIsLoading('succeed');
            }
            // Error in back-end...
            else {
                let obj = await res.json();
                togglePasswordModal({ header: "Error", body: obj.Message });
            }
        });

        // Enable submit btn
        passwordSubmitBtn.current.removeAttribute("disabled");
    }


    if (isLoading === 'loading') {
        return (
            <div className="account-wallpaper d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-light">Loading...</h1>
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    if (isLoading === 'error') {
        return (
            <Redirect to='/error' />
        )
    }
    if (isLoading === 'succeed') {
        return (
            <div className="account-wallpaper d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-light">Reset Password Successfully!</h1>
                <h3 className="text-light">Now you can Login!</h3>
            </div>
        )
    }
    return (
        <>
            <div style={BackGround} className="account-wallpaper d-flex flex-column justify-content-center">
                <div className="container div-with-bg">
                    <div className="row">
                        <div className="card rounded bg-info" id="formLogin" >
                            <b>Change Password</b>
                            <h5>Enter your new password in the form below</h5>
                            <br />
                            <br />
                            <form>
                                <CustomedPopover
                                    show={passwordPopover.newPass}
                                    popoverTitle="Invalid New Password"
                                    popoverContent={PASSWORD_MESSAGE}
                                >
                                    <label htmlFor="InputNewPassword" className="form-label"></label>
                                </CustomedPopover>
                                <input type="password" className="input-password" name="password" placeholder="Enter Password"
                                    onChange={(event) => handlePasswordFormChange({ newPass: event.target.value })}
                                    onClick={() => togglePasswordPopover({ newPass: false })}
                                    value={passwordForm.newPass}
                                />
                                <br />
                                <CustomedPopover
                                    show={passwordPopover.confirmPass}
                                    popoverTitle="Invalid Password Confirmation"
                                    popoverContent="New Password and Password Confirmation do not match!"
                                >
                                    <label htmlFor="InputReNewPassword" className="form-label"></label>
                                </CustomedPopover>
                                <input type="password" className="input-password" name="re-password" placeholder="Re-Enter Password"
                                    onChange={(event) => handlePasswordFormChange({ confirmPass: event.target.value })}
                                    onClick={() => togglePasswordPopover({ confirmPass: false })}
                                    value={passwordForm.confirmPass}
                                />
                                <br />
                                <br />
                                <br />
                                <button ref={passwordSubmitBtn} onClick={handleSubmitPasswordForm} type="submit" className="btn btn-login" to="/account/signup">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Reference to author's background image */}
                <div style={{
                    position: "absolute",
                    left: "2%",
                    bottom: "3%"
                }}>
                    <span className="fw-bolder" style={{ color: "#76899C" }}>Artwork by <a target="_blank" href={AuthorLink} style={{ textDecoration: "none" }}>{Author}</a></span>
                </div>
            </div>
            <CustomedModal
                modalHeader={passwordModal.header}
                modalBody={passwordModal.body}
                handleToggle={togglePasswordModal}
                show={passwordModalShow}
            />
        </>
    );
}

export default ChangePassword;