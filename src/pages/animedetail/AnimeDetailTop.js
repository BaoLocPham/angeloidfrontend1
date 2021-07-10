//dependencies
import React from 'react';

//local dependencies
import './AnimeDetailTop.css';

const AnimeDetailTop = ({ anime, isClicked, user, rateList, handleAfterRatingReviewFavorite }) => {
    //Load background image
    const bacground_style = {
        backgroundImage: `url("data:image/*;base64,${anime.wallpaper}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 20%",
        backgroundSize: "cover"
    }

    //Load thumbnail image
    const thumb_style = {
        backgroundImage: `url("data:image/*;base64,${anime.thumbnail}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 20%",
        backgroundSize: "cover"
    }

    //When user rating
    const handleRating = (score) => {
        //Send data to API
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/review`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    animeId: anime.animeId,
                    userId: user.userId,
                    rateScore: score
                })
            })
            .then(res => { 
                //Local modify score in rating chart
                let modifiedScore = {};
                if (score === 1) {
                    modifiedScore = {one: rateList.one + 1};
                }
                if (score === 2) {
                    modifiedScore = { two: rateList.two + 1 };
                }
                if (score === 3) {
                    modifiedScore = { three: rateList.three + 1 };
                }
                if (score === 4) {
                    modifiedScore = { four: rateList.four + 1 };
                }
                if (score === 5) {
                    modifiedScore = { five: rateList.five + 1 };
                }

                //Disable rating button and add new score to Rating chart
                handleAfterRatingReviewFavorite({ rated: true }, modifiedScore);
            })
            .catch(err => { handleAfterRatingReviewFavorite({ rated: false })});
    }

    //When user click to favorite button
    const handleAddToFavorite = () => {
        //Fetch to API
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/favorite`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    animeId: anime.animeId,
                    userId: user.userId,
                })
            })
            .then(res => {
                //Disable favorite button
                handleAfterRatingReviewFavorite({ favorite: true });
            })
            .catch(err => { handleAfterRatingReviewFavorite({ favorite: false }) });
    }

    return (
        <div className="row mx-0 w-100 anime-detail-top p-0 scale125">

            {/* Model to rating */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header bg-dark-container">
                            <h5 className="modal-title" id="exampleModalLabel">Rating</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-dark-container">
                            <div className="d-flex flex-row justify-content-center" >
                                <div className="rate">
                                    <input type="radio" id="star5" onClick={() => handleRating(5)} name="rate" value="5" data-bs-dismiss="modal"/>
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" onClick={() => handleRating(4)} name="rate" value="4" data-bs-dismiss="modal"/>
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" onClick={() => handleRating(3)} name="rate" value="3" data-bs-dismiss="modal"/>
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" onClick={() => handleRating(2)} name="rate" value="2" data-bs-dismiss="modal"/>
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" onClick={() => handleRating(1)} name="rate" value="1" data-bs-dismiss="modal"/>
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer bg-dark-container">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background image */}
            <div className="col-12 p-0 bg_img" style={bacground_style}>
                {/* Anime Thumbnail  */}
                <div className="thumb" style={thumb_style}></div>
            </div>

            {/* Print Anime Info */}
            <div className="row mx-0 content w-100">
                <div className="col-12 col-md-3 p-1 d-flex flex-row justify-content-end align-items-end">
                    <div className="btn-group rate-fav-parent" role="group">
                        {/* Rating button */}
                        <button
                            type="button"
                            className="btn rating-button mx-auto"
                            style={{ backgroundColor: "#14A38B" }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            disabled={isClicked.rated}
                        >
                            Rating
                        </button>
                        {/* Favorite button */}
                        <button
                            type="button"
                            className="btn btn-danger ms-4 favorite-button"
                            disabled={isClicked.favorite}
                            onClick={handleAddToFavorite}
                        >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-9 px-2 m-0 px-md-5">
                    <div className="row h-100">
                        {/* Anime content */}
                        <div className="col-12 h-auto h-md-75">
                            <p className="fw-bold m-0 pt-1 p-md-3 h5">
                                {anime.animeName}
                            </p>
                            <div className="d-none d-md-block m-0 pt-1 p-md-3 title-desc">
                                {anime.content}
                            </div>
                        </div>

                        {/* Nav bar in AnimeDetailTop */}
                        <div className="col-12 h-auto p-2 d-flex flex-row justify-content-center m-auto">
                            <p className="mx-3 mx-md-5">Overview</p>
                            <p className="mx-3 mx-md-5"><a href="#character" className="anime-nav">Characters</a></p>
                            <p className="mx-3 mx-md-5"><a href="#trailer" className="anime-nav">Trailer</a></p>
                            <p className="mx-3 mx-md-5"><a href="#review" className="anime-nav">Review</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetailTop;