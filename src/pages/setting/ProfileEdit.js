// Import
import React, { useRef, useState } from "react";
import './ProfileEdit.css'
import CustomedModal from '../components/Modal';
import CustomedPopover from '../components/Popover';
// Const Variables
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const modalConfigs = {
  requestFailed: {header: "Failed", body: "Failed to send data to server!!!"},
  requestSucceed: {header: "Succeed", body: "Update profile information successfully!!!"}
}


const ProfileEdit = ({ currentUser, setCurrentUser }) => {
  // Modal state
  const [profileModalShow, setProfileModalShow] = useState(false);
  const [modalProfile, setModalProfile] = useState({});
  const toggleModalProfile = (modalConfig) => {
    setModalProfile(modalConfig);
    setProfileModalShow(!profileModalShow);
  }
  // Popover state
  const [profileEmailShow, setProfileEmailShow] = useState(false);
  const togglePopover = () => {
    setProfileEmailShow(true);
  }
  const dismissPopover = () => {
    setProfileEmailShow(false);
  }

  // Ref to disable btn when user submit data
  let profileSubmitBtn = useRef();

  // Handle user email inputing
  const handleEmailChange = (event) => {
    setCurrentUser(prev => ({ ...prev, email: event.target.value }));
  }

  // Handle user gender choosing
  const handleGenderChange = (event) => {
    setCurrentUser(prev => ({ ...prev, gender: event.target.value }));
  }

  const handleSubmitProfileForm = (event) => {
    // Prevent redirect
    event.preventDefault();

    // Validate email
    if (!EMAIL_REGEX.test(currentUser.email)) {
      togglePopover();
      return;
    }
    // If Profile Submit Button exist, disable it
    // Prevent too many request to the server
    if (profileSubmitBtn.current) {
      profileSubmitBtn.current.setAttribute("disabled", "disabled");
    }
    fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/profile/${currentUser.userId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    }).then(res => {
      // Edited successfully
      if (res.status === 200) {
        toggleModalProfile(modalConfigs.requestSucceed);
      }
      // Error in back-end...
      else {
        toggleModalProfile(modalConfigs.requestFailed);
      }
      // Enable submit btn
      profileSubmitBtn.current.removeAttribute("disabled");
    });
  }

  return (
    <>
      <div className="ProfileEdit-Frame col-12 p-5">
        <h4>Edit Profile</h4>
        <form>
          {/* User Name Form */}
          <div className="mb-3">
            <label htmlFor="userFullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="userFullName" name="userFullName" />
          </div>
          {/* Email Form*/}
          <div className="mb-3">
            <CustomedPopover
              show={profileEmailShow}
              popoverTitle="Invalid Email"
              popoverContent="Please input valid email"
            >
              <label htmlFor="userEmail" className="form-label">Email</label>
            </CustomedPopover>
            <input type="email" className="form-control" id="userEmail" name="email" value={currentUser.email} onChange={handleEmailChange} onClick={dismissPopover} />
          </div>
          {/* Gender Select*/}
          <div className="mb-3">
            <label htmlFor="userGender" className="form-label">Gender</label>
            <select name="gender" id="userGender" className="ProfileEdit-Select form-select" onChange={handleGenderChange} defaultValue={currentUser.gender} value={currentUser.gender} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="None">None</option>
            </select>
          </div>
          {/* Submit Button */}
          <button type="submit" ref={profileSubmitBtn} className="ProfileEdit-Button btn mt-3" onClick={handleSubmitProfileForm}>Edit</button>
        </form>
      </div>

      <CustomedModal
        modalHeader={modalProfile.header}
        modalBody={modalProfile.body}
        handleToggle={toggleModalProfile}
        show={profileModalShow}
      />
    </>
  );
};
export default ProfileEdit;
