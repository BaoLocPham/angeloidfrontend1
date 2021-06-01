import React, { useState } from 'react';
import AnimeCard from '../home/AnimeCard'


const SearchResult = () => {
    const [animeList, setAnimeList] = useState([
        { Count: 1, Id: 1, Name: 'Konosuba', Img: "https://upload.wikimedia.org/wikipedia/vi/3/3e/Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Count: 2, Id: 2, Name: 'Gintama', Img: "https://upload.wikimedia.org/wikipedia/vi/e/ee/Gintamavol01cover.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Count: 3, Id: 3, Name: 'SlamDunk', Img: "https://upload.wikimedia.org/wikipedia/vi/1/1c/Slam_Dunk_cover.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Count: 4, Id: 4, Name: 'Bobobobo', Img: "https://m.media-amazon.com/images/I/61M9MHPcRmL.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Count: 5, Id: 5, Name: 'Toloveru', Img: "https://upload.wikimedia.org/wikipedia/vi/e/e3/To_Love-Ru_manga_volume_1.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] }
    ]);
    const [isVertical, setIsVertical] = useState(false);
    if (!isVertical) {
        return (
            <div className="w-100 h-auto" style={{ backgroundColor: "#131E2A", color: "#fff", margin: "auto " }}>
                <br />
                <div className="w-100 h-auto row justify-content-between" style={{ textAlign: "center" }}>
                    {
                        animeList.map(
                            anime => (
                                <AnimeCard key={anime.Id} Anime={anime} isVertical={isVertical} />
                            )
                        )
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ backgroundColor: "#131E2A", color: "#fff" }}>
                <div className="row" style={{ textAlign: "center" }}>
                    {
                        animeList.map(
                            anime => (
                                <AnimeCard key={anime.Id} Anime={anime} isVertical={isVertical} />
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}
 
export default SearchResult;