import React, { useState, useEffect } from 'react';
import AnimeDetailBottom from './AnimeDetailBottom';
import AnimeDetailTop from './AnimeDetailTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useParams,
    Redirect
} from "react-router-dom";

import Loading from "../components/Loading";

const AnimeDetail = ({isLogin}) => {

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

    //Rating list for chart
    const [rateList, setRateList] = useState({});

    //Review list for review
    const [reviewList, setReviewList] = useState([]);

    //Check to disable rating and favorite button
    const [isClicked, setIsClicked] = useState({
        rated: true,
        favorite: true
    });

    // Check Loading
    const [isLoading, setIsLoading] = useState('loading');

    // Get animeId to show
    let { animeId } = useParams();

    const getAnime = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/${animeId}`,
            {
                method: "GET"
            }).then(async res => {
            // Updated successfully
            if (res.status === 200) {
                let obj = await res.json();
                setAnime(obj);
                setIsLoading('succeed');
            }
            // Error in back-end...
            else {
                setAnime({});
            }});
    }

    // Get rating list From Database
    const getRateScore = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/review/rate/${animeId}`,
            {
                method: "GET"
            }).then(res => res.json())
            .then(res => setRateList(res))
            .catch(err => setRateList({}));
    }

    //Get review list from DB
    const getReview = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/review/${animeId}`,
            {
                method: "GET"
            }).then(res => res.json())
            .then(res => setReviewList(res))
            .catch(err => setReviewList([]));
    }

    useEffect(
        () => {
            getAnime();
            getRateScore();
            getReview();
            window.scrollTo(0, 0);
        },[]);

    if (isLoading === 'loading') {
        return (
            <Loading />
        )
    }

    // Redirect to Error Page if data is Undifine
    if (anime.animeName === undefined)
        return (
            <Redirect to='/error' />
        )

    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto m-0 p-0">
            <AnimeDetailTop anime={anime} isClicked={isClicked} isLogin={isLogin}/>
            <AnimeDetailBottom anime={anime} rateList={rateList} reviewList={reviewList}/>
        </div>
    );
}

export default AnimeDetail;