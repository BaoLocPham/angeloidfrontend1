import React from 'react';
import './AnimeProfile.css';

const AnimeProfile = ({ anime }) => {
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        color: "white",
        overflowX: "scroll"

    }

    return (
        // Show Anime Info
        <div style={frame} className="pb-0 pb-md-2 w-100 d-flex flex-row flex-md-column profile-container">
            {/* View */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>View</b></div>
                <div className="px-2">{anime.view}</div>
            </div>
            {/* Studio */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Studio</b></div>
                <div className="px-2">{anime.studio.studioName}</div>
            </div>
            {/* Favorite */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Favorites</b></div>
                <div className="px-2">9172</div>
            </div>
            {/* Average Score */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Average Score</b></div>
                <div className="px-2">2</div>
            </div>
            {/* Status */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Status</b></div>
                <div className="px-2">{anime.status}</div>
            </div>
            {/* Duration */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Duration/Ep</b></div>
                <div className="px-2">{anime.episodeDuration}</div>
            </div>
            {/* Episode  */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Episodes</b></div>
                <div className="px-2">{anime.episode}</div>
            </div>
            {/* Season */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Season</b></div>
                <div className="px-2">{anime.season.seasoName} {anime.season.year}</div>
            </div>
            {/* Start Day */}
            <div className="py-1 py-md-2 px-1 ps-md-4">
                <div className="px-2"><b>Start Day</b></div>
                <div className="px-2">{anime.startDay}</div>
            </div>
        </div>
    );
}

export default AnimeProfile;