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
                    animeId: selectedId,
                    userId: user.userId
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
            <Loading content="Loading your favorite list..." />
        )
    }

    return (
        // Favorite Anime List
        <div className="col-11 col-md-10 mt-5">
            <div className="Favorite-Frame row justify-content-start mt-5 p-3">
                {/* Title */}
                <h4 className="ms-3"><b>Anime</b></h4>
                {/* List Anime */}
                {
                    (animeList.length === 0) ?
                        <span style={{ color: "white" }}>There is no thing in your favorite list.</span>
                        :
                        animeList.map(anime =>
                            <AnimeFavorite key={anime.animeId} anime={anime} onDelete={onDelete} />
                        )}
            </div>
        </div>
    );
}

export default FavoriteList;