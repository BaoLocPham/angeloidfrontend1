import React from 'react';

const AnimeFavorite = ({ anime }) => {
    const aniImg = {
        backgroundImage: `url(${anime.Img})`,
        backgroundSize: 'cover',
        height: '20rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }
    return (
        <div className="col-6 col-md-2 d-flex justify-content-end">
            <div className="w-100 p-3">
                <a href="http://localhost:3000/anime/1" className="w-100">
                    <div style={aniImg} className="position-relative w-100"></div>
                </a>
            </div>
            <button type="button" className="btn btn-danger btn-sm xButton position-absolute"><i className="fa fa-times"></i></button>
        </div>
    );
}

export default AnimeFavorite;