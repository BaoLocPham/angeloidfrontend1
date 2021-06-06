import React, { useEffect, useState } from 'react';

import Welcome from './Welcome';
import Features from './Features';
import AnimeList from './AnimeList';
import { Redirect } from 'react-router';

const Home = ({ isLogin }) => {

    //List of content anime
    const [thisSeasonAnime, setThisSeasonAnime] = useState([]);
    const [nextSeasonAnime, setNextSeasonAnime] = useState([]);
    const [allTimePopularAnime, setAllTimePopular] = useState([]);
    const [loadStatus, setLoadStatus] = useState(true);

    //Async fetch data when load the home pge
        const fetchAnimeHome = async () => {

            //Fetch this season anime
            const thisSeasonAnimeData = fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/thisseason`,
                { method: "GET" }
            ).then(res => res.json())
                .then(res => setThisSeasonAnime(res))
                .catch(error => {
                        setLoadStatus(false);
                });

            //Fetch next season anime
            const nextSeasonAnimeData = fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/nextseason`,
                { method: "GET" }
            ).then(res => res.json())
                .then(res => {
                    setNextSeasonAnime(res)
                })
                .catch(error => {
                    setLoadStatus(false);
                });

            //Fetch all timme popular anime
            const allTimePopularAnimeData = fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/alltimepopular`,
                { method: "GET" }
            ).then(res => res.json())
                .then(res => setAllTimePopular(res))
                .catch(error => {
                    setLoadStatus(false);
                });
        };

    useEffect(() => {
        //Scroll to top every time load the home
        window.scrollTo(0, 0);

        //Call fetch anime
        fetchAnimeHome();
    }, [])

    if (loadStatus === false) {
        return (
            <Redirect to='/Error' />
        );
    }

    return (
        <div className="bg-dark-container" style={{ width: "100%", padding: "0 5% 0 5%" }}>
            { isLogin ?
                <Welcome />
                : <Features />
            }
            <AnimeList content="POPULAR THIS SEASON" isVertical={false} animeList={thisSeasonAnime} />
            <AnimeList content="UPCOMING NEXT SEASON" isVertical={false} animeList={nextSeasonAnime} />
            <AnimeList content="ALL TIME POPULAR" isVertical={false} animeList={allTimePopularAnime} />
        </div>
    );
}

export default Home;