import React, { useRef, useState } from 'react';
import CustomedModal from '../components/Modal';

const MODAL_CONFIGS = {
    validate: { header: "Alert", body: "Please input file with extension .jpg, .jpeg, .png and smaller than 2MB!" }
}


const ThreadPosting = ({ user }) => {
    // Posting Form state
    const [postingForm, setPostingForm] = useState({
        title: "",
        content: "",
        image: ""
    });
    const handlePostingFormChange = (obj) => {
        setPostingForm(Object.assign({}, postingForm, obj))
    }

    // Styles
    const POSTING_AVATAR = {
        backgroundImage: `url(data:image/*;base64,${user.avatar})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "40px 40px",
        width: 40,
        height: 40
    }
    const IMG_CLOSE_BTN = {
        position: "absolute",
        zIndex: "2",
        width: 36,
        height: 36
    }
    const INPUT_FIELDS_STYLE = {
        backgroundColor: "#19293B",
        color: "#FFF"
    }

    // Modal state
    const [postingModalShow, setPostingModalShow] = useState(false);
    const [postingModal, setPostingModal] = useState({
        header: "",
        body: ""
    });
    const togglePostingModal = (modalConfig) => {
        setPostingModal(modalConfig);
        setPostingModalShow(!postingModalShow);
    }

    // Add reference from button to input element type = file
    const postingImgInput = useRef();
    const showPostingOpenFile = (event) => {
        event.preventDefault();
        postingImgInput.current.click();
    }

    // Handle upload image
    const handleUploadPostingImg = (event) => {
        event.preventDefault();
        const inputedFile = event.target.files[0];

        // File is not .jpg, .jpeg, .png or file is bigger than 2MB
        if (!inputedFile.name.match(/\.(jpg|jpeg|png)$/) || inputedFile.size > 2097152) {
            togglePostingModal(MODAL_CONFIGS.validate);
            return;
        }
        // Read file
        let reader = new FileReader();
        reader.readAsDataURL(inputedFile);
        reader.onload = () => {
            handlePostingFormChange({ image: reader.result.split(",")[1] });
        }
    }

    return (
        <>
            <form className="my-3 p-2 d-flex flex-column rounded-3 bg-dark-content">
                {/* Posting Header (Avatar & Tít le) */}
                <div class="d-flex flex-row p-2 align-items-center">
                    <div className="rounded-circle" style={POSTING_AVATAR}></div>
                    <input type="text" className="ms-3 form-control w-50" placeholder="Your tít le"
                        style={INPUT_FIELDS_STYLE}
                        value={postingForm.title}
                        onChange={(event) => handlePostingFormChange({ title: event.target.value })}
                    />
                </div>

                {/* Posting Body (Content) */}
                <div className="p-2 form-group">
                    <textarea className="form-control" rows="3" placeholder="Ưhat do u think today?"
                        style={INPUT_FIELDS_STYLE}
                        value={postingForm.content}
                        onChange={(event) => handlePostingFormChange({ content: event.target.value })}
                    ></textarea>
                </div>

                {/* Posting Image */}
                { postingForm.image !== "" ?
                    <div className="d-flex justify-content-end">
                        <img className="w-100 p-3" src={`data:image/*;base64,${postingForm.image}`} />
                        <div className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center" style={IMG_CLOSE_BTN} onClick={(event) => handlePostingFormChange({ image: "" })}>
                            <i style={{ color: "white" }} className="fa fa-times"></i>
                        </div>
                    </div>
                : ""}

                {/* Posting Buttons */}
                <div className="p-2 d-flex flex-row justify-content-between align-items-center">
                    <button onClick={showPostingOpenFile} className="btn" style={{ color: "#14A38B", backgroundColor: "#FFF" }}>Load Image</button>
                    <input ref={postingImgInput} onChange={handleUploadPostingImg} type="file" accept="image/png, image/jpeg" style={{ display: "none" }} />
                    <button className="btn btn-success">POST</button>
                </div>
            </form>

            <CustomedModal
                modalHeader={postingModal.header}
                modalBody={postingModal.body}
                handleToggle={togglePostingModal}
                show={postingModalShow}
            />
        </>
    );
}

export default ThreadPosting;