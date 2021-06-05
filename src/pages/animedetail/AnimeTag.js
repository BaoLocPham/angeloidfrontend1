import React from 'react';
import { Link } from 'react-router-dom';

const AnimeTag = ({ tag }) => {
    // Show Tag
    return (
        <Link to="/search" className="bg-dark-content d-block rounded p-2 ps-3 text-decoration-none mb-3">
            { tag.tagName}
        </Link>
    );
}

export default AnimeTag;