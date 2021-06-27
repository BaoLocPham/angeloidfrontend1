import React, { useState, useEffect } from 'react';
import AnimeDetailBottom from './AnimeDetailBottom';
import AnimeDetailTop from './AnimeDetailTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useParams,
    Redirect
} from "react-router-dom";

import Loading from "../components/Loading";

const AnimeDetail = ({ user }) => {

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
    const [rateList, setRateList] = useState({
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0
    });

    //Review list for review
    const [reviewList, setReviewList] = useState([
    ]);

    //Check to disable rating and favorite button
    const [isClicked, setIsClicked] = useState({
        animeId: "",
        userId: "",
        rated: true,
        favorite: true,
        reviewed: true
    });

    //After click 
    const handleAfterRatingReviewFavorite = (modifiedClick, modifiedScore) => {
        setIsClicked(Object.assign({}, isClicked, modifiedClick));
        if (modifiedScore !== undefined)
            setRateList(Object.assign({}, rateList, modifiedScore));
    }

    // Check Loading
    const [isLoading, setIsLoading] = useState('loading');

    // Get animeId to show
    let { animeId } = useParams();

    //Get anime from DB
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
                }
            });
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

    //Check Reviewed, rate, favorite
    const getIsClicked = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/review/check`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    animeId: animeId,
                    userId: user.userId
                })
            }).then(res => res.json())
            .then(res => setIsClicked(res))
            .catch(err => setIsClicked({}));
    }

    //Only load isClicked Status when user differ than undefined
    useEffect(() => {
        if (user.userId !== undefined) {
            getIsClicked();
        }
    }, [user]);

    //Load all data when component mount
    useEffect(
        () => {
            getAnime();
            getRateScore();
            getReview();
            
            window.scrollTo(0, 0);
        }, []);

    //Return loading
    if (isLoading === 'loading') {
        return (
            <Loading />
        )
    }

    // Redirect to Error Page if data is Undefine
    if (anime.animeName === undefined)
        return (
            <Redirect to='/error' />
        )

    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto m-0 p-0">
            <AnimeDetailTop anime={anime} 
                isClicked={isClicked} 
                user={user} 
                rateList={rateList} 
                handleAfterRatingReviewFavorite={handleAfterRatingReviewFavorite}
            />
            <AnimeDetailBottom anime={anime} 
                rateList={rateList} 
                reviewList={reviewList}
                setReviewList={setReviewList} 
                user={user} 
                isClicked={isClicked} 
                handleAfterRatingReviewFavorite={handleAfterRatingReviewFavorite} 
            />
        </div>
    );
}

export default AnimeDetail;