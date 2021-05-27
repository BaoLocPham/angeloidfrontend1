import React, { useState, useRef } from 'react';
import "./Avatar.css";
const Avatar = () => {

    const wrapper = {
        backgroundColor: "#19293B",
        borderRadius: "5%",
        color: "#fff",
        marginLeft:"1.3em",
        textAlign: "center"
    }
    const upper = {
        borderTopLeftRadius: "5%",
        borderTopRightRadius: "5%",
        backgroundImage: `url("https://randomc.net/image/To%20LOVE-Ru/To%20LOVE-Ru%20-%20Trouble%20Darkness%20-%2001%20-%20Large%2022.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding:"7rem 0rem 9rem 0rem"
    }
    const lower = {
        padding: "8em 0 1em 0",
    }
    const avatar = {
        borderRadius: "100%",
        backgroundImage:`url("https://i.pinimg.com/originals/92/a9/f6/92a9f6ec0d2eb46ac35417a2b4eddcdb.jpg")`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        margin: "2em auto -15em auto",
        cursor: "pointer",
        border:"5px #19293B solid",
    }
    const textInput = useRef(null);
    const showOpenFile = () => {
        textInput.current.click();
    }
    return (
        <div className="h-auto" style={wrapper}>
            <div style={upper}>
                <div>
                    <input ref={textInput} type="file" accept="image/*" style={{ display: "none" }} />
                    <div className="avatar" onClick={showOpenFile} style={avatar}></div>
                </div>
            </div>
            <div className="justify-content-center" style={lower} >
                <h3>BaoLoc</h3>
            </div>
        </div>
    );
}

export default Avatar;