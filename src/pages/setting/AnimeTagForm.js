import React from 'react';

const AnimeTagForm = ({ tags, selectedTag, handleSelectTag, handleDeleteTag}) => {
    return (  
        <div className="row">
            {/* Select Tag */}
            <div className="col-12 col-md-6">
                <label htmlFor="duration" className="form-label">Tag</label>
                <select value="" className="form-select" defaultValue={""} onChange={handleSelectTag} aria-label="Default select example">
                    <option hidden disabled value=""></option>
                    {tags.slice(1).map(tag => (
                        <option key={`unselectTag${tag.tagId}`} value={tag.tagId}>{tag.tagName}</option>
                    ))}
                </select>
            </div>
            {/* Show Tag */}
            <div className="p-0 mt-3">
                {selectedTag.map(tag =>
                    <div key={`selectedTag${tag.tagId}`}
                        style={{ color: "white", backgroundColor: tag.tagBgColor }}
                        className="btn rounded-pill mx-2 mb-2 mx-md-3 mb-md-3">
                        {tag.tagName}
                        <i onClick={() => handleDeleteTag(tag.tagId)} className="ms-2 fa fa-times"></i>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AnimeTagForm;