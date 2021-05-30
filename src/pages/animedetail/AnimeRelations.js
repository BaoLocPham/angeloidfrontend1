import React, { useState } from 'react';
import AnimeRelationsList from './AnimeRelationsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeRelations = () =>{
    const [animelist, setAnimeList] = useState([
        {id: 1, name: "Boku no Pico", description: "This is the best anime ever"},
        {id: 2, name: "Hige wo Soru. Soshite Joshikousei wo Hirou.", description: "slut stay in your home"},
        {id: 3, name: "Horimiya", description: "The most mat day dataset ever "},
    ]);
    return (
        <div>
            <div className="col-12">
                <div className="row p0 p-md-2">
                    {
                        animelist.map(animes =>
                            <AnimeRelationsList key={animes.id} anime={animes} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AnimeRelations;