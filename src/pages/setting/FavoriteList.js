import React, { useState } from 'react';
import AnimeFavorite from './AnimeFavorite';
import './Favorite.css'

const FavoriteList = () => {
    const [animeList, setAnimeList] = useState([
        { Id: 1, Img: "https://palette.clearrave.co.jp/product/yukiiro/images/top/header_bg0.jpg", },
        { Id: 2, Img: "https://cdn.cloudflare.steamstatic.com/steam/apps/976390/capsule_616x353.jpg?t=1600118929", },
        { Id: 3, Img: "https://static.zerochan.net/Kujou.Miyako.full.2092808.jpg", },
        { Id: 4, Img: "https://i1.sndcdn.com/artworks-93UyOk6LF6I3PsA3-2gmxAg-t500x500.jpg", },
        { Id: 5, Img: "https://i1.sndcdn.com/artworks-HRr5sqelzyn2zm2K-dmh3yw-t500x500.jpg", },
        { Id: 6, Img: "https://pbs.twimg.com/profile_images/1243528676710350848/nKbWbLFJ_400x400.jpg", },
        { Id: 7, Img: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/3202207/ca7eb9459439f6f4c58572948a5f9f6c158379dd.png", },
        { Id: 8, Img: "https://honeysanime.com/wp-content/uploads/2019/08/9-Nine-Episode-2-SS-1-560x315.jpg", },
        { Id: 9, Img: "https://pm1.narvii.com/7176/3a974e5138bcfcec03ee8aff13c36437cd8b6236r1-1280-720v2_hq.jpg", },
    ]);

    const onDelete = (selectedId) => {
        setAnimeList(
            animeList.filter(anime => anime.Id !== selectedId)
        );
    }

    return (
        // Favorite Anime List
        <div className="col-12 col-md-10 m-md-5">
            {/* Title */}
            <h4 style={{ color: "white", marginTop: "5%" }} className="p-0"><b>Anime</b></h4>
            {/* List Anime */}
            <div className="Favorite-Frame row justify-content-start mt-3 p-3">
                {animeList.map(anime =>
                    <AnimeFavorite key={anime.Id} anime={anime} onDelete={onDelete} />
                )}
            </div>
        </div>
    );
}

export default FavoriteList;