import React from 'react';

const PasswordSetting = () => {
    const wrapper = {
        backgroundColor: "#19293B", color: "#fff",
        borderRadius: "3%",
        margin:"10% 10%"
    }
    return (
        <div className="w-100 h-auto p-2" style={wrapper}>
            <form className="" action="" method="put" style={{ padding: "2rem 1rem" }}>
                <legend>Change Your Password</legend>
                <br />
                <br />
                <div className="">
                    <label for="InputOldPassword" className="form-label">Old Password</label>
                    <input type="text" className="form-control" id="InputOldPassword" />
                </div>
                <br />
                <div className="">
                    <label for="InputNewPassword" className="form-label">New Password</label>
                    <input type="text" className="form-control" id="InputNewPassword" />
                </div>
                <br />
                <div className="">
                    <label for="InputReNewPassword" className="form-label">Re-New Password</label>
                    <input type="text" className="form-control" id="InputReNewPassword" />
                </div>
                <br/>
                <button type="submit" className="col-3 btn btn-success">Edit</button>

            </form>
        </div>
    );
}

export default PasswordSetting;