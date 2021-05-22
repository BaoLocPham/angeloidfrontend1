import React from 'react';
import { Link } from 'react-router-dom';

const AnimeTagList = () => {
    return (
        <div className="w-100 h-auto d-none d-md-block">
            <h5 className="p-3">Tags</h5>
            <Link to="/search" className="bg-dark-content w-100 rounded p-2 text-decoration-none">
                Psychological
            </Link>
        </div>
    );
}
 
export default AnimeTagList;