//dependencies
import React from 'react';

import wall from './image/75117132_p0.jpg';

const ThreadContent = ({content}) => {

    // Styles
    const POSTING_AVATAR = {
        backgroundImage: `url(${wall})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "40px 40px",
        width: 40,
        height: 40
    }

    return (  
        <div className="my-3 d-flex flex-column rounded-3 bg-dark-content">
            {/* Posting Header (Avatar & Tít le) */}
            <div class="d-flex flex-row px-3 py-2 align-items-center">
                <div className="rounded-circle" style={POSTING_AVATAR}></div>
                <div className="ms-3 w-50 fw-bold">{content.title}</div>
            </div>

            {/* Posting Body (Content) */}
            <div className="px-3 py-1 form-group">
                <div>{content.content}</div>
            </div>

            {/* Posting Image */}
            <div className="d-flex py-1 justify-content-end">
                <img 
                    className="w-100" 
                    // src={`data:image/*;base64,${content.image}`} 
                    src={wall}
                    alt=""
                />
            </div>
            <div className="px-3 pt-3 form-group">Comment</div>
        </div>
    );
}

export default ThreadContent;