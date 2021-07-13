import React from 'react';
import AnimeCard from '../home/AnimeCard'
import './SearchResult.css'


const SearchResult = ({ searchResult }) => {

    if (searchResult.length === 0) {
        return null;
    }

    var count = -1;

    return (
        <div className="w-100 mx-2 py-4" style={{ backgroundColor: "#131E2A", color: "#fff", margin: "auto ",  padding: "0 5% 0 5%", minHeight: "74vh" }}>
            <div>
                    <h5 style={{ display: "inline-block", width: "50%" }}>SEARCH RESULTS</h5>
                </div>
                <div className="w-100 h-auto row justify-content-start" style={{ textAlign: "center" }}>
                    {
                        searchResult.map(
                            anime => (
                                //increase count when load over an anime
                                count++,
                                <AnimeCard key={anime.animeId} anime={anime} isVertical={false} count={count} />
                            )
                        )
                    }
                </div>
        </div>
    );
}

export default SearchResult;