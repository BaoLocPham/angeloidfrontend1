import React from 'react';
import './Welcome.css';
import Amiya from './image/Amiya.png';
import SpeechBalloon from './image/speech-balloon.png';

const Welcome = () => {
    const balloonStyle = {
        marginTop: "10%"
    }

    return (
        <>
            <div className="d-md-none" style={{ height: "60px" }}></div>
            <div className="bg-arknights d-flex flex-row justify-content-center w-100">
                <img className="h-50 w-50 amiya" src={Amiya} />
                <img className="h-25 w-25 balloon" src={SpeechBalloon} style={balloonStyle} />
            </div>
        </>
    );
}

export default Welcome;