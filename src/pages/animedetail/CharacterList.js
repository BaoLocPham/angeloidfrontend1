import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = ({ character }) => {

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "2%",
        fontSize: "0.8rem",
    }

    const chaImg = {
        backgroundImage: `url(${character.chaImg})`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '10%',
        backgroundPosition: "center",
    }

    const seiyuuImg = {
        backgroundImage: `url(${character.seiImg})`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '10%',
        backgroundPosition: "center",
    }

    return (
        <>
            <div style={frame} className="col-sm-12 col-md-5 m-md-3 mb-3">
                <div className="row">
                    {/* Character Info */}
                    <div className="col-6">
                        <div className="row">
                            <div style={chaImg} className="col-5"></div>
                            <div className="col-7">
                                <div style={{height: "50%"}} className="col-12">{character.character}</div>
                                <div style={{height: "50%"}} className="col-12">Main</div>
                            </div>
                        </div>
                    </div>
                    {/* <!Seiyuu Info*/}
                    <div className="col-6">
                        <div className="row">
                            <div className="col-7">
                                <div style={{height: "50%"}} className="col-12">{character.seiyuu}</div>
                                <div style={{height: "50%"}} className="col-12">Japan</div>
                            </div>
                            <div style={seiyuuImg} className="col-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharacterList;