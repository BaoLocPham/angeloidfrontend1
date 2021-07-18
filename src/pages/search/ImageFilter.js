import React from 'react';
import { Link } from 'react-router-dom';

const ImageFilter = ({ handleUploadImg, inputfile, imageShow }) => {

    const inputfileBase64 = "data:image/jpeg;base64, " + inputfile;
    const imageShowBase64 = "data:image/jpeg;base64, " + imageShow;

    return (
        <div>
            <div className="image-filter d-flex flex-row">
                <input class="form-control me-3" type="file" id="formFile" accept="image/png, image/jpeg" onChange={handleUploadImg} disabled={imageShow == "loading" ? true : false} />
                {/* Change search type button */}
                <div className="">
                    <Link to="/search">
                        <button type="button" className="btn btn-success">
                            <i className="fa fa-filter" aria-hidden="true"></i>
                        </button>
                    </Link>
                </div>
            </div>
            {/* Show uploaded image and image was config */}
            <div className="image-filter d-md-flex my-3">
                {/* Image Input */}
                <div className="col-12 col-sm-12 col-md-6 mb-3 d-flex justify-content-center">
                    <img src={inputfileBase64} className="img-fluid imageShowStyle" alt="" />
                </div>
                {
                    imageShow == "loading"
                        ?
                        // Loading
                        <div className="col-12 col-sm-12 col-md-6">
                            <div style={{ marginTop: "20%" }} className="text-center">
                                <div className="spinner-border text-light" style={{ height: "3rem", width: "3rem" }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        :
                        // Image Result
                        <div className="col-12 col-sm-12 col-md-6 mb-3 d-flex justify-content-center">
                            <img src={imageShowBase64} className="img-fluid imageShowStyle" alt="" />
                        </div>
                }
            </div>
        </div>
    );
}

export default ImageFilter;