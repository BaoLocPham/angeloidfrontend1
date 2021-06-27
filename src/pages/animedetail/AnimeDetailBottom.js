import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router';
import AnimeProfile from "./AnimeProfile";
import Reviews from "./Reviews";
import Trailer from "./Trailer";
import AnimeTagList from "./AnimeTagList";
import CharacterList from "./CharacterList";
import AnimeRelations from "./AnimeRelations";
import RatingChart from "./RatingChart";
import Content from "./Content";
import AnimeList from "../home/AnimeList";

const AnimeDetailBottom = ({ anime, rateList, reviewList, setReviewList, user, isClicked, handleAfterRatingReviewFavorite }) => {

    //List of content anime
    const [thisSeasonAnime, setThisSeasonAnime] = useState([]);
    const [loadStatus, setLoadStatus] = useState(true);

    //Fetch this season anime
    const thisSeasonAnimeData = () => fetch(`${process.env.REACT_APP_BACKEND_URL}api/home/thisseason`,
        { method: "GET" }
    ).then(res => res.json())
        .then(res => setThisSeasonAnime(res))
        .catch(error => {
            setLoadStatus(false);
        });

    useEffect(() => {
        //Scroll to top every time load the home
        window.scrollTo(0, 0);

        //Call fetch anime
        thisSeasonAnimeData();
    }, [])

    if (loadStatus === false) {
        return (
            <Redirect to='/Error' />
        );
    }

    return (
        <div
            className="bg-dark-container row mx-0 w-100 h-auto scale125"
            style={{ padding: "30px 7% 2rem 7%" }}
        >
            {/* Left content */}
            <div className="col-12 col-md-3 mb-3 px-md-4 px-0">
                <AnimeProfile anime={anime} />
                <AnimeTagList anime={anime} />
            </div>

            {/* Right content */}
            <div className="col-12 col-md-9">
                <div className="row ps-1 ps-md-4">
                    <Content anime={anime} />
                    <AnimeRelations />
                    <CharacterList anime={anime} />
                    <Trailer anime={anime} />
                    <RatingChart rateList={rateList} />
                    <AnimeList content="Recommend" isVertical={false} animeList={thisSeasonAnime} />
                    <Reviews reviewList={reviewList} setReviewList={setReviewList} user={user} anime={anime} isClicked={isClicked} handleAfterRatingReviewFavorite={handleAfterRatingReviewFavorite}/>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetailBottom;
