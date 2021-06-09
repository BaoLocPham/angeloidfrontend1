import React from 'react';
import "./Favorite.css"
import { Link } from 'react-router-dom';

const AnimeFavorite = ({ anime, onDelete }) => {
    const aniImg = {
        backgroundImage: `url(${anime.Img})`,
        backgroundSize: 'cover',
        height: '15rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }
    return (
        <>
            <div className="col-6 col-md-3 d-flex justify-content-end">
                {/* Anime Image */}
                <div className="w-100 p-3">
                    <Link to="/anime/1">
                        <div style={aniImg} className="position-relative w-100"></div>
                    </Link>
                </div>
                {/* Delete Button */}
                <div type="button" className="btn btn-sm DeleteFavoriteButton position-absolute" data-bs-toggle="modal" data-bs-target={`#deleteButton_${anime.Id}`}><i style={{ color: "white" }} className="fa fa-times"></i></div>
            </div>

            {/* Modal */}
            <div className="modal fade" id={`deleteButton_${anime.Id}`} tabIndex="-1" aria-labelledby="deleteButtonLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-Frame">
                        <div className="modal-header">
                            <h3 className="modal-title" id="deleteButtonLabel">Warnning</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">Onii-chan YAMETE KUDASAI!!!</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="deleteButton btn" onClick={() => onDelete(anime.Id)} data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimeFavorite;