import React from 'react';
import Kanna from './Kanna.png';

const Error = () => {
    const ERR_WRAPPER_STYLE = {
        minHeight: "100vh",
        width: "100vw"
    }
    const KANNA_IMG_STYLE = {
        backgroundImage: `url(${Kanna})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "480px 480px"
    }

    return (
        <div className="pt-5 row row-cols-2 bg-dark-container" style={ERR_WRAPPER_STYLE}>
            <div className="col p-5" style={KANNA_IMG_STYLE} ></div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <h1>Sorry...</h1>
                <h5>We could not find the page you are looking for... </h5>
            </div>
        </div>
    );
}

export default Error;