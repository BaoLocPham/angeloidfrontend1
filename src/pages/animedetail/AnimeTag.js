import React from 'react';
import { Link } from 'react-router-dom';

const AnimeTag = ({ tagName }) => {
    return (
        <Link to="/search" className="bg-dark-content d-block rounded p-2 ps-3 text-decoration-none mb-3">
            { tagName }
        </Link>
    );
}

export default AnimeTag;