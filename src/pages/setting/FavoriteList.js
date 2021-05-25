import React, { useState } from 'react';
import AnimeFavorite from './AnimeFavorite';
import './Favorite.css'

const FavoriteList = () => {
    const [animeList, setAnimeList] = useState([
        { Id: 1, Name: 'Konosuba', Img: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/38611534/95c4c1d1cfcb1916b3b733dfa5e5d6cc6850ae05.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 2, Name: 'Gintama', Img: "https://cdn.cloudflare.steamstatic.com/steam/apps/976390/capsule_616x353.jpg?t=1600118929", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 3, Name: 'SlamDunk', Img: "https://static.zerochan.net/Kujou.Miyako.full.2092808.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 4, Name: 'Bobobobo', Img: "https://i1.sndcdn.com/artworks-93UyOk6LF6I3PsA3-2gmxAg-t500x500.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 5, Name: 'Toloveru', Img: "https://i1.sndcdn.com/artworks-HRr5sqelzyn2zm2K-dmh3yw-t500x500.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 6, Name: 'Konosuba', Img: "https://9-nine-project.com/wp/wp-content/themes/nine-project/assets/images/common/game/nine/img_feature_04_01.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 7, Name: 'Gintama', Img: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/3202207/ca7eb9459439f6f4c58572948a5f9f6c158379dd.png", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
        { Id: 8, Name: 'Bobobobo', Img: "https://honeysanime.com/wp-content/uploads/2019/08/9-Nine-Episode-2-SS-1-560x315.jpg", Studio: "Kyoto Animations", Format: "TV series", SeriesLength: "25 episodes", Tag: ["rape", "ntr", "scat"] },
    ]);

    return (
        <div className="col-12">
            <h4>Anime</h4>
            <div className="Favorite-Frame row justify-content-start">
                {animeList.map(anime =>
                    <AnimeFavorite key={anime.Id} anime={anime} />
                )
                }
            </div>
        </div>
    );
}

export default FavoriteList;