import React from 'react';
import AnimeTag from './AnimeTag';

const AnimeTagList = ({ Anime }) => {
    return (
        <div className="w-100 h-auto d-none d-md-block">
            <h5 className="p-3">Tags</h5>
            {Anime.tags.map((tag) =>
                <AnimeTag key={tag.tagId} tagName={tag} />
            )}
        </div>
    );
}

export default AnimeTagList;