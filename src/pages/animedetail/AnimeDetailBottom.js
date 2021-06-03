import React from "react";
import AnimeProfile from "./AnimeProfile";
import Reviews from "./Reviews";
import Trailer from "./Trailer";
import AnimeTagList from "./AnimeTagList";
import CharacterList from "./CharacterList";
import AnimeRelations from "./AnimeRelations";

const AnimeDetailBottom = ({ Anime }) => {
    return (
        <div
            className="bg-dark-container row mx-0 w-100 h-auto "
            style={{ padding: "70px 7% 2rem 7%" }}
        >
            {/* Left content */}
            <div className="col-12 col-md-3 mb-3 px-4">
                <AnimeProfile Anime={Anime} />
                <AnimeTagList Anime={Anime} />
            </div>

            {/* Right content */}
            <div className="col-12 col-md-9">
                <div className="row ps-1 ps-md-4">
                    <AnimeRelations />
                    <CharacterList Anime={Anime} />
                    <Trailer Anime={Anime} />
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

export default AnimeDetailBottom;
