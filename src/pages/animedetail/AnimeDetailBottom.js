import React from "react";
import AnimeProfile from "./AnimeProfile";
import Reviews from "./Reviews";
import Trailer from "./Trailer";
import AnimeTagList from "./AnimeTagList";
import CharacterList from "./CharacterList";
import AnimeRelations from "./AnimeRelations";
import RatingChart from "./RatingChart";
import Content from "./Content";

const AnimeDetailBottom = ({ anime }) => {
    return (
        <div
            className="bg-dark-container row mx-0 w-100 h-auto scale125"
            style={{ padding: "30px 7% 2rem 7%" }}
        >
            {/* Left content */}
            <div className="col-12 col-md-3 mb-3 px-md-4 px-0">
                <AnimeProfile anime={anime} />
                <AnimeTagList anime={anime} />
            </div>

            {/* Right content */}
            <div className="col-12 col-md-9">
                <div className="row ps-1 ps-md-4">
                    <Content anime={anime}/>
                    <AnimeRelations />
                    <CharacterList anime={anime} />
                    <Trailer anime={anime} />
                    <RatingChart />
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

export default AnimeDetailBottom;
