import React from 'react';
import AnimeTag from './AnimeTag';

const AnimeTagList = () => {
    const animeTagList = [
        "NTR",
        "Scat",
        "Psychology",
        "Mind-break"
    ]

    return (
        <div className="w-100 h-auto d-none d-md-block">
            <h5 className="p-3">Tags</h5>
            {animeTagList.map((tagName) => (
                <AnimeTag key={tagName} tagName={tagName} />
            ))}
        </div>
    );
}
 
export default AnimeTagList;