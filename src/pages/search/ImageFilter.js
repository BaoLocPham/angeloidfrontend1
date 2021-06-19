import React from 'react';
import { Link } from 'react-router-dom';

const ImageFilter = ({ handleUploadImg}) => {
    return (
        <div className="image-filter d-flex flex-row">
            <input class="form-control me-3" type="file" id="formFile" accept="image/png, image/jpeg" onChange={handleUploadImg}/>
            {/* Change search type button */}
            <div className="">
                <Link to="/search">
                    <button type="button" className="btn btn-success">
                        <i className="fa fa-filter" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ImageFilter;