import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnimeRelation.css'

const AnimeRelationsList = ({ anime }) => {

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem",
    }
    return (
        <div className=" relation col-12 col-md-6 mb-2 ">
            <div style={frame} className="row mx-0">
                <div className="row">
                    <div className="col-2 relation" />
                    <div className="col-6">
                        <div className="anime-title">{anime.name}</div>
                        <br></br>
                        <div className="anime-card">{anime.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeRelationsList;
