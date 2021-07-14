//dependencies
import React from 'react';

//Content of anime {show only on mobile}
const Content = ({anime}) => {
    return (
        <div className="col-12 my-3 d-sm-block d-md-none">
        <div id="content" className="px-2 py-1" style={{ backgroundColor: "#19293B", borderRadius: "8px"}}>
            <h5 id="Character" className="p-0 py-2">Content</h5>
            <div className="mb-3">
                {anime.content}
            </div>
        </div>
        </div>
    );
}

export default Content;