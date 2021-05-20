import React from 'react';
import './Trailer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Trailer = () => {

    return (
        <>
            <div style={{color: "white"}} className="w-100">
                <h5>Trailer</h5>
                <iframe className="trailer w-100"
                    src="https://www.youtube.com/embed/LH0yFFPBTuc?autoplay=1&mute=1&playlist=LH0yFFPBTuc&loop=1">
                </iframe>
            </div>
        </>
    );
}

export default Trailer;