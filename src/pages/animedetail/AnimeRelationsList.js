import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnimeRelation.css'

const AnimeRelationsList = ({ anime }) => {
    // const animeL = {
    //     backgroundImage: `url(${ab})`,
    //     backgroundSize: 'cover',    
    //     width: '8rem',
    //     height: '10rem',
    //     borderRadius: '8px',
    //     backgroundPosition: "center",
    // }
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem",
    }
    return (
        <div style={frame} className="my-2 anime-frame">
            <div className="row">
                <div className="col-2 relation" />
                <div className="col-6">
                    <div className="anime-title">{anime.name}</div>
                    <br></br>
                    <div className="anime-card">{anime.description}</div>
                </div>
            </div>
        </div>
    );
}

export default AnimeRelationsList;
