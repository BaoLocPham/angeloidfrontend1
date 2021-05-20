import React from 'react';
import AnimeProfile from './AnimeProfile';
import Character from './Character';
import Reviews from './Reviews';
import Trailer from './Trailer'
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeDetail = () => {

    return (
        <>
            I am Anime Detail Page!
            
            <AnimeProfile />
            <Character />
            <Trailer />
            <Reviews />

            


        </>
    );
}

export default AnimeDetail;