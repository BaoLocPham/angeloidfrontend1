import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Link, Redirect } from 'react-router-dom';


const FacebookS = ({setUser, isLogin, setCookie} ) => {

    const responseFacebook = (response) => {
        // This is the user Facebook Avatar
        // console.log( response.picture.data.url)

        fetch(
            `${process.env.REACT_APP_BACKEND_URL}api/user/facebook`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        facebookId: response.userID,
                        fullName: response.name,
                        email: response.email
                    }
                )
            }
        )
            // .then(res => res.json())
            .then(async res => {
                if (res.status != 404) {// if login success
                    let newUser = await res.json();
                    console.log(newUser);
                    let expires = new Date()
                    expires.setTime(expires.getTime() + (1000000000));
                    setUser(newUser);
                    setCookie("user", { userId: newUser.userId, isAdmin: newUser.isAdmin }, { path: "/", expires: expires });
                } 
            });            
    }
    if (isLogin) {// if login success->homepage
        return (
            <Redirect to='/' />
        );
    }


    const stateClicked = () => console.log("clicked");

    return (
        <div>
            <FacebookLogin
                appId="481426109774195"
                fields="name,email,picture"
                // onClick={stateClicked}
                callback={responseFacebook}
            />
        </div>
    )
}
export default FacebookS;