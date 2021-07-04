import React from 'react';
import Kanna from './Kanna.png';

const Error = () => {
    const ERR_WRAPPER_STYLE = {
        minHeight: "100vh",
        minWidth: "100vw"
    }
    const KANNA_IMG_STYLE = {
        backgroundImage: `url(${Kanna})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "360px 360px"
    }

    return (
        <div className="pt-5 row bg-dark-container" style={ERR_WRAPPER_STYLE}>
            <div className="col-12 col-md-6 p-5" style={KANNA_IMG_STYLE} ></div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mx-auto">Sorry...</h1>
                <h5 className="p-4">We could not find the page you are looking for... </h5>
            </div>
        </div>
    );
}

export default Error;