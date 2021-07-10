import React, { useEffect, useState } from 'react';

const CharacterForm = ({ character, handleDeleteCharacter, handleInputCharactersInfo, toggleModalImage }) => {
    // Default image for character
    const [uploadCharacterImage, setUploadCharacterImage] = useState("https://s2.vndb.org/ch/97/62197.jpg");
    const [uploadSeiyuuImage, setUploadSeiyuuImage] = useState("http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=199083852");

    useEffect(() => {
        if (character.characterImage != null) {
            // setUploadCharacterImage(`data:image/*;base64,${character.characterImage}`);
            setUploadCharacterImage(`data:image/*;base64,${character.characterImage}`);
        }
        if (character.seiyuu.seiyuuImage != null) {
            setUploadSeiyuuImage(`data:image/*;base64,${character.seiyuu.seiyuuImage}`);
        }
    }, []
    )
    // Handle Upload Thumbnail
    const handleUploadCharacterImage = (event) => {
        try {
            if (!event.target.files[0].type.match(/image.*/) || event.target.files[0].size > 2097152) {
                toggleModalImage();
                return;
            }
            let reader = new FileReader();
            reader.onload = function (e) {
                //Get base64 only
                // console.log(character.characterId);
                handleInputCharactersInfo({ characterImage: e.target.result.split(',')[1] }, character.characterId)
                setUploadCharacterImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        } catch {

        }
    };

    // Handle Upload Wallpaper
    const handleUploadSeiyuuImage = (event) => {
        try {
            if (!event.target.files[0].type.match(/image.*/) || event.target.files[0].size > 2097152) {
                toggleModalImage();
                return;
            }
            let reader = new FileReader();
            reader.onload = function (e) {
                //Get base64 only
                handleInputCharactersInfo({ seiyuu: { ...character.seiyuu, seiyuuImage: e.target.result.split(',')[1] } }, character.characterId)
                setUploadSeiyuuImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        } catch {

        }
    };

    //Styling
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
                <div onClick={() => handleDeleteCharacter(character.characterId)} type="button" className="btn btn-sm DeleteCharacterButton text-center position-absolute"><i style={{ color: "white" }} className="fa fa-times"></i></div>
            </div>
            <div className="row justify-content-between mx-0">
                {/* Character Info */}
                <input style={characterImage} onChange={handleUploadCharacterImage} type="file" id="characterImage" name="characterImage" accept="image/x-png,image/gif,image/jpeg" />
                <div className="col-3 p-1">
                    <div style={{ height: "50%" }}>
                        <label htmlFor="characterName" className="form-label">Character Name</label>
                        <input type="text" className="form-control" id="characterName" name="characterName"
                            defaultValue={character.characterName}
                            onChange={(event) => handleInputCharactersInfo({ characterName: event.target.value }, character.characterId)}
                        />
                    </div>
                    <div style={{ height: "50%" }}>
                        <label htmlFor="characterRole" className="form-label">Character Role</label>
                        <input type="text" className="form-control" id="characterRole" name="characterRole"
                            defaultValue={character.characterRole}
                            onChange={(event) => handleInputCharactersInfo({ characterRole: event.target.value }, character.characterId)}
                        />
                    </div>
                </div>
                {/* Seiyuu Info */}
                <div className="col-3 p-1">
                    <div style={{ height: "50%" }}>
                        <label htmlFor="seiyuuName" className="form-label">Seiyuu Name</label>
                        <input type="text" className="form-control" id="seiyuuName" name="seiyuuName"
                            defaultValue={character.seiyuu.seiyuuName}
                            onChange={(event) => handleInputCharactersInfo({ seiyuu: { ...character.seiyuu, seiyuuName: event.target.value } }, character.characterId)}
                        />
                    </div>
                </div>
                <input style={seiyuuImage} onChange={handleUploadSeiyuuImage} type="file" id="seiyuuImage" name="seiyuuImage" accept="image/x-png,image/gif,image/jpeg" />
            </div>
        </div>
    );
}

export default CharacterForm;