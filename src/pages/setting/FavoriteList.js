//dependencies
import React, { useState, useEffect } from 'react';

//Child component
import AnimeFavorite from './AnimeFavorite';
import Loading from "../components/Loading";

//Style
import './Favorite.css'

const FavoriteList = ({ user }) => {
    //Check Loading
    const [isLoading, setIsLoading] = useState('loading');

    //Favorite list
    const [animeList, setAnimeList] = useState([]);

    //Delete selected anime
    const onDelete = (selectedId) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/favorite`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    animeId : selectedId,
                    userId : user.userId
                })
            }).then(res => {
                // Deleted successfully then also delete in Favorite list
                if (res.status === 200) {
                    setAnimeList(
                        animeList.filter(anime => anime.animeId !== selectedId)
                    );
                }
            });
    }

    //Get favorite list from db
    const getFavoriteList = (userId) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/favorite/${userId}`,
            {
                method: "GET"
            }).then(res => res.json())
            .then(res => {
                setAnimeList(res)
                setIsLoading("succeed");
            })
            .catch(err => setAnimeList({}));
    }

    //Load favorite list when Component mount
    useEffect(() => {
        if (user.userId !== undefined) {
            getFavoriteList(user.userId);
        }
    }, [user]);

    //Return loading
    if (isLoading === 'loading') {
        return (
            <Loading content="Loading your favorite list..."/>
        )
    }

    return (
        // Favorite Anime List
        <div className="col-12 col-md-10 m-md-5">
            {/* Title */}
            <h4 style={{ color: "white", marginTop: "5%" }} className="p-0"><b>Anime</b></h4>
            {/* List Anime */}
            <div className="Favorite-Frame row justify-content-start mt-3 p-3">
                {animeList.map(anime =>
                    <AnimeFavorite key={anime.animeId} anime={anime} onDelete={onDelete} />
                )}
            </div>
        </div>
    );
}

export default FavoriteList;