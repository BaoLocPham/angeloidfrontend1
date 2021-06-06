import React from 'react';
import AnimeTag from './AnimeTag';

const AnimeTagList = ({ anime }) => {

    return (
        // Show Tag List
        <div className="w-100 h-auto d-none d-md-block">
            <h5 className="p-3">Tags</h5>
            {anime.tags.map((tag) =>
                <AnimeTag key={tag.tagId} tag={tag} />
            )}
        </div>
    );
}

export default AnimeTagList;