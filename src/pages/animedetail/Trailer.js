import React from 'react';
import './Trailer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Trailer = () => {

    return (
        <div className="col-12 col-md-6">
            <h5 className="py-2">Trailer</h5>
            <div className="row">
                <iframe className="trailer" title="Anime Trailer"
                    src="https://www.youtube.com/embed/LH0yFFPBTuc?autoplay=1&mute=1&playlist=LH0yFFPBTuc&loop=1">
                </iframe>
            </div>
        </div>
    );
}

export default Trailer;