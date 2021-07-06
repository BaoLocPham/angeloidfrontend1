import React from 'react';
import { Link } from 'react-router-dom';

const ImageFilter = ({ handleUploadImg, inputfile, imageShow }) => {

    const inputfileBase64 = "data:image/jpeg;base64, " + inputfile;
    const imageShowBase64 = "data:image/jpeg;base64, " + imageShow;

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
            <div className="image-filter d-md-flex my-3">
                <div className="col-12 col-sm-12 col-md-6 mb-3 d-flex justify-content-center">
                    <img src={inputfileBase64} className="img-fluid imageShowStyle" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 mb-3 d-flex justify-content-center">
                    <img src={imageShowBase64} className="img-fluid imageShowStyle" />
                </div>
            </div>
        </div>
    );
}

export default ImageFilter;