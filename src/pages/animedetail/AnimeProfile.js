import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeProfile = () => {
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "3%",
        fontSize: "0.9rem",
    }

    return (
        <>
            <div style={frame} className="row justify-content-start">
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Format</b></div>
                    <div>TV</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Studio</b></div>
                    <div>Kyotou</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Favorites</b></div>
                    <div>9172</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Average Score</b></div>
                    <div>3</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Episodes</b></div>
                    <div>13</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Duration/Ep</b></div>
                    <div>24 mins</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Season</b></div>
                    <div>Summer 2020</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Start Date</b></div>
                    <div>Sep, 26 2020</div>
                </div>
                <div className="col-4 col-md-12 m-md-2">
                    <div><b>Status</b></div>
                    <div>Finished</div>
                </div>
            </div>
        </>
    );
}

export default AnimeProfile;