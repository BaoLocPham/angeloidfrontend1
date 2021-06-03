import React from 'react';
import './AnimeProfile.css';

const AnimeProfile = ({ Anime }) => {
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        color: "white",
        overflowX: "scroll"

    }

    return (
        <div style={frame} className="pb-0 pb-md-2 w-100 d-flex flex-row flex-md-column profile-container">
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>View</b></div>
                <div className="px-2">{Anime.view}</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Studio</b></div>
                <div className="px-2">{Anime.studio.studioName}</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Favorites</b></div>
                <div className="px-2">9172</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Average Score</b></div>
                <div className="px-2">2</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Status</b></div>
                <div className="px-2">{Anime.status}</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Duration/Ep</b></div>
                <div className="px-2">{Anime.episodeDuration}</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Episodes</b></div>
                <div className="px-2">{Anime.episode}</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Season</b></div>
                <div className="px-2">{Anime.season.seasoName} {Anime.season.year}</div>
            </div>
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Start Day</b></div>
                <div className="px-2">{Anime.startDay}</div>
            </div>
        </div>
    );
}

export default AnimeProfile;