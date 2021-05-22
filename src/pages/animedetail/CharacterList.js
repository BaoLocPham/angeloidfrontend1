import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = ({ character }) => {

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem",
    }

    const chaImg = {
        backgroundImage: `url(${character.chaImg})`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }

    const seiyuuImg = {
        backgroundImage: `url(${character.seiImg})`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }

    return (
        <>
            <div style={frame} className="col-12 col-sm-12 col-md-5 my-2 me-5">
                <div className="row">
                    {/* Character Info */}
                    <div style={chaImg} className="col-2"></div>
                    <div className="col-4">
                        <div style={{ height: "50%" }} className="col-12">{character.character}</div>
                        <div style={{ height: "50%" }} className="col-12">Main</div>
                    </div>
                    {/* Seiyuu Info */}
                    <div className="col-4">
                        <div style={{ height: "50%" }} className="col-12">{character.seiyuu}</div>
                        <div style={{ height: "50%" }} className="col-12">Japan</div>
                    </div>
                    <div style={seiyuuImg} className="col-2"></div>
                </div>
            </div>
        </>
    );
}

export default CharacterList;