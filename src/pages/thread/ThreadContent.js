//dependencies
import React from 'react';

import wall from './image/75117132_p0.jpg';
import wall2 from './image/Ep1_0.jpg';

const ThreadContent = ({content}) => {

    // Styles
    const POSTING_AVATAR = {
        backgroundImage: `url(data:image/*;base64,${content.user.avatar})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: 40,
        height: 40
    }

    return (  
        <div className="my-3 d-flex flex-column rounded-3 bg-dark-content">
            {/* Avatar of user */}
            <div className="d-flex flex-row px-3 py-2 align-items-center">
                <div className="rounded-circle" style={POSTING_AVATAR}></div>
                <div className="ms-3 w-50 fw-bold h-auto">
                    <p className="m-0">{content.user.fullName}</p>
                    <div>{content.title}</div>
                </div>
            </div>

            {/* Posting Body (Content) */}
            <div className="px-3 py-1 form-group">
                <div>{content.content}</div>
            </div>

            {/* Posting Image */}
            <div className="d-flex py-1 justify-content-end">
                <img 
                    className="w-100" 
                    src={`data:image/*;base64,${content.image}`} 
                    // src={(content.title === "Anime ga sukidesu") ? wall : wall2}
                    alt=""
                />
            </div>
            <div className="px-3 pt-1 form-group"></div>
        </div>
    );
}

export default ThreadContent;