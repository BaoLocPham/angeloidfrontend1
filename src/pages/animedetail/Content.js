//dependencies
import React, { useState } from 'react';

//Content of anime {show only on mobile}
const Content = ({anime}) => {
    return (  
        <div id="content" className="col-12 my-3 d-sm-block d-md-none" style={{ backgroundColor: "#19293B", borderRadius: "8px"}}>
            <h5 id="Character" className="p-0 py-2">Content</h5>
            <div className="mb-3">
                {anime.content}
            </div>
        </div>
    );
}

export default Content;