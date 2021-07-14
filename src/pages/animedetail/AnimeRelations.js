import React, { useState } from 'react';
import AnimeRelationsList from './AnimeRelationsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeRelations = () => {
    const [animelist] = useState([
        { id: 1, name: "Boku no Pico", description: "This is the best anime ever" },
        { id: 2, name: "Hige wo Soru. Soshite Joshikousei wo Hirou.", description: "slut stay in your home" },
        { id: 3, name: "Horimiya", description: "The most mat day dataset ever " },
        { id: 4, name: "Horimiya", description: "The most mat day dataset ever " },
        { id: 5, name: "Horimiya", description: "The most mat day dataset ever " },
        { id: 6, name: "Horimiya", description: "The most mat day dataset ever " },
    ]);
    return (
        // <div>
            <div className="col-12">
                <div className="row">
                    {
                        animelist.map(animes =>
                            <AnimeRelationsList key={animes.id} anime={animes} />
                        )
                    }
                </div>
            </div>
        // </div>
    )
}

export default AnimeRelations;