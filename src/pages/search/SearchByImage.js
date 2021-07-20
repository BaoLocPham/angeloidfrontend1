import React, { useState, useEffect } from 'react';
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
    const [imageShow, setImageShow] = useState("");
    const [searchResult, setSearchResult] = useState([]);

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
        try {
            event.preventDefault();
            var file = event.dataTransfer.files[0];

            // File is not .jpg, .jpeg, .png or file is bigger than 2MB
            if (!file.name.match(/\.(jpg|jpeg|png)$/) || file.size > 2097152) {
                togglePostingModal(MODAL_CONFIGS.validate);
                return;
            }
            setImageShow("loading");
            //Read data from input file
            let read = new FileReader();
            read.readAsDataURL(file);
            read.onloadend = function () {
                setInputfile(read.result.split(",")[1])
                flask(read.result.split(",")[1]);
            }
        } catch { }
    }

    const dragOverHandler = (ev) => {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    // Handle upload image
    const handleUploadImg = (event) => {
        try {
            event.preventDefault();
            const inputedFile = event.target.files[0];

            // File is not .jpg, .jpeg, .png or file is bigger than 2MB
            if (!inputedFile.name.match(/\.(jpg|jpeg|png)$/) || inputedFile.size > 2097152) {
                togglePostingModal(MODAL_CONFIGS.validate);
                return;
            }
            setImageShow("loading");
            // Read file
            let reader = new FileReader();
            reader.readAsDataURL(inputedFile);
            reader.onload = () => {
                setInputfile(reader.result.split(",")[1])
                flask(reader.result.split(",")[1]);
            }
        } catch { }
    }

    // Send Image to Flask and fetch data from database
    const flask = (inputedfile1) => {
        fetch(`${process.env.REACT_APP_FLASK_URL}api`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image: inputedfile1
            })
        })
            .then(res => res.json())
            .then(async res => {
                setImageShow(res.image)
                fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/searchImage`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        listCharacterName: res.result
                    })
                })
                    .then(res => res.json())
                    .then(res => setSearchResult(res));
            });
    }

    return (
        <div id="drop_zone" className="drop-zone" onDrop={imageShow == "loading" ? "" : dropHandler} onDragOver={dragOverHandler}>
            <ImageFilter handleUploadImg={handleUploadImg} inputfile={inputfile} imageShow={imageShow} />
            {searchResult.length > 0 ?
                <SearchResult searchResult={searchResult} />
                :
                <div style={{ backgroundColor: "#131E2A" }}>
                    <h4 style={{ color: "white", marginLeft: "5%" }}>No Result</h4>
                </div>
            }

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