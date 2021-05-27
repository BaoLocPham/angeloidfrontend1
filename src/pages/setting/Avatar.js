import React, { useState, useRef } from 'react';
const Avatar = () => {

    const wrapper = {
        backgroundColor: "#19293B",
        borderRadius: "5%",
        color: "#fff",
        margin: "1em 0.5em",
        textAlign: "center"
    }
    const upper = {
        borderTopLeftRadius: "5%",
        borderTopRightRadius: "5%",
        backgroundImage: `url("https://randomc.net/image/To%20LOVE-Ru/To%20LOVE-Ru%20-%20Trouble%20Darkness%20-%2001%20-%20Large%2022.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const lower = {
        padding: "12em 0 1em 0",
    }
    const avatar = {
        width: "15em",
        height: "20em",
        borderRadius: "100%",
        margin: "10em 1em -10em 1em",
        cursor: "pointer",
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
                    <img onClick={showOpenFile} style={avatar} src="https://i.pinimg.com/originals/92/a9/f6/92a9f6ec0d2eb46ac35417a2b4eddcdb.jpg" />
                </div>
            </div>
            <div sclassName="justify-content-center" style={lower} >
                <h3>BaoLoc</h3>
            </div>
        </div>
    );
}

export default Avatar;