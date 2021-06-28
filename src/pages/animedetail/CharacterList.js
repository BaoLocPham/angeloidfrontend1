import React from 'react';
import Character from './Character';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = ({ anime }) => {
    return (
        // Show Character List
        <div id="character" className="col-12">
            <h5 id="Character" className="p-0">Character</h5>
            <div className="row">
                {anime.characters.map(character =>
                    <Character key={character.characterId} character={character} />
                )}
            </div>
        </div>
    );
}

export default CharacterList;