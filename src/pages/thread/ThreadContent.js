//dependencies
import React from 'react';

const content = {
    title: "Anime ga sukidesu",
    content: "Anyone know this character. I see this on the internet.",
    image:""
}

const ThreadContent = () => {

    // Styles
    const POSTING_AVATAR = {
        // backgroundImage: `url(data:image/*;base64,)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "40px 40px",
        width: 40,
        height: 40
    }
    const IMG_CLOSE_BTN = {
        position: "absolute",
        zIndex: "2",
        width: 36,
        height: 36
    }
    const INPUT_FIELDS_STYLE = {
        backgroundColor: "#19293B",
        color: "#FFF"
    }

    return (  
        <div className="my-3 p-2 d-flex flex-column rounded-3 bg-dark-content">
            {/* Posting Header (Avatar & Tít le) */}
            <div class="d-flex flex-row p-2 align-items-center">
                {/* <div className="rounded-circle" style={POSTING_AVATAR}></div> */}
                <div className="ms-3 w-50">{content.title}</div>
            </div>

            {/* Posting Body (Content) */}
            <div className="p-2 form-group">
                <div>{content.content}</div>
            </div>

            {/* Posting Image */}
            {content.image !== "" ?
                <div className="d-flex justify-content-end">
                    <img className="w-100 p-3" src={`data:image/*;base64,${content.image}`} />
                </div>
                : ""}
        </div>
    );
}

export default ThreadContent;