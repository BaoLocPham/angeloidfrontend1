//dependencies
import React from 'react';

//local dependencies
import AnimeCard from './AnimeCard';

const AnimeList = ({ content, isVertical, animeList, isFour }) => {
    if (isFour) {
        animeList = animeList.slice(0, 4);
        return (
            <div className="w-100 h-auto py-4" style={{ backgroundColor: "#131E2A", color: "#fff", margin: "auto " }}>
                <div>
                    <h5 style={{ display: "inline-block", width: "50%" }}>{content}</h5>
                </div>
                <div className="w-100 h-auto row mx-0 d-flex justify-content-between" style={{ textAlign: "center" }}>
                    {
                        animeList.map(
                            anime => (
                                <AnimeCard key={anime.animeId} anime={anime} isVertical={isVertical} isFour={isFour} />
                            )
                        )
                    }
                </div>
            </div>
        );
    }
    //Horizontal view
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
    }

    //Vertical view
    else {
        return (
            <div style={{ backgroundColor: "#131E2A", color: "#fff" }}>
                <div>
                    <h5 className="pb-3 text-center" style={{ display: "inline-block", width: "100%" }}>{content}</h5>
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