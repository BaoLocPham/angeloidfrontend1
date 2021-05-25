import React from "react";
import './ProfileEdit.css'

const ProfileEdit = () => {
  return (
    <div className="ProfileEdit-Frame col-12 p-5">
      <h4>Edit Profile</h4>
      <form>

        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Name</label>
          <input type="text" className="form-control" id="userName" name="username" />
        </div>

        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="userEmail" name="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="userGender" className="form-label">Gender</label>
          <select name="gender" id="userGender" className="ProfileEdit-Select form-select">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button type="submit" className="ProfileEdit-Button btn mt-3">Edit</button>

      </form>
    </div>
  );
};
export default ProfileEdit;
