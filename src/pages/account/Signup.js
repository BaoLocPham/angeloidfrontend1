//dependencies
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


//local dependencies
import './Login.css'
import bg1 from './img/bg-04.jpg';
import bg2 from './img/bg-02.jpg';
import bg3 from './img/bg-03.jpg';
import bg4 from './img/bg-05.jpg';
import bg5 from './img/bg-06.jpg';
import Modal from "./Modal";

const Signup = () => {

    const [UserName, setUserName] = useState([]);
    const [Email, setEmail] = useState([]);
    const [Password, setPassword] = useState([]);
    const [show, setShow] = useState(false);
    const [Message, setMessage] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);
    const [random, setRandom] = useState([]);


    const hideModal = () => {
        setShow(false);
    }

    const UserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const PasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const EmailChange = (event) => {
        setEmail(event.target.value);
    }


    const RegisterForm = {
        userName: UserName,
        password: Password,
        email: Email,
    }
    
    const getImage = () => {
        switch (random) {
            case 1:
                return bg1;
            case 2:
                return bg2;
            case 3:
                return bg3;    
            case 4:
                return bg4;
            case 5:
                return bg5;        
        }
    }
    const BackGround =  {
        backgroundImage: `url(${getImage()})`,
    }
    useEffect(() => {
        setRandom((Math.floor(Math.random() * 5) + 1));
    }, [])


    

    // Tạm sài Alert cho đến khi sài được popup message
    const RegisterSubmit = (event) => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var userpatterm = new RegExp("^[A-z][A-z|\.|\s]+$");
        if (!userpatterm.test(UserName)) {
            event.preventDefault();
            setMessage("There are something wrong with your username!");
            setShow(true);
        }
        else if (Password.length < 5) {
            event.preventDefault();
            setMessage("The password too short !");
            setShow(true);
        }
        else if (!pattern.test(Email)) {
            event.preventDefault();
            setMessage("Error Email !!!");
            setShow(true);
        } else {
            event.preventDefault();
            // fetch("http://localhost:5000/api/user",
            //     {
            //         method: "POST",
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify(RegisterForm)
            //     }).then(response => {
            //         if (response.status != 200) {
            //             alert("Failed to register")
            //         } else {
            //             setIsRegistered(true);
            //         }
            //     })
        }
    }




    if (isRegistered) {
        return <Redirect to="/account/login" />;
    }

    return (
        <div style={BackGround} className="account-wallpaper d-flex flex-column justify-content-center"  >
            <div className="container div-with-bg">
                <div className="row">
                    <div className="card rounded bg-info" id="formLogin" >
                        <b>Signup</b>
                        <form>
                            <input type="text" className="input-username" name="username" placeholder="Enter Username" onChange={UserNameChange}></input>
                            <br />
                            <input type="email" className="input-email form-control" name="email" placeholder="Enter Email" onChange={EmailChange}></input>
                            <br />
                            <input type="password" className="input-password" name="password" placeholder="Enter Password" onChange={PasswordChange}></input>
                            <br />
                            <input type="password" className="input-password" name="re-password" placeholder="Re-Enter Password"></input>
                            <br />
                            <br />
                            <button className="btn btn-login" onClick={RegisterSubmit}><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Signup</button>
                            <br />
                        </form>
                        <h5>OR</h5>
                        <br />
                        <Link className="btn btn-login" to="/account/login"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Login</Link>
                    </div>
                </div>
            </div>
            <Modal show={show} handleClose={hideModal}>
                <p>{Message}</p>
            </Modal>
        </div>
    );
}

export default Signup;