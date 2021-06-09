import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Advertisement from './Advertisement';
import ThreadCenter from './ThreadCenter';
import AnimeList from '../home/AnimeList';

const Thread = ({ user }) => {
    //List of content anime
    const [thisSeasonAnime, setThisSeasonAnime] = useState([]);
    const [loadStatus, setLoadStatus] = useState(true);

    useEffect(() => {
        //Fetch this season anime
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/thisseason`,
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
        <div className="row pt-5 bg-dark-container">
            <div className="d-none d-md-block col-md-3">
                <Advertisement />
            </div>
            <div className="col-12 col-md-6 px-4">
                <ThreadCenter user={user} />
            </div>
            <div className="d-none d-md-block col-md-3 px-5 py-3">
                <AnimeList content="POPULAR THIS SEASON" isVertical={true} animeList={thisSeasonAnime} />
            </div>
        </div>
    );
}

export default Thread;