import React, { useState, useRef } from 'react';
import "./Avatar.css";
import CustomedModal from '../components/Modal';


const Avatar = ({ user, currentUser, base64Img, setBase64Img, setUser }) => {
    const wrapper = {
        backgroundColor: "#19293B",
        borderRadius: "5%",
        color: "#fff",
        marginLeft: "1.3em",
        textAlign: "center"
    }
    const upper = {
        borderTopLeftRadius: "5%",
        borderTopRightRadius: "5%",
        backgroundImage: `url("https://randomc.net/image/To%20LOVE-Ru/To%20LOVE-Ru%20-%20Trouble%20Darkness%20-%2001%20-%20Large%2022.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "7rem 0rem 7.5rem 0rem"
    }
    const lower = {
        padding: "8em 0 1em 0",
    }
    const avatar = {
        borderRadius: "100%",
        backgroundImage: `url(${base64Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "2em auto -15em auto",
        cursor: "pointer",
        border: "5px #19293B solid",
    }

    // Modal state
    const [avatarModalShow, setAvatarModalShow] = useState(false);
    const toggleModal = () => setAvatarModalShow(!avatarModalShow);

    const avatarInput = useRef(null);
    // Add reference from avatar image to input element type = file
    const showOpenFile = () => {
        avatarInput.current.click();
    }

    const handleUploadImage = (event) => {
        event.preventDefault();
        const inputedFile = event.target.files[0];

        if (event.target.files.length === 0) {
            return;
        }

        // File is not .jpg, .jpeg, .png or file is bigger than 2MB
        if (!inputedFile.name.match(/\.(jpg|jpeg|png)$/) || inputedFile.size > 2097152) {
            toggleModal();
            return;
        }
        // Read file
        let reader = new FileReader();
        reader.readAsDataURL(inputedFile);
        reader.onload = () => {
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/avatar/${currentUser.userId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: reader.result.split(',')[1]
                })
            })
            .then(res => {
                if (res.status == 200) {
                    setBase64Img(reader.result);
                    setUser({... user, avatar: reader.result.split(',')[1] })
                }
            });
        }
    }

    return (
        <>
            <div className="h-auto" style={wrapper}>
                <div style={upper}>
                    <div>
                        <input ref={avatarInput} onChange={handleUploadImage} type="file" accept="image/png, image/jpeg" style={{ display: "none" }} />
                        <div className="avatar" onClick={showOpenFile} style={avatar}></div>
                    </div>
                </div>
                <div className="justify-content-center" style={lower} >
                    <h3>{currentUser.userName}</h3>
                </div>
            </div>
            <CustomedModal
                modalHeader="Alert"
                modalBody="Please input file with extension .jpg, .jpeg, .png and smaller than 2MB"
                handleToggle={toggleModal}
                show={avatarModalShow}
            />
        </>
    );
}

export default Avatar;