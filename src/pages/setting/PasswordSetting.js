import React, { useState, useRef } from 'react';
import './PasswordSetting.css';
import CustomedModal from '../components/Modal';
import CustomedPopover from '../components/Popover';
import md5 from 'md5';

const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*]{5,32}$/;
const PASSWORD_MESSAGE = `Password length is between 5 to 32 and can only contains lowercase/uppercase alphabet characters, number and some special characters: !@#$%^&*`;
const modalConfigs = {
    validate: { header: "Alert", body: "Old Password and New Password cannot be the same!!!" },
    requestFailed: { header: "Failed", body: "Update password failed!!!" },
    requestSucceed: { header: "Succeed", body: "Update password successfully!!!" }
}

const PasswordSetting = ({ user }) => {
    const wrapper = {
        backgroundColor: "#19293B", color: "#fff",
        borderRadius: 8,
        marginTop: "5%"
    }

    // Ref to disable btn when user submit data
    let passwordSubmitBtn = useRef();

    // Popover States
    const [passwordPopover, setPasswordPopover] = useState({
        oldPass: false,
        newPass: false,
        confirmPass: false
    });
    const togglePasswordPopover = (obj) => {
        setPasswordPopover(Object.assign({}, passwordPopover, obj));
    }

    // Modal state
    const [passwordModalShow, setPasswordModalShow] = useState(false);
    const [passwordModal, setPasswordModal] = useState({});
    const togglePasswordModal = (modalConfig) => {
        setPasswordModal(modalConfig);
        setPasswordModalShow(!passwordModalShow);
    }

    // Form State
    const [passwordForm, setPasswordForm] = useState({
        oldPass: '',
        newPass: '',
        confirmPass: ''
    });
    const handlePasswordFormChange = (obj) => {
        setPasswordForm(Object.assign({}, passwordForm, obj))
    }

    // Before submit: validate form
    const handleSubmitPasswordForm = (event) => {
        event.preventDefault();

        if (!PASSWORD_REGEX.test(passwordForm.oldPass)) {
            togglePasswordPopover({ oldPass: true });
            return;
        }
        if (!PASSWORD_REGEX.test(passwordForm.newPass)) {
            togglePasswordPopover({ newPass: true });
            return;
        }
        if (passwordForm.oldPass == passwordForm.newPass) {
            togglePasswordModal(modalConfigs['validate']);
            return;
        }
        if (passwordForm.confirmPass != passwordForm.newPass) {
            togglePasswordPopover({ confirmPass: true });
            return;
        }

        // If Password Submit Button exist, disable it
        // Prevent too many request to the server
        passwordSubmitBtn.current.setAttribute("disabled", "disabled");
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/password/${user.userId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newPassword: md5(passwordForm.newPass),
                oldPassword: md5(passwordForm.oldPass)
            })
        }).then(res => {
            // Edited successfully
            if (res.status === 200) {
                togglePasswordModal(modalConfigs.requestSucceed);
            }
            // Error in back-end...
            else {
                togglePasswordModal(modalConfigs.requestFailed);
            }
        });

        // Enable submit btn
        passwordSubmitBtn.current.removeAttribute("disabled");
    }

    return (
        <>
            <div className="w-pass-setting h-auto p-3" style={wrapper}>
                <form style={{ padding: "2rem 1rem" }}>
                    <legend>Change Your Password</legend>
                    <br />
                    <br />
                    <CustomedPopover
                        show={passwordPopover.oldPass}
                        popoverTitle="Invalid Password Format"
                        popoverContent={PASSWORD_MESSAGE}
                    >
                        <label for="InputOldPassword" className="form-label">Old Password</label>
                    </CustomedPopover>
                    <input
                        type="password" className="form-control" name="InputOldPassword"
                        onChange={(event) => handlePasswordFormChange({ oldPass: event.target.value })}
                        onClick={() => togglePasswordPopover({ oldPass: false })}
                        value={passwordForm.oldPass}
                    />
                    <br />
                    <CustomedPopover
                        show={passwordPopover.newPass}
                        popoverTitle="Invalid New Password"
                        popoverContent={PASSWORD_MESSAGE}
                    >
                        <label for="InputNewPassword" className="form-label">New Password</label>
                    </CustomedPopover>
                    <input type="password" className="form-control" name="InputNewPassword"
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
                        <label for="InputReNewPassword" className="form-label">Re-New Password</label>
                    </CustomedPopover>
                    <input type="password" className="form-control" name="InputReNewPassword"
                        onChange={(event) => handlePasswordFormChange({ confirmPass: event.target.value })}
                        onClick={() => togglePasswordPopover({ confirmPass: false })}
                        value={passwordForm.confirmPass}
                    />
                    <br />
                    <button ref={passwordSubmitBtn} onClick={handleSubmitPasswordForm} className="col-3 btn btn-success">Edit</button>
                </form>
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

export default PasswordSetting;