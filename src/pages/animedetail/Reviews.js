import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Review = () => {
    const [reviewList, setReviewList] = useState([
        { id: 1, title: "9 Nine", content: "I cannot believe we've already reached the end of this wonderful series. I have to admit whilst I couldn't wait for the episodes to get released while playing through the 9-Nine series, I still didn't want it to end. Unfortunately, I have to let go of it now. However, each game turned out to be memorable to me and was an experience I won't forget anytime soon. Anyway, I went in with high expectations for the finale episode and, luckily, it didn't let me down. As expected, this episode is where everything comes together — And to an end. Please proceed reading this review with caution, as it contains heavy spoilers regarding episode 1-3. In that sense, playing the previous episodes before starting this one is highly recommended as the game itself spoils the happenings of the other games. Whilst episode 1-3 could have been seen as standalones, episode 4 works completely differently and assumes that the player completed the previous games as well." },
        { id: 2, title: "9 Nine", content: "During the previous episodes, I already knew the 9-Nine series will be unlike any other visual novel. And now, I can wholeheartedly recommend the series to any visual novel lover who appreciates a well-executed story. Even the last chapter turned out to be a delight and managed to wrap up everything well. Overall, the thing I adore about 9-Nine is that each episode builds upon another and just when I assumed that I figured everything out, the game manages to throw me off with plot twists I didn't expect at all. In addition to that, the romance is lovely and fits well into the happenings although the storyline is still noticeably in the foreground. That being said, do yourself a favor and play this game right away — anyone who enjoyed the previous episodes will absolutely love this entry as well." },
        { id: 3, title: "9 Nine", content: "So, the special feature here is that the player can jump between different branches. However, overall episode 4 is a kinetic novel as well as the other entries. So, if the player can jump to a different branch through a flowchart it's because the game wants them to. Other than that, the reader doesn't have any impact on the storyline, although they can decide which scenario they want to read through first, however, the order doesn't matter at all. Still, the branch had a grand purpose and made me feel like I actually could change the story and its happenings. Along with that, I could even look up a brief summary of each chapter from the previous games. This might be useful for those who forgot one or two events. In addition to that, the flowchart is available to check anytime during the playthrough so should the reader get confused they can reread it anytime.That being said, there is only one possible end the player can reach. Although choices are technically implemented, there is only one decision the player can choose so they only have the purpose of increasing the immersion. Luckily, this indeed helped me with getting more invested in the game." },
    ])

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
    }

    return (
        <>
            <div className="row mx-0">
                <div className="col-12">Review</div>
                <div className="col-12 justify-content-start">
                    {
                        reviewList.slice(reviewList.length - 2, reviewList.length).map(review =>
                            <div key={review.id} style={frame} className="col-12">
                                {review.content}
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    );
}

export default Review;