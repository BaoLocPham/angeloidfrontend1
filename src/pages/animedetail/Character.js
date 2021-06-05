import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Character.css';

const Character = ({ character }) => {

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem",
    }

    const chaImg = {
        backgroundImage: `url("data:image/jpeg;base64,${character.characterImage}")`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }

    const seiyuuImg = {
        backgroundImage: `url("data:image/jpeg;base64,${character.seiyuu.seiyuuImage}")`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }

    return (
        // Show Character Info
        <div style={frame} className="my-2 anime-frame">
            <div className="row">
                {/* Character Info */}
                <div style={chaImg} className="col-2"></div>
                <div className="col-4 pt-2">
                    <div style={{ height: "50%" }} className="col-12 text-center">{character.characterName}</div>
                    <div style={{ height: "50%" }} className="col-12 text-center">{character.characterRole}</div>
                </div>
                {/* Seiyuu Info */}
                <div className="col-4 pt-2">
                    <div style={{ height: "50%" }} className="col-12 text-center">{character.seiyuu.seiyuuName}</div>
                </div>
                <div style={seiyuuImg} className="col-2"></div>
            </div>
        </div>
    );
}

export default Character;