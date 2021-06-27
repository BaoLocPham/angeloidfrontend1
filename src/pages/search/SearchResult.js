import React, { useState } from 'react';
import AnimeCard from '../home/AnimeCard'
import './SearchResult.css'


const SearchResult = ({ searchResult }) => {
    // const [animeList, setAnimeList] = useState([
    //     { animeId: 1, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", Tag: [{ tagId: "rape", tagName: "abc"}] }
    // ]);

    // const animeList = [
    //     { animeId: 1, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 2, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 3, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 4, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 5, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 6, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 7, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 8, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 8, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] },
    //     { animeId: 10, animeName: 'Konosuba', thumbnail: "", studio: { studioName: "Hello" }, format: "TV series", episode: "25 episodes", tags: [{ tagId: "rape", tagName: "abc" }] }
    // ];

    if (searchResult.length === 0) {
        return null;
    }

    return (
        <div className="w-100 h-auto" style={{ backgroundColor: "#131E2A", color: "#fff", margin: "auto ", width: "100%", padding: "0 5% 0 5%", minHeight: "74vh" }}>
            <div className="w-100 h-auto row mx-0 justify-content-start search-result" style={{ textAlign: "center" }}>
                {
                    searchResult.map(
                        anime => (
                            <div className="col-2 p-2">
                                <AnimeCard key={anime.animeId} anime={anime} isVertical={false} />
                            </div>

                        )
                    )
                }
            </div>
        </div>
    );
}

export default SearchResult;