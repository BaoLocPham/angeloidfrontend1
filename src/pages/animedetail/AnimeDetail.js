import React from 'react';
import AnimeProfile from './AnimeProfile';
import Character from './Character';
import Reviews from './Reviews';
import Trailer from './Trailer'
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeDetail = () => {

    const cha = "https://s2.vndb.org/ch/87/62187.jpg";
    const sei = "http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=502599940"

    const frame = {
        backgroundColor: "#19293B",
        color: "white",
        borderRadius: "8px",
        fontSize: "0.8rem",
    }

    const chaImg = {
        backgroundImage: `url(${cha})`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '10%',
        backgroundPosition: "center",
    }

    const seiyuuImg = {
        backgroundImage: `url(${sei})`,
        backgroundSize: 'cover',
        height: '7rem',
        borderRadius: '10%',
        backgroundPosition: "center",
    }
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