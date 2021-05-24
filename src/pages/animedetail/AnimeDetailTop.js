//dependencies
import React, { useState } from 'react';

//local dependencies
import './AnimeDetailTop.css';
import bg from './image/bg.jpg';
import thumb from './image/thumb.jpg';

//Anime Info
const animeTitle = "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou";
const animeDesc = "Anos, the Demon King of Tyranny, has defeated humans, spirits, and gods alike. But even demon kings get tired of all the fighting sometimes! Hoping for a more peaceful life, Anos decides to reincarnate himself.When he wakes two thousand years later, though, he finds the world has become too peaceful--his descendants have grown weak and magic is in serious decline.Intending to reclaim his rightful place, he enrolls in Demon King Academy, where he finds that his magical power is off the charts.Literally. And because they can't measure his power, the faculty and other students regard Anos as a misfit.With the support of Misha, the one student he manages to befriend, the misfit (Demon King) begins his climb up the demon ranks! (Source: Square Enix Manga & Books)";

//Load background image
const bacground_style = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 20%",
    backgroundSize: "cover"
}

//Load thumbnail image
const thumb_style = {
    backgroundImage: `url(${thumb})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 20%",
    backgroundSize: "cover"
}

const AnimeDetailTop = () => {
    return (
        <div className="row mx-0 w-100 anime-detail-top p-0">

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
                                    <input type="radio" id="star5" onClick={() => { console.log("5") }} name="rate" value="5" />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" onClick={() => { console.log("4") }} name="rate" value="4" />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" onClick={() => { console.log("3") }} name="rate" value="3" />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" onClick={() => { console.log("2") }} name="rate" value="2" />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" onClick={() => { console.log("1") }} name="rate" value="1" />
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
                        >
                            Rating
                        </button>
                        {/* Favorite button */}
                        <button
                            type="button"
                            className="btn btn-danger ms-4 favorite-button"
                        >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-9 px-2 m-0 px-md-5">
                    <div className="row">
                        {/* Anime content */}
                        <div className="col-12 h-50">
                            <p className="fw-bold m-0 pt-1 p-md-3 h5">
                                {animeTitle}
                            </p>
                            <div className="d-none d-md-block m-0 pt-1 p-md-3 title-desc">
                                {animeDesc}
                            </div>
                        </div>

                        {/* Nav bar in AnimeDetailTop */}
                        <div className="col-12 h-25 p-2 d-flex flex-row justify-content-center">
                            <p className="mx-3 mx-md-5">Overview</p>
                            <p className="mx-3 mx-md-5">Characters</p>
                            <p className="mx-3 mx-md-5">Rating</p>
                            <p className="mx-3 mx-md-5">Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetailTop;