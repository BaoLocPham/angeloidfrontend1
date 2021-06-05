import React, { useState } from 'react';
import CharacterForm from './CharacterForm';

var characterId = 0;
const CharacterFormList = () => {
    const [characters, setCharacter] = useState([])

    // Handle Add new Character
    const handAddCharacter = () => {
        setCharacter([
            ...characters, { id: characterId }
        ])
        characterId++;
    }

    // Handle Delete selected Character
    const handleDeleteCharacter = (selectedId) => {
        setCharacter(characters.filter(character => character.id !== selectedId));
    }

    return (
        <div>
            <div>
                <h4 className="my-3"><b>Character</b></h4>
            </div>
            {characters.map(character =>
                <CharacterForm
                    key={character.id}
                    character={character}
                    handleDeleteCharacter={handleDeleteCharacter} />
            )}

            {/* Add Character Button */}
            <div className="my-3">
                <div onClick={handAddCharacter} className="AddCharacterButton btn text-center"><i className="fa fa-plus"></i></div>
            </div>
        </div>
    );
}

export default CharacterFormList;