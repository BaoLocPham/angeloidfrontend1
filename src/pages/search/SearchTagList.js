import React from 'react';

const SearchTagList = ({ selectedTag, handleDeleteTag }) => {

    return (
        // Show Tag
        <div style={{ backgroundColor: "#131E2A" }} className="row justify-content-center">
            <div className="col-10">
                <i style={{ color: "white" }} className="fa fa-tag fa-lg mb-2 mb-md-3"></i>
                { selectedTag.length !== 0 ?
                    selectedTag.map(tag =>
                        <div key={tag.tagId} style={{ color: "white", backgroundColor: tag.tagBgColor }} className="btn rounded-pill mx-2 mb-2 mx-md-3 mb-md-3">{tag.tagName}<i onClick={() => handleDeleteTag(tag.tagId)} className="ms-2 fa fa-times"></i></div>
                    )
                : <span className="ps-3">No tag selected!</span> }
            </div>
        </div>
    );
}

export default SearchTagList;