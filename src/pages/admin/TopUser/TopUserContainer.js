import React from 'react';
import TopUser from './TopUser';

const TopUserContainer = ({TopUsers}) => {
    const styleDiv = {
        width:"90%",
        backgroundColor: "#19293B",
        color: "#FFFFFF",
        borderRadius: "8px",
        margin: "1rem 2rem 1rem 0.5rem",
        padding: "0 0 0 2rem"
    }
    return (
        <div className="row" style={styleDiv}>
            {
                TopUsers.map(user => (
                    <TopUser className="" style={{ border: "red" }} key={user.userId} username={user.userName}
                        avatar={user.avatar}>
                    </TopUser>
                ))
            }
        </div>
    );
}

export default TopUserContainer;