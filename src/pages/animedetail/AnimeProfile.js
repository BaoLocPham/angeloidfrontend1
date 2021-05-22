import React from 'react';
// import {Carousel} from 'react';

const AnimeProfile = () => {
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        color: "white"
    }

    return (
        <div style={frame} className="row d-none d-md-block pb-2 me-3">
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Format</b></div>
                <div>TV</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Studio</b></div>
                <div>Kyotou</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Favorites</b></div>
                <div>9172</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Average Score</b></div>
                <div>2</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Episodes</b></div>
                <div>12</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Duration/Ep</b></div>
                <div>24 mins</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Season</b></div>
                <div>Summer 2020</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Start Date</b></div>
                <div>Sep, 26 2020</div>
            </div>
            <div className="col-4 col-md-12 py-2 ps-4">
                <div><b>Status</b></div>
                <div>Finished</div>
            </div>
        </div>
    );
}

export default AnimeProfile;