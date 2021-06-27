import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Load more when content of review is so long
const ReadMore = ({ children }) => {
    const content = children;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <p>
                {isReadMore ? content.slice(0, 500) + "..." : content}
            </p>
            <div className="row mx-0 justify-content-center">
                <button onClick={toggleReadMore} style={{ backgroundColor: "#19293B", color: "#76899C", border: "none" }}>
                    {isReadMore ? "Show more" : " Show less"}
                </button>
            </div>
        </>
    );
};

const Review = ({ reviewList, setReviewList, user, isClicked, anime, handleAfterRatingReviewFavorite }) => {

    // Review Form state
    const [reviewForm, setReviewForm] = useState({
        userId: user.userId,
        animeId: anime.animeId,
        content: "",
    });

    //Check input review if has data Review button can be clicked
    const [inputtedContent, setInputtedContent] = useState(true);

    //Handle change data in review form
    const handleReviewFormChange = (obj) => {
        setReviewForm(Object.assign({}, reviewForm, obj))
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
                body: JSON.stringify(reviewForm)
            })
            .then(res => {
                //Set new review to review List
                setReviewList([...reviewList, {
                    userId: user.userId,
                    user: {
                        fullname: user.fullname,
                        avatar: user.avatar
                    },
                    content: reviewForm.content,
                }]);

                //Disable rating button
                handleAfterRatingReviewFavorite({ reviewed: true });
            })
            .catch(err => { handleAfterRatingReviewFavorite({ reviewed: false }) });
    }

    //Style for review content
    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem"
    }

    //Style for review input
    const INPUT_FIELDS_STYLE = {
        backgroundColor: "#19293B",
        color: "#FFF",
        border: "none"
    }

    //Change Review button state when user input
    useEffect(() => {
        if (reviewForm.content !== "") {
            return setInputtedContent(false);
        }
        setInputtedContent(true);
    }, [reviewForm.content])

    return (
        // Show Review
        <div id="review" className="col-12 p-0">
            <h5 id="Review" className="py-3">Review</h5>
            {/* Input review */}
            {
                //Every user can view only one time
                (isClicked.reviewed === true) ? "" :

                <div className="row mx-0">
                    {/* Avatar in the left */}
                    <div className="col-1 px-0 mb-3" style={{
                        width: 40,
                        height: 40,
                        borderRadius: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: `url(data:image/*;base64,${(user.avatar !== undefined) ? user.avatar : ""})`
                    }}></div>

                    {/* User name and review content in the right */}
                    <div className="col-10 col-md-11 mb-3 d-flex flex-column">
                        <textarea className="form-control" rows="3" placeholder="How do you think about this anime?"
                            style={INPUT_FIELDS_STYLE}
                            value={reviewForm.content}
                            onChange={(event) => handleReviewFormChange({ content: event.target.value })}
                        ></textarea>
                            <button className="btn btn-success mt-2 align-self-end" onClick={handleRating} disabled={inputtedContent}>Review</button>
                    </div>
                </div>
            }

            {/* Other user review list */}
            <div className="row">
                <div>
                    {
                        (reviewList.length === 0) ?
                            <span>There is no review for this anime.</span>
                        :
                        reviewList.map(review => 
                            //Every review row
                            <div className="row mx-0" key={review.userId}>
                                {/* Avatar in the left */}
                                <div className="col-1 px-0 mb-3" style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "100%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundImage: `url(data:image/*;base64,${(review.user !== undefined) ? review.user.avatar : ""})`
                                }}></div>

                                {/* User name and review content in the right */}
                                <div className="col-10 col-md-11">
                                    <div className="mb-1 font-weight-light-bold">{(review.user !== undefined) ? review.user.fullname : ""}</div>
                                    <div style={frame} className="mb-3 p-2">
                                        {(review.content.length < 500) ? review.content : <ReadMore>{review.content}</ReadMore>}
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Review;