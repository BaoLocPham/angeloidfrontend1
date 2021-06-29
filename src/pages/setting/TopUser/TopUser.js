import React from 'react';

const TopUser = ({ username, avatar }) => {
    const styleDiv = {
        backgroundColor: "#19293B",
        color: "#FFFFFF",
        height: "auto",
        borderRadius: "8px"
    }

    const navAvatar = {
        width: 40,
        height: 40,
        borderRadius: "100%",
        backgroundImage: `url(data:image/*;base64,${avatar})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    return (
        <div className="col-4 container">
            <div className="row" >
                <div className="col-6 p-2 m-1" style={navAvatar}></div>
                <div className="col-6 p-2 ">{username}</div>
            </div>
        </div>
    );
}

export default TopUser;