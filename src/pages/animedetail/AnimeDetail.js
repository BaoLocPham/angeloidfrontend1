import React, { useState, useEffect } from 'react';
import AnimeDetailBottom from './AnimeDetailBottom';
import AnimeDetailTop from './AnimeDetailTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

const AnimeDetail = () => {

    const [Anime, setAnime] = useState({
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

    let { animeId } = useParams();

    const getAnime = () => {
        fetch(`http://localhost:5001/api/${animeId}`,
            {
                method: "GET"
            }).then(res => res.json())
            .then(res => setAnime(res));
    }

    useEffect(
        () => {
            getAnime();
        },
        []
    )
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto m-0 p-0">
            <AnimeDetailTop Anime={Anime} />
            <AnimeDetailBottom Anime={Anime} />
        </div>
    );
}

export default AnimeDetail;