import React from 'react';
import CharacterForm from './CharacterForm';

const CharacterFormList = ({ characters, handAddNewCharacter, handleInputCharactersInfo, handleDeleteCharacter, handleUploadCharacterImage, handleUploadSeiyuuImage, toggleModalImage }) => {
    return (
        <div>
            {/* {console.log(characters.length)} */}
            <div>
                <h4 className="my-3"><b>Character</b></h4>
            </div>
            {characters.map(character =>
                <CharacterForm
                    key={character.characterId}
                    character={character}
                    handleDeleteCharacter={handleDeleteCharacter}
                    handleInputCharactersInfo={handleInputCharactersInfo}
                    handleUploadCharacterImage={handleUploadCharacterImage}
                    handleUploadSeiyuuImage={handleUploadSeiyuuImage}
                    toggleModalImage={toggleModalImage}
                />
            )}

            {/* Add Character Button */}
            <div className="my-3">
                <div onClick={handAddNewCharacter} className="AddCharacterButton btn text-center"><i className="fa fa-plus"></i></div>
            </div>
        </div>
    );
}

export default CharacterFormList;