import React from 'react';
import logo from './image/Logo-FU-03.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const style = {
    backgroundColor: "#11161d",
    height: "auto",
    padding: "2rem",
    color: "white"
};

const Footer = () => {
    return (
        <footer className="row mx-0" style={{width:"100%"}}>
            <div className="col-12 col-md-6" style={style}>
                <div className="d-flex flex-row mb-4 mt-4">
                    <i className="fa fa-map-marker fa-2x me-4" style={{color: "white"}}></i>
                    <h5 className="text-end">FPT University</h5>
                </div>
                <div className="d-flex flex-row mb-4">
                    <i className="fa fa-phone fa-2x me-3" style={{color: "white"}}></i>
                    <h5 className="text-end">+84 0123 4567</h5>
                </div>
                <div className="d-flex flex-row">
                    <i className="fa fa-envelope fa-2x me-2" style={{color: "white"}}></i>
                    <h5 className="float-end">support_angeloid@gmail.com</h5>
                </div>
            </div>
            <div className="col-12 col-md-6" style={style}>
                <h3>About Us</h3>
                <p>We are web application making company. Our most important mission is bring the difference to our country. We here to make your dream be come true.</p>
                <h3>Sponsor by</h3>
                <img src={logo} alt="FPT logo"/>
            </div>
        </footer>
    );
}

export default Footer;