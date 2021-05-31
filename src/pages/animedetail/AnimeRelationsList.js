import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ab from './image/image.jpg'
import './AnimeRelation.css'

const AnimeRelationsList = ({anime}) => {
    const animeL = {
        backgroundImage: `url(${ab})`,
        backgroundSize: 'cover',
        height: '7rem',
        width: '8rem',
        height: '10rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem",
        width: "470px"
    }   
    return (
        <div style={frame} className="my-2 anime-frame">
            <div className="row">
                <div style={animeL} className="col-2"/>
                <div className="col-8 pt-2">
                    <div className="col-12 text-center"><h4>{anime.name}</h4></div>
                    <div className="col-12">{anime.description}</div>
                </div>  
            </div>
        </div>
    );
}
 
export default AnimeRelationsList;
