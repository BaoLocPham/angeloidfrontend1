import React, { useState } from 'react';

const CharacterForm = ({ character, handleDeleteCharacter }) => {
    const [uploadCharacterImage, setUploadCharacterImage] = useState("https://s2.vndb.org/ch/97/62197.jpg");
    const [uploadSeiyuuImage, setUploadSeiyuuImage] = useState("http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=199083852");

    // Handle Upload Thumbnail
    const handleUploadCharacterImage = (event) => {
        if (!event.target.files[0].type.match(/image.*/)) {
            alert('You can\'t upload this type of file.');
            return;
        } else if (event.target.files[0].size > 1e6) {
            alert('You can\'t upload file has size greater than 1 mb.');
            return;
        }
        let reader = new FileReader();
        reader.onload = function (e) {
            console.log(e.target.result)
            setUploadCharacterImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    // Handle Upload Wallpaper
    const handleUploadSeiyuuImage = (event) => {
        if (!event.target.files[0].type.match(/image.*/)) {
            alert('You can\'t upload this type of file.');
            return;
        }
        let reader = new FileReader();
        reader.onload = function (e) {
            setUploadSeiyuuImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };


    const characterImage = {
        backgroundImage: `url(${uploadCharacterImage})`,
        backgroundSize: 'cover',
        width: "20%",
        height: '15rem',
        borderRadius: '8px',
        backgroundPosition: "center",
        cursor: "pointer",
        paddingTop: "15rem",
    }

    const seiyuuImage = {
        backgroundImage: `url(${uploadSeiyuuImage})`,
        backgroundSize: 'cover',
        width: "20%",
        height: '15rem',
        borderRadius: '8px',
        backgroundPosition: "center",
        cursor: "pointer",
        paddingTop: "15rem",
    }

    return (
        <div className="col-12 my-3">
            <div className="d-flex justify-content-end m-0">
                <div onClick={() => handleDeleteCharacter(character.id)} type="button" className="btn btn-sm DeleteCharacterButton text-center position-absolute"><i style={{ color: "white" }} className="fa fa-times"></i></div>
            </div>
            <div className="row justify-content-between mx-0">
                {/* Character Info */}
                <input style={characterImage} onChange={handleUploadCharacterImage} type="file" id="characterImage" name="characterImage" accept="image/x-png,image/gif,image/jpeg" />
                <div className="col-3 p-1">
                    <div style={{ height: "50%" }}>
                        <label htmlFor="characterName" className="form-label">Character Name</label>
                        <input type="text" className="form-control" id="characterName" name="characterName" />
                    </div>
                    <div style={{ height: "50%" }}>
                        <label htmlFor="characterRole" className="form-label">Character Role</label>
                        <input type="text" className="form-control" id="characterRole" name="characterRole" />
                    </div>
                </div>
                {/* Seiyuu Info */}
                <div className="col-3 p-1">
                    <div style={{ height: "50%" }}>
                        <label htmlFor="seiyuuName" className="form-label">Seiyuu Name</label>
                        <input type="text" className="form-control" id="seiyuuName" name="seiyuuName" />
                    </div>
                </div>
                <input style={seiyuuImage} onChange={handleUploadSeiyuuImage} type="file" id="seiyuuImage" name="seiyuuImage" accept="image/x-png,image/gif,image/jpeg" />
            </div>
        </div>
    );
}

export default CharacterForm;