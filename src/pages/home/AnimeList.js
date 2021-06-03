//dependencies
import React, { useEffect, useState } from 'react';

//local dependencies
import AnimeCard from './AnimeCard';

const AnimeList = ({ content, isVertical }) => {

    //List to store anime
    const [animeList, setAnimeList] = useState([]);

    //Get all anime from API
    const listAllAnime = () => {
        //Url for request api
        // end with 1: popular this season
        // end with 2: next season
        // end with 3: all time popular
        let url = `${process.env.REACT_APP_BACKEND_URL}api/anime/all/${(content === "POPULAR THIS SEASON") ? "1" : (content === "UPCOMING NEXT SEASON") ? "2" : "3"}`;
        //Fetch data and store to animeList
        fetch(url, {
            method: "GET",
        }).then(res => res.json()).then(res => { setAnimeList(res); });
    }

    //First load anime list when loading page
    useEffect(() => {
        listAllAnime();
    }, []);

    //Vertical view
    if (!isVertical) {

        //Check is the last anime
        var count = 0;

        return (
            <div className="w-100 h-auto py-4" style={{ backgroundColor: "#131E2A", color: "#fff", margin: "auto " }}>
                <div>
                    <h5 style={{ display: "inline-block", width: "50%" }}>{content}</h5>
                    {/* <a style={{ display: "inline-block", width: "50%", textAlign: "right", textDecoration: 'none', color: "#fff", fontSize: "1rem" }} href="#">See all</a> */}
                </div>
                <div className="w-100 h-auto row justify-content-between" style={{ textAlign: "center" }}>
                    {
                        animeList.map(
                            anime => (
                                //increase count when load over an anime
                                count++,
                                <AnimeCard key={anime.animeId} anime={anime} isVertical={isVertical} count={count} />
                            )
                        )
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ backgroundColor: "#131E2A", color: "#fff" }}>
                <div>
                    <h5 style={{ display: "inline-block", width: "50%" }}>{content}</h5>
                </div>
                <div className="row" style={{ textAlign: "center" }}>
                    {
                        animeList.map(
                            anime => (
                                <AnimeCard key={anime.AnimeId} anime={anime} isVertical={isVertical} />
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default AnimeList;