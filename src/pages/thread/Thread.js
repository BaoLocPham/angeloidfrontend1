//dependencies
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

//local component
import Advertisement from './Advertisement';
import ThreadCenter from './ThreadCenter';
import AnimeList from '../home/AnimeList';

import './Thread.css';

const Thread = ({ user, isLogin }) => {
    //List of content anime
    const [thisSeasonAnime, setThisSeasonAnime] = useState([]);
    const [loadStatus, setLoadStatus] = useState(true);

    useEffect(() => {
        //Fetch this season anime
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/home/thisseason`,
            { method: "GET" }
        ).then(res => res.json())
            .then(res => setThisSeasonAnime(res))
            .catch(error => {
                setLoadStatus(false);
            });

        window.scrollTo(0, 0);
    }, [])

    if (loadStatus === false) {
        return (
            <Redirect to='/Error' />
        );
    }

    return (
        <div className="row mx-0 bg-dark-container w-100 d-flex justify-content-center" style={{minHeight: "100vh", paddingTop: "70px"}}>
            <div className="d-none d-md-block col-md-3 advertisement">
                <Advertisement />
            </div>
            <div className="col-12 col-md-6 px-5">
                <ThreadCenter user={user} isLogin={isLogin} />
            </div>
            <div className="d-none d-md-block col-md-3 threadAnimeList">
                <AnimeList content="POPULAR THIS SEASON" isVertical={true} animeList={thisSeasonAnime} />
            </div>
        </div>
    );
}

export default Thread;