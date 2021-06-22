import React, {useState} from 'react';
import ImageFilter from './ImageFilter';
import SearchResult from './SearchResult';

//Model to show 
import CustomedModal from '../components/Modal';

//Css style
import './SearchByImage.css';

//Set notification
const MODAL_CONFIGS = {
    validate: { header: "Alert", body: "Please input file with extension .jpg, .jpeg, .png and smaller than 2MB!" }
}

const SearchByImage = () => {
    //Declare file State
    const [inputfile, setInputfile] = useState("");

    //Model setting
    const [postingModalShow, setPostingModalShow] = useState(false);
    const [postingModal, setPostingModal] = useState({
        header: "",
        body: ""
    });
    const togglePostingModal = (modalConfig) => {
        setPostingModal(modalConfig);
        setPostingModalShow(!postingModalShow);
    }

    //Handle drop file
    const dropHandler = (event) => {
        event.preventDefault();
        var file = event.dataTransfer.files[0];
        
        // File is not .jpg, .jpeg, .png or file is bigger than 2MB
        if (!file.name.match(/\.(jpg|jpeg|png)$/) || file.size > 2097152) {
            togglePostingModal(MODAL_CONFIGS.validate);
            return;
        }

        //Read data from input file
        let read = new FileReader();
        read.readAsDataURL(file);
        read.onloadend = function () {
            // console.log(read.result.split(",")[1]);
            setInputfile(read.result.split(",")[1])
        }
    }

    const dragOverHandler = (ev) => {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    // Handle upload image
    const handleUploadImg = (event) => {
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
            setInputfile(reader.result.split(",")[1])
        }
    }

    return (
        <div id="drop_zone" className="drop-zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
            <ImageFilter handleUploadImg={handleUploadImg}/>
            <SearchResult />

            <CustomedModal
                modalHeader={postingModal.header}
                modalBody={postingModal.body}
                handleToggle={togglePostingModal}
                show={postingModalShow}
            />
        </div>
    );
}

export default SearchByImage;