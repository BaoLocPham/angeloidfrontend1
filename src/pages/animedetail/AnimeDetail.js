import React, { useState, useEffect } from 'react';
import AnimeDetailBottom from './AnimeDetailBottom';
import AnimeDetailTop from './AnimeDetailTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useParams,
    Redirect
} from "react-router-dom";

const AnimeDetail = () => {

    // Declare Object Anime
    const [anime, setAnime] = useState({
        animeName: "",
        characters: [
            {
                seiyuu: {}
            },
        ],
        season: {},
        studio: {},
        tags: [
            {},
        ]
    })

    // Get animeId to show
    let { animeId } = useParams();

    // Get Anime From Database
    const getAnime = async () => {
        fetch(`http://localhost:5000/api/anime/${animeId}`,
            {
                method: "GET"
            }).then(res => res.json())
            .then(res => setAnime(res))
            .catch(err => setAnime({}));
    }

    useEffect(
        () => {
            getAnime();
            window.scrollTo(0, 0);
        },
        []
    )


    // Redirect to Error Page if data is Undifine
    if (anime.animeName === undefined)
        return (
            <Redirect to='/error' />
        )


    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto m-0 p-0">
            <AnimeDetailTop anime={anime} />
            <AnimeDetailBottom anime={anime} />
        </div>
    );
}

export default AnimeDetail;