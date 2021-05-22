import React from 'react';
import AnimeProfile from './AnimeProfile';
import Character from './Character';
import Reviews from './Reviews';
import Trailer from './Trailer'
import 'bootstrap/dist/css/bootstrap.min.css';


const AnimeDetailBottom = () => {
    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto " style={{ padding: "70px 7% 2rem 7%" }}>
            {/* Left content */}
            <div className="col-12 col-md-2 mb-3">
                <AnimeProfile />
            </div>

            {/* Right content */}
            <div className="col-12 col-md-10">
                <div className="row">
                    <div className="col-12">
                        <Character />
                    </div>
                    <div className="col-12 col-md-6">
                        <Trailer />
                    </div>
                    <div className="col-12">
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetailBottom;