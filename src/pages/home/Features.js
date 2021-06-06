//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//local dependencies
import './Features.css';

//Style for element
const background_style = {
    backgroundColor: "#131E2A",
    color: "#FFFFFF",
    width: "100%", 
    paddingTop: 70
}

const feature_style = {
    height: "auto",
    minHeight: "13rem",
    backgroundColor: "#11161d",
    color: "#FFFFFF", 
    borderRadius: "8px"
}

var feature_bootstrap = "m-3 text-center d-flex flex-column justify-content-center";

const Features = () => {
    return (  
        <div className="row mx-0 d-flex flex-row justify-content-center bg-features" style={background_style}>

            {/* Features of web application */}
            <div className="row m-3">
                <div className="col-0 col-md-1"></div>
                <p className="col-12 col-md-4 fw-bold my-auto">- Features</p>
                <h1 className="col-12 col-md-7 my-auto">Bring your hobby to anywhere</h1>
            </div>

            <div className="col-12 col-md-3">
                <div className={feature_bootstrap} style={feature_style}>
                    <i className="fa fa-mobile fa-5x mb-2" style={{color: "white"}}></i>
                    <h5 className="fst-italic">Bring anywhere</h5>
                    <p className="fst-italic">Keep track to all your favorite anime</p>
                </div>
            </div>
            

            <div className="col-12 col-md-3">
                <div className={feature_bootstrap} style={feature_style}>
                    <i className="fa fa-comments fa-5x mb-2" style={{color: "white"}}></i>
                    <h5 className="fst-italic">Join conservation</h5>
                    <p className="fst-italic">Post and comment with your favorite topic</p>
                </div>
            </div>
            
            <div className="col-12 col-md-3 ">
                <div className={feature_bootstrap} style={feature_style}>
                    <i className="fa fa-file-image-o fa-5x mb-2" style={{color: "white"}}></i>
                    <h5 className="fst-italic">New search function</h5>
                    <p className="fst-italic">Provide another way to meet your searching need</p>
                </div>
            </div>

            <div className="col-12 col-md-3 ">
                <div className={feature_bootstrap} style={feature_style}>
                    <i className="fa fa-bar-chart fa-5x mb-2" style={{color: "white"}}></i>
                    <h5 className="fst-italic">Discover new trend</h5>
                    <p className="fst-italic">Up to date new anime</p>
                </div>
            </div>
            
            {/* JOIN US button */}
            <div className="d-flex flex-row justify-content-center m-auto" >
                <Link to="/account/signup" style={{ textDecoration: "none" }}><button type="button" className="btn fw-bold" style={{ color: '#14A38B', width: "10rem", height: "3.5rem", backgroundColor: "#FFFFFF" }}>JOIN US</button></Link>
            </div>
            
        </div>
    );
}

export default Features;