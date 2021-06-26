import React from 'react';
import { Link } from 'react-router-dom';

const ImageFilter = ({ handleUploadImg, inputfile, imageShow }) => {

    const inputfileBase64 = "data:image/jpeg;base64, " + inputfile;
    const imageShowBase64 = "data:image/jpeg;base64, " + imageShow;

    const imageShowStyle = {
        maxHeight: "30rem",
        maxWidth: "35rem",
    }

    return (
        <div>
            <div className="image-filter d-flex flex-row">
                <input class="form-control me-3" type="file" id="formFile" accept="image/png, image/jpeg" onChange={handleUploadImg} />
                {/* Change search type button */}
                <div className="">
                    <Link to="/search">
                        <button type="button" className="btn btn-success">
                            <i className="fa fa-filter" aria-hidden="true"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="image-filter d-flex justify-content-between my-3">
                <img style={imageShowStyle} src={inputfileBase64} className="img-fluid" />
                <img style={imageShowStyle} src={imageShowBase64} className="img-fluid" />
            </div>
        </div>
    );
}

export default ImageFilter;