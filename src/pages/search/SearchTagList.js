import React, { useState } from 'react';

const SearchTagList = ({ selectedTag, handleDeleteTag }) => {

    return (
        <div style={{ backgroundColor: "#131E2A" }} className="row justify-content-center">
            <div className="col-10">
                <i style={{ color: "white" }} className="fa fa-tag fa-lg mb-2 mb-md-3"></i>
                {selectedTag.map(tag =>
                    <button key={tag.tagId} style={{ color: "white", backgroundColor: tag.tagBgColor }} className="btn rounded-pill mx-2 mb-2 mx-md-3 mb-md-3">{tag.tagName}<i onClick={() => handleDeleteTag(tag.tagId)} className="ms-2 fa fa-times"></i></button>
                )}
            </div>
        </div>
    );
}

export default SearchTagList;