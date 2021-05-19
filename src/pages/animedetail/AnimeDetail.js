import React from 'react';
import AnimeProfile from './AnimeProfile';
import Character from './Character';
import Reviews from './Reviews';
import Trailer from './Trailer'
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeDetail = () => {
    return (
        <>
            I am Anime Detail Page!
            <div>
                <div style={{ backgroundColor: "#131E2A", color: "white" }} className="row">
                    <div className="col-md-3"><AnimeProfile /></div>
                    <div className="col-md-9">
                        <div className="col-md-12">Relations</div>
                        <div className="col-md-12"><Character /></div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#131E2A", color: "white" }} className="row">
                    <div className="col-md-3">Tags</div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6"><Trailer /></div>
                            <div className="col-md-6">Rating</div>
                        </div>
                        <div className="row">Recommendations</div>
                        <div className="row"><Reviews /></div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AnimeDetail;