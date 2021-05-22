import React from 'react';
import AnimeProfile from './AnimeProfile';
import Reviews from './Reviews';
import Trailer from './Trailer';
import AnimeTagList from './AnimeTagList';
import CharacterList from './CharacterList';


const AnimeDetailBottom = () => {
    return (
        <div className="bg-dark-container row mx-0 w-100 h-auto " style={{ padding: "70px 7% 2rem 7%" }}>
            {/* Left content */}
            <div className="col-12 col-md-3 mb-3">
                <AnimeProfile />
                <AnimeTagList />
            </div>

            {/* Right content */}
            <div className="col-12 col-md-9">
                <div className="row ps-1 ps-md-2">
                    <div className="col-12">
                        <CharacterList />
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