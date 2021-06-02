import React, {useEffect} from 'react';
import AnimeDetailBottom from './AnimeDetailBottom';
import AnimeDetailTop from './AnimeDetailTop';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto m-0 p-0">
            <AnimeDetailTop />
            <AnimeDetailBottom />
        </div>
    );
}

export default AnimeDetail;