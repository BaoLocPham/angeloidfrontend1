import React from 'react';
import TopUser from './TopUser';

const TopUserContainer = () => {
    const styleDiv = {
        backgroundColor: "#19293B",
        color: "#FFFFFF",
        borderRadius: "8px",
        margin:"1rem 2rem 1rem 0.5rem",
        padding:"0 0 0 2rem"
    }
    const Users = [
        { username: "BaoLoc", avatar: "" },
        { username: "BaoNgoc", avatar: "" },
        { username: "BaoAn", avatar: "" },
        { username: "BaoDai", avatar: "" },
        { username: "BaoNhan", avatar: "" },
        { username: "BaoBao", avatar: "" },
        { username: "BaoMinh", avatar: "" },
        { username: "BaoAn", avatar: "" },
        { username: "BaoViet", avatar: "" }
    ]
    return (
        <div className="w-auto h-auto"
            style={styleDiv}
        >
            <div className="row">
                {
                    Users.map(user => (
                        <TopUser className="" style={{border:"red"}} username={user.username}
                            avatar={user.avatar}>
                        </TopUser>
                    ))
                }
            </div>
        </div>
    );
}

export default TopUserContainer;