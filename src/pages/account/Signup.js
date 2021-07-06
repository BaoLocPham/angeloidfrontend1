//dependencies
import React, { useEffect, useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import md5 from 'md5';

//local dependencies
import './Login.css'
import CustomedPopover from '../components/Popover';
import CustomedModal from '../components/Modal';
import avatar from './img/default-avatar.jpg';

// Regex
const REGEX_USERNAME = new RegExp("^(?=[a-zA-Z0-9._]{5,32}$)(?!.*[_.]{2})[^_.].*[^_.]$");
const REGEX_PASSWORD = new RegExp("^[a-zA-Z0-9!@#$%^&*]{5,32}$");
const REGEX_EMAIL = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const USERNAME_FORMAT = `Only contains alphanumeric characters, underscore and dot`;
const PASSWORD_FORMAT = `Password length is between 5 to 32 and can only contains lowercase/uppercase alphabet characters, number and some special characters: !@#$%^&*`;
const EMAIL_FORMAT = `Please input right email regex`
const REPASS_FORMAT = `Input correct password`

const Signup = ({ BackGround, Author, AuthorLink }) => {
    const [isSigned, setSigned] = useState(false);


    // Form for Register
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        repassword: ''
    });
    const handleRegisterFormChange = (obj) => {
        setRegisterForm(Object.assign({}, registerForm, obj))
    }
    // Popover States
    const [registerPopover, setRegisterPopover] = useState({
        username: false,
        email: false,
        password: false,
        repassword: false,
        isWrong: false
    });
    const toggleRegisterPopover = (obj) => {
        setRegisterPopover(Object.assign({}, registerPopover, obj));
    }
    // Modal state
    const [registerModalShow, setRegisterModalShow] = useState(false);
    const toggleRegisterModal = () => {
        setRegisterModalShow(!registerModalShow);
    }

    // Ref to disable btn when user submit data
    let registerSubmitBtn = useRef();
    const handleSubmitRegister = (event) => {
        event.preventDefault();
        if (!REGEX_USERNAME.test(registerForm.username)) {
            toggleRegisterPopover({ username: true });// if username input is wrong format->show popup
            event.preventDefault();
            return;
        }
        if (!REGEX_EMAIL.test(registerForm.email)) {
            toggleRegisterPopover({ email: true });// if email input is wrong format->show popup
            event.preventDefault();
            return;
        }
        if (!REGEX_PASSWORD.test(registerForm.password)) {
            toggleRegisterPopover({ password: true });// if password input is wrong format->show popup
            event.preventDefault();
            return;
        }
        if (registerForm.repassword !== registerForm.password) {
            toggleRegisterPopover({ repassword: true });// if password input is wrong format->show popup
            event.preventDefault();
            return;
        }
        // create object for send to api
        const registerInput =
        {
            username: registerForm.username,
            email: registerForm.email,
            avatar: `url("data:image/jpeg;base64,${avatar}")`,
            password: md5(registerForm.password)
        }

        // Prevent too many request to the server
        registerSubmitBtn.current.setAttribute("disabled", "disabled");
        // console.log(registerInput);
        fetch(
            `${process.env.REACT_APP_BACKEND_URL}api/user`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerInput)
            }
        )
            // .then(res => res.json())
            .then(res => {
                if (res.status == 400 || res.status == 409) {
                    event.preventDefault();
                    toggleRegisterModal();
                } else {
                    setSigned(true);
                }
            })
        // Enable submit btn
        registerSubmitBtn.current.removeAttribute("disabled");
    }

    if (isSigned) {
        return (
            <Redirect to="/account/login" />
        )
    }
    return (
        <div style={BackGround} className="account-wallpaper d-flex flex-column justify-content-center"  >
            <div className="container div-with-bg">
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Signup</b>
                        <form>
                            {/* This is the Username input */}
                            <CustomedPopover
                                show={registerPopover.username}
                                popoverTitle="Invalid username Format"
                                popoverContent={USERNAME_FORMAT}
                            >
                                <label for="username"></label>
                            </CustomedPopover>
                            <input type="text" className="input-username"
                                onChange={(event) => handleRegisterFormChange({ username: event.target.value })}
                                onClick={() => toggleRegisterPopover({ username: false })}
                                id="username" name="username" placeholder="Enter Username" ></input>
                            <br />
                            {/* This is the Email input */}
                            <CustomedPopover
                                show={registerPopover.email}
                                popoverTitle="Invalid Email Format"
                                popoverContent={EMAIL_FORMAT}
                            >
                                <label for="email"></label>
                            </CustomedPopover>
                            <input type="email" className="input-email"
                                onChange={(event) => handleRegisterFormChange({ email: event.target.value })}
                                onClick={() => toggleRegisterPopover({ email: false })}
                                id="email" name="email" placeholder="Enter Email"></input>
                            <br />
                            {/* This is the Password input */}
                            <CustomedPopover
                                show={registerPopover.password}
                                popoverTitle="Invalid password Format"
                                popoverContent={PASSWORD_FORMAT}
                            >
                                <label for="password"></label>
                            </CustomedPopover>
                            <input type="password" className="input-password"
                                onChange={(event) => handleRegisterFormChange({ password: event.target.value })}
                                onClick={() => toggleRegisterPopover({ password: false })}
                                id="password" name="password" placeholder="Enter Password"></input>
                            <br />
                            {/* This is the Re-Password input */}
                            <CustomedPopover
                                show={registerPopover.repassword}
                                popoverTitle="Enter correct Password"
                                popoverContent={REPASS_FORMAT}
                            >
                                <label for="repassword"></label>
                            </CustomedPopover>
                            <input type="password" className="input-password"
                                onChange={(event) => handleRegisterFormChange({ repassword: event.target.value })}
                                onClick={() => toggleRegisterPopover({ repassword: false })}
                                id="password" name="password" placeholder="Re-Enter Password"></input>
                            <br />
                            {/* End of the Form */}
                            <br />
                            <button type="submit" className="btn btn-login" ref={registerSubmitBtn}
                                onClick={handleSubmitRegister}>Signup</button>
                            <br />
                            <br />
                        </form>
                        <h5>OR</h5>
                        <br />
                        <Link className="btn btn-login" to="/account/login">Login</Link>
                    </div>
                </div>
            </div>
            <CustomedModal
                modalHeader="Attention"
                modalBody="Your username or email are already exited
                Please check again !!!"
                handleToggle={toggleRegisterModal}
                show={registerModalShow}
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

export default Signup;

            //  <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>