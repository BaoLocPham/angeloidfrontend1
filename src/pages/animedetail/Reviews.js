import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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

const Review = ({ reviewList }) => {

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem"
    }

    return (
        // Show Review
        <div id="review" className="col-12 p-0">
            <h5 id="Review" className="py-3">Review</h5>
            <div className="row">
                <div>
                    {
                        (reviewList.length === 0) ?
                            <span>There is no review for this anime.</span>
                        :
                        reviewList.map(review =>
                        <div key={review.userId} style={frame} className="mb-3 p-2">
                            {(review.content.length < 500) ? review.content : <ReadMore>{review.content}</ReadMore>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Review;