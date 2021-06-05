import React from 'react';
import './Trailer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Trailer = ({ anime }) => {

    return (
        // Trailer
        <div className="col-12 col-md-6 p-0">
            <h5 className="py-2">Trailer</h5>
            <div className="row">
                <iframe className="trailer" title="Anime Trailer"
                    src={anime.trailer}>
                </iframe>
            </div>
        </div>
    );
}

export default Trailer;